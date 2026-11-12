import type { APIRoute } from 'astro';
import { getAllSpecies, createSpecies, type SpeciesInput } from '../../../db/species';
import { verifySession } from '../../../db/auth';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  try {
    const category = url.searchParams.get('categoria') || undefined;
    const search = url.searchParams.get('q') || undefined;

    const especies = getAllSpecies({ category, search });
    return new Response(JSON.stringify({ ok: true, count: especies.length, especies }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Error en GET /api/especies:', error);
    return new Response(JSON.stringify({ ok: false, error: 'Error al consultar las especies' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const POST: APIRoute = async ({ request, cookies }) => {
  // 1. Autorización en el servidor
  const sessionToken = cookies.get('choco_session')?.value;
  const user = verifySession(sessionToken);
  if (!user) {
    return new Response(
      JSON.stringify({ ok: false, error: 'No autorizado. Debes iniciar sesión como administrador.' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const body = await request.json();

    // 2. Validación de campos obligatorios
    if (!body.nombre || !body.nombre.trim()) {
      return new Response(JSON.stringify({ ok: false, error: 'El nombre común es obligatorio' }), { status: 400 });
    }
    if (!body.nombreCientifico || !body.nombreCientifico.trim()) {
      return new Response(JSON.stringify({ ok: false, error: 'El nombre científico es obligatorio' }), { status: 400 });
    }
    const categoriasValidas = ['Aves', 'Mamíferos', 'Anfibios', 'Insectos', 'Flora'];
    if (!body.categoria || !categoriasValidas.includes(body.categoria)) {
      return new Response(JSON.stringify({ ok: false, error: 'La categoría seleccionada no es válida' }), { status: 400 });
    }
    if (!body.imagen || !body.imagen.trim()) {
      return new Response(JSON.stringify({ ok: false, error: 'Debes proporcionar una imagen (subida o URL)' }), { status: 400 });
    }
    if (!body.descripcion || !body.descripcion.trim()) {
      return new Response(JSON.stringify({ ok: false, error: 'La descripción general es obligatoria' }), { status: 400 });
    }
    if (!body.estadoConservacion || !body.estadoConservacion.trim()) {
      return new Response(JSON.stringify({ ok: false, error: 'El estado de conservación es obligatorio' }), { status: 400 });
    }

    const input: SpeciesInput = {
      nombre: body.nombre.trim(),
      nombreCientifico: body.nombreCientifico.trim(),
      categoria: body.categoria,
      estadoConservacion: body.estadoConservacion.trim(),
      estadoTono: body.estadoTono,
      habitat: body.habitat?.trim() || 'Bosque Nublado del Chocó Andino',
      alimentacion: body.alimentacion?.trim() || (body.categoria === 'Flora' ? 'Autótrofa / Fotosíntesis' : 'No especificada'),
      imagen: body.imagen.trim(),
      altImagen: body.altImagen?.trim() || body.nombre.trim(),
      imagenesAdicionales: Array.isArray(body.imagenesAdicionales) ? body.imagenesAdicionales : [],
      descripcion: body.descripcion.trim(),
      clasificacion: body.clasificacion || {},
      caracteristicasFisicas: body.caracteristicasFisicas?.trim() || '',
      tamanoPeso: body.tamanoPeso?.trim() || '',
      rasgosIdentificacion: body.rasgosIdentificacion?.trim() || '',
      distribucionGeografica: body.distribucionGeografica?.trim() || 'Chocó Andino de Pichincha, Ecuador',
      rangoAltitudinal: body.rangoAltitudinal?.trim() || '500 - 2.800 m s.n.m.',
      comportamientoHabitos: body.comportamientoHabitos?.trim() || '',
      reproduccionCiclo: body.reproduccionCiclo?.trim() || '',
      funcionEcologica: body.funcionEcologica?.trim() || '',
      importanciaChocoAndino: body.importanciaChocoAndino?.trim() || '',
      amenazasPrincipales: body.amenazasPrincipales?.trim() || '',
      medidasProteccion: body.medidasProteccion?.trim() || '',
      familiaBotanica: body.familiaBotanica?.trim() || '',
      caracteristicasBotanicas: body.caracteristicasBotanicas || undefined,
      condicionesCrecimiento: body.condicionesCrecimiento?.trim() || '',
      relacionOrganismos: body.relacionOrganismos?.trim() || '',
      datosCuriosos: Array.isArray(body.datosCuriosos) ? body.datosCuriosos.filter(Boolean) : [],
      fuentes: Array.isArray(body.fuentes) ? body.fuentes.filter((f: any) => f && f.titulo) : [],
      distribucionPotencial: body.distribucionPotencial || undefined,
    };

    const nuevaEspecie = createSpecies(input);

    return new Response(
      JSON.stringify({
        ok: true,
        mensaje: 'Especie guardada exitosamente en la base de datos',
        especie: nuevaEspecie,
      }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error('Error en POST /api/especies:', error);
    const msg = error.message || 'Error al guardar la especie en la base de datos';
    const isConflict = msg.includes('Ya existe');
    return new Response(JSON.stringify({ ok: false, error: msg }), {
      status: isConflict ? 409 : 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
