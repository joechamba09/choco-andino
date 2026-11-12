-- ==============================================================================
-- SCHEMA DE BASE DE DATOS: CHOCÓ ANDINO BIODIVERSIDAD (POSTGRESQL)
-- Compatible con Supabase, Neon, Railway o PostgreSQL local
-- ==============================================================================

-- Extensión para generación de UUIDs si se requiere
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tabla de Especies
CREATE TABLE IF NOT EXISTS especies (
  id VARCHAR(120) PRIMARY KEY,
  slug VARCHAR(120) UNIQUE NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  nombre_cientifico VARCHAR(255) NOT NULL,
  categoria VARCHAR(50) NOT NULL CHECK (categoria IN ('Aves', 'Mamíferos', 'Anfibios', 'Insectos', 'Flora')),
  estado_conservacion VARCHAR(150) NOT NULL,
  estado_tono VARCHAR(20) NOT NULL DEFAULT 'ok' CHECK (estado_tono IN ('ok', 'alerta', 'riesgo', 'neutro')),
  habitat TEXT NOT NULL,
  alimentacion TEXT NOT NULL,
  imagen TEXT NOT NULL,
  alt_imagen TEXT NOT NULL,
  imagenes_adicionales JSONB DEFAULT '[]'::jsonb,
  descripcion TEXT NOT NULL,
  clasificacion JSONB NOT NULL DEFAULT '{}'::jsonb,
  caracteristicas_fisicas TEXT,
  tamano_peso VARCHAR(255),
  rasgos_identificacion TEXT,
  distribucion_geografica TEXT,
  rango_altitudinal VARCHAR(150),
  comportamiento_habitos TEXT,
  reproduccion_ciclo TEXT,
  funcion_ecologica TEXT,
  importancia_choco_andino TEXT,
  amenazas_principales TEXT,
  medidas_proteccion TEXT,
  familia_botanica VARCHAR(150),
  caracteristicas_botanicas JSONB,
  condiciones_crecimiento TEXT,
  relacion_organismos TEXT,
  datos_curiosos JSONB NOT NULL DEFAULT '[]'::jsonb,
  fuentes JSONB NOT NULL DEFAULT '[]'::jsonb,
  distribucion_potencial JSONB DEFAULT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_pg_especies_categoria ON especies (categoria);
CREATE INDEX IF NOT EXISTS idx_pg_especies_slug ON especies (slug);
CREATE INDEX IF NOT EXISTS idx_pg_especies_nombre ON especies (nombre);

-- Tabla de Usuarios
CREATE TABLE IF NOT EXISTS usuarios (
  id VARCHAR(80) PRIMARY KEY,
  username VARCHAR(80) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  salt VARCHAR(64) NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  rol VARCHAR(30) NOT NULL DEFAULT 'admin' CHECK (rol IN ('admin', 'editor')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Tabla de Sesiones
CREATE TABLE IF NOT EXISTS sesiones (
  id VARCHAR(128) PRIMARY KEY,
  usuario_id VARCHAR(80) NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
  expires_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
