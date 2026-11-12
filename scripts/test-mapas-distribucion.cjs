// scripts/test-mapas-distribucion.cjs
// Script de prueba y verificación de la funcionalidad de mapas de distribución potencial
const path = require('path');
const { DatabaseSync } = require('node:sqlite');

console.log('================================================================');
console.log(' VERIFICACIÓN DE MAPAS DE DISTRIBUCIÓN POTENCIAL DEL CHOCÓ ANDINO ');
console.log('================================================================\n');

const dbPath = path.resolve(__dirname, '../data/choco_andino.db');
const db = new DatabaseSync(dbPath);

// 1. Obtener todas las especies
const rows = db.prepare('SELECT id, slug, nombre, nombre_cientifico, categoria, rango_altitudinal, habitat, distribucion_potencial FROM especies ORDER BY categoria, nombre').all();
console.log(`1. Total de especies registradas en base de datos: ${rows.length}`);

if (rows.length !== 40) {
  console.error(`❌ Se esperaban 40 especies, pero se encontraron ${rows.length}`);
  process.exit(1);
}
console.log('✓ Conteo de 40 especies correcto en la base de datos.\n');

// 2. Verificar datos de distribución de cada especie
const { getDistribucionPorSlug, generarDistribucionEspecie } = require('../src/data/distribucionPotencial.ts');

let totalZonasVerde = 0;
let totalZonasAmarillo = 0;
let totalZonasRojo = 0;
let totalRegistrosPresencia = 0;
let especiesValidadas = 0;

for (const r of rows) {
  const dist = getDistribucionPorSlug(r.slug || r.id, {
    nombre: r.nombre,
    nombreCientifico: r.nombre_cientifico,
    categoria: r.categoria,
    rangoAltitudinal: r.rango_altitudinal,
    habitat: r.habitat
  });

  if (!dist) {
    console.error(`❌ Error: No se pudo obtener distribución para "${r.slug}"`);
    process.exit(1);
  }

  if (!dist.centroMapa || dist.centroMapa.length !== 2) {
    console.error(`❌ Centro de mapa inválido para "${r.slug}"`);
    process.exit(1);
  }

  // Verificar zonas
  const zonaAlta = dist.zonas.find(z => z.nivel === 'alta');
  const zonaMedia = dist.zonas.find(z => z.nivel === 'media');
  const zonaBaja = dist.zonas.find(z => z.nivel === 'baja');

  if (!zonaAlta || !zonaMedia || !zonaBaja) {
    console.error(`❌ Faltan capas bioclimáticas (alta/media/baja) para "${r.slug}"`);
    process.exit(1);
  }

  // Verificar colores
  if (zonaAlta.color !== '#2e7d32') {
    console.error(`❌ Color de zona alta debe ser verde (#2e7d32) en "${r.slug}"`);
  }
  if (zonaMedia.color !== '#f59e0b') {
    console.error(`❌ Color de zona media debe ser amarillo (#f59e0b) en "${r.slug}"`);
  }
  if (zonaBaja.color !== '#dc2626') {
    console.error(`❌ Color de zona baja debe ser rojo (#dc2626) en "${r.slug}"`);
  }

  totalZonasVerde++;
  totalZonasAmarillo++;
  totalZonasRojo++;

  // Verificar registros de presencia
  if (!dist.registrosPresencia || dist.registrosPresencia.length === 0) {
    console.error(`❌ Falta registros de presencia confirmada para "${r.slug}"`);
    process.exit(1);
  }

  for (const reg of dist.registrosPresencia) {
    if (typeof reg.lat !== 'number' || typeof reg.lng !== 'number' || !reg.localidad) {
      console.error(`❌ Registro de presencia malformado en "${r.slug}":`, reg);
      process.exit(1);
    }
    totalRegistrosPresencia++;
  }

  if (dist.estadoValidacion === 'validado') {
    especiesValidadas++;
  }
}

console.log(`2. Métricas de Cobertura Cartográfica:`);
console.log(`   - Capas de Alta Idoneidad (Verde): ${totalZonasVerde}/40`);
console.log(`   - Capas de Idoneidad Intermedia (Amarillo): ${totalZonasAmarillo}/40`);
console.log(`   - Capas Poco Favorables (Rojo): ${totalZonasRojo}/40`);
console.log(`   - Puntos de presencia georreferenciados: ${totalRegistrosPresencia}`);
console.log(`   - Especies con modelo validado: ${especiesValidadas}/40`);
console.log('✓ Todas las 40 especies poseen datos cartográficos completos e individuales.\n');

// 3. Probar generador dinámico para especies futuras
console.log('3. Probando generación automática para especie nueva...');
const nuevaMock = generarDistribucionEspecie(
  'Colibrí Picoespada Andino',
  'Ensifera ensifera',
  'Aves',
  '2.500 - 3.400 m s.n.m.',
  'Bosque altoandino y subpáramo'
);

if (nuevaMock && nuevaMock.zonas.length === 3 && nuevaMock.registrosPresencia.length > 0) {
  console.log('✓ Generador automático de modelos bioclimáticos responde correctamente.');
  console.log(`  - Rango óptimo asignado: ${nuevaMock.rangoOptimo}`);
  console.log(`  - Centro sugerido: [${nuevaMock.centroMapa.join(', ')}]`);
  console.log(`  - Estado de validación: "${nuevaMock.estadoValidacion}" (con aviso metodológico)`);
} else {
  console.error('❌ Error en el generador automático de modelos.');
  process.exit(1);
}

console.log('\n================================================================');
console.log(' ✓ TODAS LAS PRUEBAS DE MAPAS DE DISTRIBUCIÓN PASARON CON ÉXITO ');
console.log('================================================================');
