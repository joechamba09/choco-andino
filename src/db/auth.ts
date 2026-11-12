import crypto from 'node:crypto';
import { getDb } from './connection';

export interface User {
  id: string;
  username: string;
  nombre: string;
  email: string | null;
  rol: 'admin' | 'editor';
  createdAt: string;
}

export function hashPassword(password: string): { hash: string; salt: string } {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return { hash, salt };
}

export function verifyPassword(password: string, storedHash: string, salt: string): boolean {
  try {
    const computedHash = crypto.scryptSync(password, salt, 64).toString('hex');
    const bufA = Buffer.from(computedHash, 'hex');
    const bufB = Buffer.from(storedHash, 'hex');
    if (bufA.length !== bufB.length) return false;
    return crypto.timingSafeEqual(bufA, bufB);
  } catch {
    return false;
  }
}

export function authenticateUser(username: string, password: string): User | null {
  const db = getDb();
  const stmt = db.prepare('SELECT id, username, password_hash, salt, nombre, email, rol, created_at FROM usuarios WHERE username = ? COLLATE NOCASE');
  const user = stmt.get(username.trim()) as any;
  if (!user) return null;

  const valid = verifyPassword(password, user.password_hash, user.salt);
  if (!valid) return null;

  return {
    id: user.id,
    username: user.username,
    nombre: user.nombre,
    email: user.email,
    rol: user.rol,
    createdAt: user.created_at,
  };
}

export function createSession(userId: string): string {
  const db = getDb();
  const token = crypto.randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();

  const stmt = db.prepare('INSERT INTO sesiones (id, usuario_id, expires_at) VALUES (?, ?, ?)');
  stmt.run(token, userId, expiresAt);

  return token;
}

export function verifySession(token: string | null | undefined): User | null {
  if (!token) return null;
  const db = getDb();

  // Limpiar sesiones caducadas oportunamente
  try {
    db.prepare("DELETE FROM sesiones WHERE expires_at <= datetime('now')").run();
  } catch {}

  const stmt = db.prepare(`
    SELECT u.id, u.username, u.nombre, u.email, u.rol, u.created_at
    FROM sesiones s
    JOIN usuarios u ON s.usuario_id = u.id
    WHERE s.id = ? AND s.expires_at > datetime('now')
  `);

  const user = stmt.get(token) as any;
  if (!user) return null;

  return {
    id: user.id,
    username: user.username,
    nombre: user.nombre,
    email: user.email,
    rol: user.rol,
    createdAt: user.created_at,
  };
}

export function deleteSession(token: string): void {
  if (!token) return;
  const db = getDb();
  db.prepare('DELETE FROM sesiones WHERE id = ?').run(token);
}

export function createAdminUser(username: string, password: string, nombre = 'Administrador', email: string | null = null): User {
  const db = getDb();
  const id = crypto.randomUUID();
  const { hash, salt } = hashPassword(password);

  const stmt = db.prepare(`
    INSERT INTO usuarios (id, username, password_hash, salt, nombre, email, rol)
    VALUES (?, ?, ?, ?, ?, ?, 'admin')
  `);
  stmt.run(id, username.trim().toLowerCase(), hash, salt, nombre, email);

  return {
    id,
    username: username.trim().toLowerCase(),
    nombre,
    email,
    rol: 'admin',
    createdAt: new Date().toISOString(),
  };
}
