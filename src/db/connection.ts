// @ts-ignore
import { DatabaseSync } from 'node:sqlite';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { especies as especiesIniciales } from '../data/especies';

let dbInstance: any = null;

export function getDb(): any {
  if (dbInstance) return dbInstance;

  const dbRelativePath = process.env.DB_PATH || 'data/choco_andino.db';
  const dbPath = path.isAbsolute(dbRelativePath)
    ? dbRelativePath
    : path.resolve(process.cwd(), dbRelativePath);

  const dir = path.dirname(dbPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const db = new DatabaseSync(dbPath);

  // Optimizaciones de rendimiento y robustez ACID
  try {
    db.exec('PRAGMA journal_mode = WAL;');
    db.exec('PRAGMA foreign_keys = ON;');
    db.exec('PRAGMA busy_timeout = 5000;');
    db.exec('PRAGMA synchronous = NORMAL;');
  } catch (err) {
    console.warn('Advertencia al configurar PRAGMAs de SQLite:', err);
  }

  // Inicializar tablas base
  initTables(db);

  // Sembrado automático inicial si la base de datos está vacía
  autoSeed(db);

  dbInstance = db;
  return dbInstance;
}

function initTables(db: any) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS especies (
      id TEXT PRIMARY KEY,
      slug TEXT UNIQUE NOT NULL,
      nombre TEXT NOT NULL,
      nombre_cientifico TEXT NOT NULL,
      categoria TEXT NOT NULL CHECK (categoria IN ('Aves', 'Mamíferos', 'Anfibios', 'Insectos', 'Flora')),
      estado_conservacion TEXT NOT NULL,
      estado_tono TEXT NOT NULL DEFAULT 'ok' CHECK (estado_tono IN ('ok', 'alerta', 'riesgo', 'neutro')),
      habitat TEXT NOT NULL,
      alimentacion TEXT NOT NULL,
      imagen TEXT NOT NULL,
      alt_imagen TEXT NOT NULL,
      imagenes_adicionales TEXT DEFAULT '[]',
      descripcion TEXT NOT NULL,
      clasificacion TEXT NOT NULL DEFAULT '{}',
      caracteristicas_fisicas TEXT,
      tamano_peso TEXT,
      rasgos_identificacion TEXT,
      distribucion_geografica TEXT,
      rango_altitudinal TEXT,
      comportamiento_habitos TEXT,
      reproduccion_ciclo TEXT,
      funcion_ecologica TEXT,
      importancia_choco_andino TEXT,
      amenazas_principales TEXT,
      medidas_proteccion TEXT,
      familia_botanica TEXT,
      caracteristicas_botanicas TEXT,
      condiciones_crecimiento TEXT,
      relacion_organismos TEXT,
      datos_curiosos TEXT NOT NULL DEFAULT '[]',
      fuentes TEXT NOT NULL DEFAULT '[]',
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE INDEX IF NOT EXISTS idx_especies_categoria ON especies (categoria);
    CREATE INDEX IF NOT EXISTS idx_especies_slug ON especies (slug);
    CREATE INDEX IF NOT EXISTS idx_especies_nombre ON especies (nombre);

    CREATE TABLE IF NOT EXISTS usuarios (
      id TEXT PRIMARY KEY,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      salt TEXT NOT NULL,
      nombre TEXT NOT NULL,
      email TEXT,
      rol TEXT NOT NULL DEFAULT 'admin' CHECK (rol IN ('admin', 'editor')),
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE INDEX IF NOT EXISTS idx_usuarios_username ON usuarios (username);

    CREATE TABLE IF NOT EXISTS sesiones (
      id TEXT PRIMARY KEY,
      usuario_id TEXT NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
      expires_at TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    CREATE INDEX IF NOT EXISTS idx_sesiones_usuario ON sesiones (usuario_id);
    CREATE INDEX IF NOT EXISTS idx_sesiones_expires ON sesiones (expires_at);
  `);

  // Migración para soporte de mapa de distribución potencial
  try {
    const columns = db.prepare('PRAGMA table_info(especies)').all() as any[];
    const hasDistCol = columns.some((c: any) => c.name === 'distribucion_potencial');
    if (!hasDistCol) {
      db.exec('ALTER TABLE especies ADD COLUMN distribucion_potencial TEXT DEFAULT NULL;');
      console.log('✓ Migración aplicada: Columna distribucion_potencial agregada a la tabla especies.');
    }
  } catch (migErr) {
    console.warn('Advertencia durante migración de tabla especies:', migErr);
  }
}

function autoSeed(db: any) {
  // 1. Verificar si existen especies en la base de datos
  const countRow = db.prepare('SELECT COUNT(*) as count FROM especies').get() as any;
  if (!countRow || countRow.count === 0) {
    console.log('Sembrando catálogo de 40 especies iniciales en la base de datos...');
    const insertStmt = db.prepare(`
      INSERT OR REPLACE INTO especies (
        id, slug, nombre, nombre_cientifico, categoria, estado_conservacion, estado_tono,
        habitat, alimentacion, imagen, alt_imagen, imagenes_adicionales, descripcion,
        clasificacion, caracteristicas_fisicas, tamano_peso, rasgos_identificacion,
        distribucion_geografica, rango_altitudinal, comportamiento_habitos, reproduccion_ciclo,
        funcion_ecologica, importancia_choco_andino, amenazas_principales, medidas_proteccion,
        familia_botanica, caracteristicas_botanicas, condiciones_crecimiento, relacion_organismos,
        datos_curiosos, fuentes
      ) VALUES (
        ?, ?, ?, ?, ?, ?, ?,
        ?, ?, ?, ?, ?, ?,
        ?, ?, ?, ?,
        ?, ?, ?, ?,
        ?, ?, ?, ?,
        ?, ?, ?, ?,
        ?, ?
      )
    `);

    for (const esp of especiesIniciales) {
      const d = esp.data;
      insertStmt.run(
        esp.id,
        esp.id,
        d.nombre,
        d.nombreCientifico,
        d.categoria,
        d.estadoConservacion,
        d.estadoTono || 'ok',
        d.habitat || '',
        d.alimentacion || '',
        d.imagen,
        d.altImagen || d.nombre,
        JSON.stringify([]),
        d.descripcion,
        JSON.stringify(d.clasificacion || {}),
        d.caracteristicasFisicas || '',
        d.tamanoPeso || '',
        d.rasgosIdentificacion || '',
        d.distribucionGeografica || '',
        d.rangoAltitudinal || '',
        d.comportamientoHabitos || '',
        d.reproduccionCiclo || '',
        d.funcionEcologica || '',
        d.importanciaChocoAndino || '',
        d.amenazasPrincipales || '',
        d.medidasProteccion || '',
        d.familiaBotanica || '',
        d.caracteristicasBotanicas ? JSON.stringify(d.caracteristicasBotanicas) : null,
        d.condicionesCrecimiento || '',
        d.relacionOrganismos || '',
        JSON.stringify(d.datosCuriosos || []),
        JSON.stringify(d.fuentes || [])
      );
    }
    console.log('✓ Sembrado completado: 40 especies persistidas en SQLite.');
  }

  // 2. Verificar si existe al menos un usuario administrador
  const userCountRow = db.prepare('SELECT COUNT(*) as count FROM usuarios').get() as any;
  if (!userCountRow || userCountRow.count === 0) {
    const defaultUser = process.env.DEFAULT_ADMIN_USER || 'admin';
    const defaultPass = process.env.DEFAULT_ADMIN_PASSWORD || 'ChocoAndino2026!';
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.scryptSync(defaultPass, salt, 64).toString('hex');
    const id = crypto.randomUUID();

    db.prepare(`
      INSERT INTO usuarios (id, username, password_hash, salt, nombre, email, rol)
      VALUES (?, ?, ?, ?, ?, ?, 'admin')
    `).run(id, defaultUser.toLowerCase(), hash, salt, 'Administrador del Chocó', 'admin@chocoandino.org');

    console.log(`✓ Administrador inicial creado (usuario: "${defaultUser}")`);
  }
}
