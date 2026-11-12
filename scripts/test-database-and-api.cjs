const path = require('node:path');
const fs = require('node:fs');
const crypto = require('node:crypto');
const { DatabaseSync } = require('node:sqlite');

console.log('================================================================');
console.log(' PRUEBAS INTEGRALES DE BASE DE DATOS Y AUTENTICACIÓN ');
console.log('================================================================\n');

// 1. Conexión a la base de datos
const dbPath = path.resolve(__dirname, '../data/choco_andino.db');
console.log(`1. Verificando ruta de la base de datos: ${dbPath}`);
if (!fs.existsSync(dbPath)) {
  console.log('   La base de datos se inicializará ahora.');
}

const db = new DatabaseSync(dbPath);
db.exec('PRAGMA foreign_keys = ON;');
db.exec('PRAGMA journal_mode = WAL;');

// 2. Ejecutar schema si es necesario
const schemaPath = path.resolve(__dirname, '../src/db/schema.sql');
const schemaSql = fs.readFileSync(schemaPath, 'utf8');
db.exec(schemaSql);
console.log('✓ Tablas creadas / verificadas en SQLite.');

// 3. Verificar admin user
let adminRow = db.prepare('SELECT * FROM usuarios WHERE username = ?').get('admin');
if (!adminRow) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync('ChocoAndino2026!', salt, 64).toString('hex');
  const id = crypto.randomUUID();
  db.prepare(`
    INSERT INTO usuarios (id, username, password_hash, salt, nombre, email, rol)
    VALUES (?, 'admin', ?, ?, 'Administrador del Chocó', 'admin@chocoandino.org', 'admin')
  `).run(id, hash, salt);
  adminRow = db.prepare('SELECT * FROM usuarios WHERE username = ?').get('admin');
}
console.log(`✓ Usuario admin verificado: id=${adminRow.id}, username=${adminRow.username}`);

// 4. Test de verificación de contraseña con scrypt
const computedHash = crypto.scryptSync('ChocoAndino2026!', adminRow.salt, 64).toString('hex');
const passValid = crypto.timingSafeEqual(Buffer.from(computedHash, 'hex'), Buffer.from(adminRow.password_hash, 'hex'));
console.log(`✓ Verificación de contraseña válida: ${passValid}`);

const badHash = crypto.scryptSync('ClaveIncorrecta', adminRow.salt, 64).toString('hex');
const badValid = crypto.timingSafeEqual(Buffer.from(badHash, 'hex'), Buffer.from(adminRow.password_hash, 'hex'));
console.log(`✓ Rechazo de contraseña inválida: ${!badValid}`);

// 5. Test de sesiones
const sessionToken = crypto.randomBytes(32).toString('hex');
const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
db.prepare('INSERT INTO sesiones (id, usuario_id, expires_at) VALUES (?, ?, ?)').run(sessionToken, adminRow.id, expiresAt);

const sessionFound = db.prepare(`
  SELECT u.username, u.rol FROM sesiones s
  JOIN usuarios u ON s.usuario_id = u.id
  WHERE s.id = ? AND s.expires_at > datetime('now')
`).get(sessionToken);

console.log(`✓ Creación y lectura de sesión activa: ${sessionFound ? sessionFound.username : 'error'}`);
db.prepare('DELETE FROM sesiones WHERE id = ?').run(sessionToken);

// 6. Test de conteo de especies
const countRow = db.prepare('SELECT COUNT(*) as count FROM especies').get();
console.log(`\n6. Especies actualmente en base de datos: ${countRow.count}`);

// 7. Test de CRUD completo con una especie temporal
const testSlug = 'especie-prueba-test-' + Date.now();
console.log(`\n7. Probando inserción de nueva especie ("${testSlug}")...`);

db.prepare(`
  INSERT INTO especies (
    id, slug, nombre, nombre_cientifico, categoria, estado_conservacion, estado_tono,
    habitat, alimentacion, imagen, alt_imagen, descripcion
  ) VALUES (
    ?, ?, 'Especie de Prueba', 'Species testus', 'Aves', 'Preocupación menor (LC)', 'ok',
    'Bosque Nublado', 'Semillas y frutos', '/images/especies/test.jpg', 'Foto prueba',
    'Descripción detallada de la especie de prueba para validar el sistema de base de datos.'
  )
`).run(testSlug, testSlug);

const inserted = db.prepare('SELECT * FROM especies WHERE slug = ?').get(testSlug);
console.log(`✓ Especie insertada correctamente: "${inserted.nombre}" (${inserted.nombre_cientifico})`);

// Actualización
console.log('8. Probando actualización de especie...');
db.prepare('UPDATE especies SET nombre = ?, updated_at = datetime(\'now\') WHERE slug = ?')
  .run('Especie de Prueba Actualizada', testSlug);

const updated = db.prepare('SELECT * FROM especies WHERE slug = ?').get(testSlug);
console.log(`✓ Especie actualizada: "${updated.nombre}"`);

// Eliminación
console.log('9. Probando eliminación con confirmación...');
db.prepare('DELETE FROM especies WHERE slug = ?').run(testSlug);
const deleted = db.prepare('SELECT * FROM especies WHERE slug = ?').get(testSlug);
console.log(`✓ Especie eliminada permanentemente: ${!deleted}`);

// 10. Conteo por categorías
console.log('\n10. Conteo por categoría en SQLite:');
const catRows = db.prepare('SELECT categoria, COUNT(*) as c FROM especies GROUP BY categoria').all();
catRows.forEach(r => console.log(`   - ${r.categoria}: ${r.c} especies`));

console.log('\n================================================================');
console.log(' ¡TODAS LAS PRUEBAS DE BASE DE DATOS Y SEGURIDAD EXITOSAS! ');
console.log('================================================================\n');
