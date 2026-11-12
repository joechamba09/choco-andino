const http = require('http');
const { spawn } = require('child_process');

process.env.PORT = '4329';
process.env.HOST = '127.0.0.1';

const server = spawn('node', ['./dist/server/entry.mjs'], {
  stdio: 'pipe',
  env: process.env,
  cwd: process.cwd()
});

setTimeout(() => {
  http.get('http://127.0.0.1:4329/', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      console.log('\n======================================================');
      console.log(' VERIFICACIÓN FORMAL DE HTML PARA DEFENSA DE TESIS');
      console.log('======================================================');
      console.log('STATUS:', res.statusCode);
      
      const checks = [
        { label: 'Opción "Aprende" presente', ok: data.includes('Aprende') },
        { label: 'Opción "Catálogo" presente', ok: data.includes('Catálogo') },
        { label: 'Única opción "Panel de administrador" presente', ok: data.includes('Panel de administrador') },
        { label: 'Intranet ELIMINADA', ok: !data.toLowerCase().includes('intranet') },
        { label: 'Correo institucional ELIMINADO', ok: !data.toLowerCase().includes('correo institucional') },
        { label: 'Sirha ELIMINADO', ok: !data.toLowerCase().includes('sirha') },
        { label: 'Turismo ELIMINADO de navegación pública', ok: !data.includes('TURISMO') && !data.includes('Turismo de la Reserva') },
        { label: 'Noticias ELIMINADO de navegación pública', ok: !data.includes('NOTICIAS') && !data.includes('Noticias de la Reserva') },
        { label: 'Sección Aves presente', ok: data.includes('id="sec-aves"') },
        { label: 'Sección Mamíferos presente', ok: data.includes('id="sec-mamiferos"') },
        { label: 'Sección Anfibios presente', ok: data.includes('id="sec-anfibios"') },
        { label: 'Sección Insectos presente', ok: data.includes('id="sec-insectos"') },
        { label: 'Sección Flora presente', ok: data.includes('id="sec-flora"') },
        { label: '40 tarjetas de especies renderizadas', ok: (data.match(/species-card/g) || []).length === 40 }
      ];

      let allPassed = true;
      checks.forEach((c) => {
        console.log(`${c.ok ? '✓' : '✗'} ${c.label}: ${c.ok}`);
        if (!c.ok) allPassed = false;
      });

      console.log('======================================================');
      if (allPassed) {
        console.log('¡TODAS LAS VERIFICACIONES DE NAVEGACIÓN Y ESTRUCTURA APROBADAS!');
      } else {
        console.log('ADVERTENCIA: Alguna verificación no se cumplió.');
      }
      console.log('======================================================');

      server.kill();
      process.exit(allPassed ? 0 : 1);
    });
  }).on('error', (err) => {
    console.error('Error al consultar:', err);
    server.kill();
    process.exit(1);
  });
}, 2500);
