import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { verifySession } from '../../db/auth';

export const prerender = false;

const ALLOWED_MIME_TYPES: Record<string, string> = {
  'image/jpeg': '.jpg',
  'image/png': '.png',
  'image/webp': '.webp',
  'image/avif': '.avif',
  'image/gif': '.gif',
};

const MAX_FILE_SIZE = 8 * 1024 * 1024; // 8 MB

export const POST: APIRoute = async ({ request, cookies }) => {
  // 1. Verificación de autorización de administrador en el servidor
  const sessionToken = cookies.get('choco_session')?.value;
  const user = verifySession(sessionToken);
  if (!user) {
    return new Response(
      JSON.stringify({ ok: false, error: 'Acceso no autorizado. Inicia sesión en el panel.' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get('image') as File | null;

    if (!file || typeof file === 'string' || file.size === 0) {
      return new Response(
        JSON.stringify({ ok: false, error: 'No se envió ningún archivo de imagen válido' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return new Response(
        JSON.stringify({ ok: false, error: 'La imagen excede el tamaño máximo permitido (8 MB)' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const mime = file.type.toLowerCase();
    const ext = ALLOWED_MIME_TYPES[mime];
    if (!ext) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Formato no permitido. Utiliza JPG, PNG, WebP o AVIF' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Nombre seguro y único
    const rawName = file.name
      .replace(/\.[^/.]+$/, '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 30) || 'foto';

    const uniqueSuffix = Date.now() + '-' + crypto.randomBytes(4).toString('hex');
    const filename = `${rawName}-${uniqueSuffix}${ext}`;

    const uploadsDir = path.resolve(process.cwd(), 'public/uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const targetPath = path.join(uploadsDir, filename);
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    await fs.promises.writeFile(targetPath, buffer);

    const publicUrl = `/uploads/${filename}`;

    return new Response(
      JSON.stringify({
        ok: true,
        url: publicUrl,
        filename,
        size: file.size,
        mime,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error('Error al subir imagen en /api/upload:', error);
    return new Response(
      JSON.stringify({ ok: false, error: 'Error interno al procesar y guardar la imagen' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
