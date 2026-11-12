import { getDb } from './connection';
import type { Especie, EspecieData } from '../data/especies';
import { getDistribucionPorSlug, type DistribucionPotencialData } from '../data/distribucionPotencial';

export interface SpeciesInput {
  id?: string;
  slug?: string;
  nombre: string;
  nombreCientifico: string;
  categoria: 'Aves' | 'Mamíferos' | 'Anfibios' | 'Insectos' | 'Flora';
  estadoConservacion: string;
  estadoTono?: 'ok' | 'alerta' | 'riesgo' | 'neutro';
  habitat: string;
  alimentacion: string;
  imagen: string;
  altImagen?: string;
  imagenesAdicionales?: string[];
  descripcion: string;
  clasificacion?: {
    reino?: string;
    filo?: string;
    clase?: string;
    orden?: string;
    familia?: string;
    genero?: string;
  };
  caracteristicasFisicas?: string;
  tamanoPeso?: string;
  rasgosIdentificacion?: string;
  distribucionGeografica?: string;
  rangoAltitudinal?: string;
  distribucionPotencial?: DistribucionPotencialData;
  comportamientoHabitos?: string;
  reproduccionCiclo?: string;
  funcionEcologica?: string;
  importanciaChocoAndino?: string;
  amenazasPrincipales?: string;
  medidasProteccion?: string;
  familiaBotanica?: string;
  caracteristicasBotanicas?: {
    hojas?: string;
    flores?: string;
    frutosSemillas?: string;
    troncoRaices?: string;
  };
  condicionesCrecimiento?: string;
  relacionOrganismos?: string;
  datosCuriosos?: string[];
  fuentes?: { titulo: string; enlace?: string }[];
}

export function slugify(text: string): string {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'especie-' + Date.now();
}

function safeJsonParse<T>(jsonStr: string | null | undefined, fallback: T): T {
  if (!jsonStr) return fallback;
  try {
    return JSON.parse(jsonStr);
  } catch {
    return fallback;
  }
}

export function rowToEspecie(row: any): Especie {
  const clasificacion = safeJsonParse(row.clasificacion, {
    reino: row.categoria === 'Flora' ? 'Plantae' : 'Animalia',
    filo: row.categoria === 'Flora' ? 'Tracheophyta' : 'Chordata',
    clase: '',
    orden: '',
    familia: '',
    genero: ''
  });

  const caracteristicasBotanicas = row.caracteristicas_botanicas
    ? safeJsonParse(row.caracteristicas_botanicas, undefined)
    : undefined;

  let distribucionPotencial: DistribucionPotencialData | undefined = undefined;
  if (row.distribucion_potencial) {
    distribucionPotencial = safeJsonParse<DistribucionPotencialData | undefined>(row.distribucion_potencial, undefined);
  }
  if (!distribucionPotencial) {
    distribucionPotencial = getDistribucionPorSlug(row.slug || row.id, {
      nombre: row.nombre,
      nombreCientifico: row.nombre_cientifico,
      categoria: row.categoria,
      rangoAltitudinal: row.rango_altitudinal,
      habitat: row.habitat,
    });
  }

  const data: EspecieData & {
    imagenesAdicionales?: string[];
    createdAt?: string;
    updatedAt?: string;
  } = {
    nombre: row.nombre,
    nombreCientifico: row.nombre_cientifico,
    categoria: row.categoria,
    estadoConservacion: row.estado_conservacion,
    estadoTono: row.estado_tono || 'ok',
    habitat: row.habitat || 'Bosque Nublado del Chocó Andino',
    alimentacion: row.alimentacion || 'No especificada',
    imagen: row.imagen,
    altImagen: row.alt_imagen || row.nombre,
    imagenesAdicionales: safeJsonParse<string[]>(row.imagenes_adicionales, []),
    descripcion: row.descripcion,
    clasificacion,
    caracteristicasFisicas: row.caracteristicas_fisicas || '',
    tamanoPeso: row.tamano_peso || '',
    rasgosIdentificacion: row.rasgos_identificacion || '',
    distribucionGeografica: row.distribucion_geografica || 'Chocó Andino de Pichincha, Ecuador',
    rangoAltitudinal: row.rango_altitudinal || '500 - 2.800 m s.n.m.',
    distribucionPotencial,
    comportamientoHabitos: row.comportamiento_habitos || '',
    reproduccionCiclo: row.reproduccion_ciclo || '',
    funcionEcologica: row.funcion_ecologica || '',
    importanciaChocoAndino: row.importancia_choco_andino || '',
    amenazasPrincipales: row.amenazas_principales || '',
    medidasProteccion: row.medidas_proteccion || '',
    familiaBotanica: row.familia_botanica || undefined,
    caracteristicasBotanicas,
    condicionesCrecimiento: row.condiciones_crecimiento || undefined,
    relacionOrganismos: row.relacion_organismos || undefined,
    datosCuriosos: safeJsonParse<string[]>(row.datos_curiosos, []),
    fuentes: safeJsonParse<{ titulo: string; enlace?: string }[]>(row.fuentes, []),
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };

  return {
    id: row.slug || row.id,
    data,
  };
}

export function getAllSpecies(options?: { category?: string; search?: string }): Especie[] {
  const db = getDb();
  let sql = 'SELECT * FROM especies WHERE 1=1';
  const params: any[] = [];

  if (options?.category && options.category !== 'Todas') {
    sql += ' AND categoria = ?';
    params.push(options.category);
  }

  if (options?.search && options.search.trim()) {
    const q = `%${options.search.trim().toLowerCase()}%`;
    sql += ' AND (LOWER(nombre) LIKE ? OR LOWER(nombre_cientifico) LIKE ? OR LOWER(descripcion) LIKE ?)';
    params.push(q, q, q);
  }

  sql += ' ORDER BY created_at ASC';

  const stmt = db.prepare(sql);
  const rows = stmt.all(...params) as any[];
  return rows.map(rowToEspecie);
}

export function getSpeciesBySlug(slug: string): Especie | null {
  const db = getDb();
  const stmt = db.prepare('SELECT * FROM especies WHERE slug = ? OR id = ? LIMIT 1');
  const row = stmt.get(slug, slug) as any;
  if (!row) return null;
  return rowToEspecie(row);
}

export function getSpeciesById(id: string): Especie | null {
  return getSpeciesBySlug(id);
}

export function getAdjacentSpecies(currentSlug: string): { prevEspecie: Especie; nextEspecie: Especie } {
  const all = getAllSpecies();
  if (all.length === 0) {
    throw new Error('No hay especies en el catálogo');
  }

  const idx = all.findIndex((e) => e.id === currentSlug);
  if (idx === -1) {
    return {
      prevEspecie: all[0],
      nextEspecie: all[all.length - 1],
    };
  }

  const prevEspecie = all[(idx - 1 + all.length) % all.length];
  const nextEspecie = all[(idx + 1) % all.length];

  return { prevEspecie, nextEspecie };
}

export function getCategoryCounts(): Record<string, number> {
  const db = getDb();
  const rows = db.prepare('SELECT categoria, COUNT(*) as count FROM especies GROUP BY categoria').all() as any[];
  const counts: Record<string, number> = {
    Aves: 0,
    Mamíferos: 0,
    Anfibios: 0,
    Insectos: 0,
    Flora: 0,
    Total: 0,
  };

  let total = 0;
  for (const r of rows) {
    counts[r.categoria] = r.count;
    total += r.count;
  }
  counts.Total = total;
  return counts;
}

export function determineEstadoTono(estadoConservacion: string): 'ok' | 'alerta' | 'riesgo' | 'neutro' {
  const s = estadoConservacion.toLowerCase();
  if (s.includes('vulnerable') || s.includes('peligro') || s.includes('(vu)') || s.includes('(en)') || s.includes('(cr)')) {
    return 'riesgo';
  }
  if (s.includes('casi amenazad') || s.includes('(nt)') || s.includes('alerta')) {
    return 'alerta';
  }
  if (s.includes('menor') || s.includes('(lc)') || s.includes('estable')) {
    return 'ok';
  }
  return 'neutro';
}

export function createSpecies(input: SpeciesInput): Especie {
  const db = getDb();
  const slug = input.slug ? slugify(input.slug) : slugify(input.nombre);
  const id = input.id || slug;

  // Comprobar si ya existe una especie con el mismo slug o nombre científico
  const existing = db.prepare('SELECT id FROM especies WHERE slug = ? OR LOWER(nombre_cientifico) = LOWER(?)').get(slug, input.nombreCientifico);
  if (existing) {
    throw new Error(`Ya existe una especie registrada con el identificador "${slug}" o nombre científico "${input.nombreCientifico}"`);
  }

  const estadoTono = input.estadoTono || determineEstadoTono(input.estadoConservacion);

  const stmt = db.prepare(`
    INSERT INTO especies (
      id, slug, nombre, nombre_cientifico, categoria, estado_conservacion, estado_tono,
      habitat, alimentacion, imagen, alt_imagen, imagenes_adicionales, descripcion,
      clasificacion, caracteristicas_fisicas, tamano_peso, rasgos_identificacion,
      distribucion_geografica, rango_altitudinal, comportamiento_habitos, reproduccion_ciclo,
      funcion_ecologica, importancia_choco_andino, amenazas_principales, medidas_proteccion,
      familia_botanica, caracteristicas_botanicas, condiciones_crecimiento, relacion_organismos,
      datos_curiosos, fuentes, distribucion_potencial
    ) VALUES (
      ?, ?, ?, ?, ?, ?, ?,
      ?, ?, ?, ?, ?, ?,
      ?, ?, ?, ?,
      ?, ?, ?, ?,
      ?, ?, ?, ?,
      ?, ?, ?, ?,
      ?, ?, ?
    )
  `);

  stmt.run(
    id,
    slug,
    input.nombre.trim(),
    input.nombreCientifico.trim(),
    input.categoria,
    input.estadoConservacion.trim(),
    estadoTono,
    input.habitat.trim(),
    input.alimentacion.trim(),
    input.imagen.trim(),
    (input.altImagen || input.nombre).trim(),
    JSON.stringify(input.imagenesAdicionales || []),
    input.descripcion.trim(),
    JSON.stringify(input.clasificacion || {}),
    input.caracteristicasFisicas?.trim() || '',
    input.tamanoPeso?.trim() || '',
    input.rasgosIdentificacion?.trim() || '',
    input.distribucionGeografica?.trim() || 'Chocó Andino de Pichincha, Ecuador',
    input.rangoAltitudinal?.trim() || '500 - 2.800 m s.n.m.',
    input.comportamientoHabitos?.trim() || '',
    input.reproduccionCiclo?.trim() || '',
    input.funcionEcologica?.trim() || '',
    input.importanciaChocoAndino?.trim() || '',
    input.amenazasPrincipales?.trim() || '',
    input.medidasProteccion?.trim() || '',
    input.familiaBotanica?.trim() || '',
    input.caracteristicasBotanicas ? JSON.stringify(input.caracteristicasBotanicas) : null,
    input.condicionesCrecimiento?.trim() || '',
    input.relacionOrganismos?.trim() || '',
    JSON.stringify(input.datosCuriosos || []),
    JSON.stringify(input.fuentes || []),
    input.distribucionPotencial ? JSON.stringify(input.distribucionPotencial) : null
  );

  const created = getSpeciesBySlug(slug);
  if (!created) throw new Error('Error al recuperar la especie recién creada');
  return created;
}

export function updateSpecies(idOrSlug: string, input: Partial<SpeciesInput>): Especie {
  const db = getDb();
  const current = getSpeciesBySlug(idOrSlug);
  if (!current) {
    throw new Error(`Especie con id o slug "${idOrSlug}" no encontrada`);
  }

  const d = current.data;
  const nombre = input.nombre !== undefined ? input.nombre.trim() : d.nombre;
  const nombreCientifico = input.nombreCientifico !== undefined ? input.nombreCientifico.trim() : d.nombreCientifico;
  const categoria = input.categoria || d.categoria;
  const estadoConservacion = input.estadoConservacion !== undefined ? input.estadoConservacion.trim() : d.estadoConservacion;
  const estadoTono = input.estadoTono || determineEstadoTono(estadoConservacion);
  const habitat = input.habitat !== undefined ? input.habitat.trim() : d.habitat;
  const alimentacion = input.alimentacion !== undefined ? input.alimentacion.trim() : d.alimentacion;
  const imagen = input.imagen !== undefined ? input.imagen.trim() : d.imagen;
  const altImagen = input.altImagen !== undefined ? input.altImagen.trim() : d.altImagen;
  const imagenesAdicionales = input.imagenesAdicionales !== undefined ? input.imagenesAdicionales : (d as any).imagenesAdicionales || [];
  const descripcion = input.descripcion !== undefined ? input.descripcion.trim() : d.descripcion;
  const clasificacion = input.clasificacion !== undefined ? input.clasificacion : d.clasificacion;
  const caracteristicasFisicas = input.caracteristicasFisicas !== undefined ? input.caracteristicasFisicas.trim() : d.caracteristicasFisicas;
  const tamanoPeso = input.tamanoPeso !== undefined ? input.tamanoPeso.trim() : d.tamanoPeso;
  const rasgosIdentificacion = input.rasgosIdentificacion !== undefined ? input.rasgosIdentificacion.trim() : d.rasgosIdentificacion;
  const distribucionGeografica = input.distribucionGeografica !== undefined ? input.distribucionGeografica.trim() : d.distribucionGeografica;
  const rangoAltitudinal = input.rangoAltitudinal !== undefined ? input.rangoAltitudinal.trim() : d.rangoAltitudinal;
  const comportamientoHabitos = input.comportamientoHabitos !== undefined ? input.comportamientoHabitos.trim() : d.comportamientoHabitos;
  const reproduccionCiclo = input.reproduccionCiclo !== undefined ? input.reproduccionCiclo.trim() : d.reproduccionCiclo;
  const funcionEcologica = input.funcionEcologica !== undefined ? input.funcionEcologica.trim() : d.funcionEcologica;
  const importanciaChocoAndino = input.importanciaChocoAndino !== undefined ? input.importanciaChocoAndino.trim() : d.importanciaChocoAndino;
  const amenazasPrincipales = input.amenazasPrincipales !== undefined ? input.amenazasPrincipales.trim() : d.amenazasPrincipales;
  const medidasProteccion = input.medidasProteccion !== undefined ? input.medidasProteccion.trim() : d.medidasProteccion;
  const familiaBotanica = input.familiaBotanica !== undefined ? input.familiaBotanica.trim() : d.familiaBotanica;
  const caracteristicasBotanicas = input.caracteristicasBotanicas !== undefined ? input.caracteristicasBotanicas : d.caracteristicasBotanicas;
  const condicionesCrecimiento = input.condicionesCrecimiento !== undefined ? input.condicionesCrecimiento.trim() : d.condicionesCrecimiento;
  const relacionOrganismos = input.relacionOrganismos !== undefined ? input.relacionOrganismos.trim() : d.relacionOrganismos;
  const datosCuriosos = input.datosCuriosos !== undefined ? input.datosCuriosos : d.datosCuriosos;
  const fuentes = input.fuentes !== undefined ? input.fuentes : d.fuentes;
  const distribucionPotencial = input.distribucionPotencial !== undefined
    ? input.distribucionPotencial
    : (d as any).distribucionPotencial;

  const stmt = db.prepare(`
    UPDATE especies SET
      nombre = ?,
      nombre_cientifico = ?,
      categoria = ?,
      estado_conservacion = ?,
      estado_tono = ?,
      habitat = ?,
      alimentacion = ?,
      imagen = ?,
      alt_imagen = ?,
      imagenes_adicionales = ?,
      descripcion = ?,
      clasificacion = ?,
      caracteristicas_fisicas = ?,
      tamano_peso = ?,
      rasgos_identificacion = ?,
      distribucion_geografica = ?,
      rango_altitudinal = ?,
      comportamiento_habitos = ?,
      reproduccion_ciclo = ?,
      funcion_ecologica = ?,
      importancia_choco_andino = ?,
      amenazas_principales = ?,
      medidas_proteccion = ?,
      familia_botanica = ?,
      caracteristicas_botanicas = ?,
      condiciones_crecimiento = ?,
      relacion_organismos = ?,
      datos_curiosos = ?,
      fuentes = ?,
      distribucion_potencial = ?,
      updated_at = datetime('now')
    WHERE slug = ? OR id = ?
  `);

  stmt.run(
    nombre,
    nombreCientifico,
    categoria,
    estadoConservacion,
    estadoTono,
    habitat,
    alimentacion,
    imagen,
    altImagen,
    JSON.stringify(imagenesAdicionales),
    descripcion,
    JSON.stringify(clasificacion),
    caracteristicasFisicas,
    tamanoPeso,
    rasgosIdentificacion,
    distribucionGeografica,
    rangoAltitudinal,
    comportamientoHabitos,
    reproduccionCiclo,
    funcionEcologica,
    importanciaChocoAndino,
    amenazasPrincipales,
    medidasProteccion,
    familiaBotanica || null,
    caracteristicasBotanicas ? JSON.stringify(caracteristicasBotanicas) : null,
    condicionesCrecimiento || null,
    relacionOrganismos || null,
    JSON.stringify(datosCuriosos),
    JSON.stringify(fuentes),
    distribucionPotencial ? JSON.stringify(distribucionPotencial) : null,
    current.id,
    current.id
  );

  return getSpeciesBySlug(current.id)!;
}

export function deleteSpecies(idOrSlug: string): boolean {
  const db = getDb();
  const stmt = db.prepare('DELETE FROM especies WHERE slug = ? OR id = ?');
  const res = stmt.run(idOrSlug, idOrSlug);
  return res.changes > 0;
}
