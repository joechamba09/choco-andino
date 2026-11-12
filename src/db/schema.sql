-- ==============================================================================
-- SCHEMA DE BASE DE DATOS: CHOCÓ ANDINO BIODIVERSIDAD (SQLITE)
-- ==============================================================================

PRAGMA foreign_keys = ON;

-- Tabla de Especies del Catálogo
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
  distribucion_potencial TEXT DEFAULT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_especies_categoria ON especies (categoria);
CREATE INDEX IF NOT EXISTS idx_especies_slug ON especies (slug);
CREATE INDEX IF NOT EXISTS idx_especies_nombre ON especies (nombre);
CREATE INDEX IF NOT EXISTS idx_especies_nombre_cientifico ON especies (nombre_cientifico);

-- Tabla de Usuarios Administradores
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

-- Tabla de Sesiones Activas
CREATE TABLE IF NOT EXISTS sesiones (
  id TEXT PRIMARY KEY,
  usuario_id TEXT NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
  expires_at TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_sesiones_usuario ON sesiones (usuario_id);
CREATE INDEX IF NOT EXISTS idx_sesiones_expires ON sesiones (expires_at);
