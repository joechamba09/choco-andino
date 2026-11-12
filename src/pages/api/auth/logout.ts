import type { APIRoute } from 'astro';
import { deleteSession } from '../../../db/auth';

export const prerender = false;

export const POST: APIRoute = async ({ cookies, redirect }) => {
  const token = cookies.get('choco_session')?.value;
  if (token) {
    deleteSession(token);
  }

  cookies.delete('choco_session', { path: '/' });

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const GET: APIRoute = async ({ cookies, redirect }) => {
  const token = cookies.get('choco_session')?.value;
  if (token) {
    deleteSession(token);
  }
  cookies.delete('choco_session', { path: '/' });
  return redirect('/admin/login');
};
