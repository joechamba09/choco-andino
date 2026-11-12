import type { APIRoute } from 'astro';
import { authenticateUser, createSession } from '../../../db/auth';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    let username = '';
    let password = '';

    const contentType = request.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      const body = await request.json();
      username = body.username || '';
      password = body.password || '';
    } else {
      const formData = await request.formData();
      username = (formData.get('username') as string) || '';
      password = (formData.get('password') as string) || '';
    }

    if (!username.trim() || !password.trim()) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Por favor ingresa usuario y contraseña' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const user = authenticateUser(username, password);
    if (!user) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Usuario o contraseña incorrectos' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const sessionToken = createSession(user.id);

    // Configurar cookie de sesión segura HTTP-only
    cookies.set('choco_session', sessionToken, {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60, // 7 días
    });

    return new Response(
      JSON.stringify({ ok: true, user: { id: user.id, username: user.username, nombre: user.nombre } }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error('Error en /api/auth/login:', error);
    return new Response(
      JSON.stringify({ ok: false, error: 'Error interno del servidor al autenticar' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
