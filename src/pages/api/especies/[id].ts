import type { APIRoute } from 'astro';
import { getSpeciesById, updateSpecies, deleteSpecies } from '../../../db/species';
import { verifySession } from '../../../db/auth';

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  const { id } = params;
  if (!id) {
    return new Response(JSON.stringify({ ok: false, error: 'Identificador no proporcionado' }), { status: 400 });
  }

  const especie = getSpeciesById(id);
  if (!especie) {
    return new Response(JSON.stringify({ ok: false, error: 'Especie no encontrada' }), { status: 404 });
  }

  return new Response(JSON.stringify({ ok: true, especie }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const PUT: APIRoute = async ({ params, request, cookies }) => {
  // 1. Autorización del administrador
  const sessionToken = cookies.get('choco_session')?.value;
  const user = verifySession(sessionToken);
  if (!user) {
    return new Response(
      JSON.stringify({ ok: false, error: 'No autorizado. Debes iniciar sesión como administrador.' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const { id } = params;
  if (!id) {
    return new Response(JSON.stringify({ ok: false, error: 'Identificador no proporcionado' }), { status: 400 });
  }

  try {
    const body = await request.json();
    const updated = updateSpecies(id, body);

    return new Response(
      JSON.stringify({
        ok: true,
        mensaje: 'Especie actualizada correctamente en la base de datos',
        especie: updated,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error(`Error en PUT /api/especies/${id}:`, error);
    return new Response(
      JSON.stringify({ ok: false, error: error.message || 'Error al actualizar la especie' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

export const DELETE: APIRoute = async ({ params, cookies }) => {
  // 1. Autorización del administrador
  const sessionToken = cookies.get('choco_session')?.value;
  const user = verifySession(sessionToken);
  if (!user) {
    return new Response(
      JSON.stringify({ ok: false, error: 'No autorizado. Debes iniciar sesión como administrador.' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const { id } = params;
  if (!id) {
    return new Response(JSON.stringify({ ok: false, error: 'Identificador no proporcionado' }), { status: 400 });
  }

  try {
    const deleted = deleteSpecies(id);
    if (!deleted) {
      return new Response(JSON.stringify({ ok: false, error: 'La especie no existe o ya fue eliminada' }), { status: 404 });
    }

    return new Response(
      JSON.stringify({ ok: true, mensaje: 'Especie eliminada permanentemente de la base de datos' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error(`Error en DELETE /api/especies/${id}:`, error);
    return new Response(
      JSON.stringify({ ok: false, error: error.message || 'Error al eliminar la especie' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
