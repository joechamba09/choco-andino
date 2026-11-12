export interface EspecieData {
  nombre: string;
  nombreCientifico: string;
  categoria: 'Aves' | 'Mamíferos' | 'Anfibios' | 'Insectos' | 'Flora';
  estadoConservacion: string;
  estadoTono: 'ok' | 'alerta' | 'riesgo' | 'neutro';
  habitat: string;
  alimentacion: string;
  imagen: string;
  altImagen: string;
  descripcion: string;

  // Taxonomía y clasificación
  clasificacion: {
    reino: string;
    filo: string;
    clase: string;
    orden: string;
    familia: string;
    genero: string;
  };

  // Morfología y rasgos de identificación
  caracteristicasFisicas: string;
  tamanoPeso: string;
  rasgosIdentificacion: string;

  // Distribución y ecología
  distribucionGeografica: string;
  rangoAltitudinal: string;
  distribucionPotencial?: any;
  comportamientoHabitos: string;
  reproduccionCiclo: string;
  funcionEcologica: string;
  importanciaChocoAndino: string;

  // Conservación
  amenazasPrincipales: string;
  medidasProteccion: string;

  // Aspectos botánicos (Flora)
  familiaBotanica?: string;
  caracteristicasBotanicas?: {
    hojas?: string;
    flores?: string;
    frutosSemillas?: string;
    troncoRaices?: string;
  };
  condicionesCrecimiento?: string;
  relacionOrganismos?: string;

  // Enriquecimiento pedagógico
  datosCuriosos: string[];
  fuentes: { titulo: string; enlace?: string }[];
}

export interface Especie {
  id: string;
  data: EspecieData;
}

export const especies: Especie[] = [
  // ==========================================
  // 1. AVES (8 especies en total)
  // ==========================================
  {
    id: 'gallo-de-la-pena',
    data: {
      nombre: 'Gallo de la Peña Andino',
      nombreCientifico: 'Rupicola peruvianus sanguinolentus',
      categoria: 'Aves',
      estadoConservacion: 'Preocupación Menor (LC)',
      estadoTono: 'ok',
      habitat: 'Cañadas húmedas, barrancos rocosos y bosques nublados',
      alimentacion: 'Frugívoro (consume frutos silvestres de lauráceas y rubiáceas)',
      imagen: '/images/especies/gallo-de-la-pena.jpg',
      altImagen: 'Gallo de la Peña macho con cresta naranja brillante en rama del Chocó Andino',
      descripcion: 'Ave emblemática de los bosques nublados andinos, famosa por el extraordinario color rojo-anaranjado de los machos y sus rituales de cortejo grupal en arenas comunitarias o leks.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Chordata',
        clase: 'Aves',
        orden: 'Passeriformes',
        familia: 'Cotingidae',
        genero: 'Rupicola'
      },
      caracteristicasFisicas: 'Marcado dimorfismo sexual. El macho ostenta un plumaje rojo-anaranjado encendido que cubre casi todo el cuerpo, con alas y cola negras, y plumas escapulares gris claro. Posee una prominente cresta en forma de disco que cubre casi por completo el pico. La hembra es de tonos marrón rojizo oscuro u oliva apagado con una cresta reducida para camuflaje.',
      tamanoPeso: '30 a 35 cm de longitud; peso aproximado entre 220 y 300 gramos.',
      rasgosIdentificacion: 'Cresta discoidal en abanico sobre la cabeza; plumaje naranja incandescente en machos; vuelo ondulante y vocalizaciones estridentes parecidas al gruñido de un cerdo silvestre.',
      distribucionGeografica: 'Vertiente occidental de los Andes en el noroccidente de Pichincha (Mindo, Nanegalito, Pacto, Reserva Maquipucuna y Refugio Paz de las Aves).',
      rangoAltitudinal: '500 a 2.400 msnm, con mayor abundancia entre los 1.000 y 1.800 msnm.',
      comportamientoHabitos: 'Diurno y esquivo fuera del lek. Al amanecer, varios machos se reúnen en un sector específico del bosque para competir por las hembras mediante sacudidas de cabeza, aleteos y chasquidos de pico.',
      reproduccionCiclo: 'Polígamos. La hembra asume en solitario la construcción del nido (elaborado con barro, saliva y fibras vegetales en paredes rocosas protegidas de la lluvia), la incubación de 2 huevos durante 28 días y la crianza.',
      funcionEcologica: 'Dispersor primario de semillas de gran tamaño en el bosque nublado, facilitando la regeneración de árboles nativos en laderas pronunciadas.',
      importanciaChocoAndino: 'Especie paraguas e ícono del ecoturismo y aviturismo internacional en Mindo y el Chocó Andino, dinamizando la economía sostenible de las comunidades locales.',
      amenazasPrincipales: 'Deforestación por tala comercial, fragmentación del bosque por carreteras y captura ilegal ocasional para tráfico de fauna.',
      medidasProteccion: 'Conservación estricta de cañones y quebradas en reservas comunitarias y privadas; corredores ecológicos que conectan áreas protegidas en la Mancomunidad del Chocó Andino.',
      datosCuriosos: [
        'La cresta discoidal del macho es tan densa que cubre el pico por completo cuando se mira de frente.',
        'Los sitios de exhibición o leks pueden mantenerse activos en el mismo lugar exacto del bosque durante décadas.',
        'Anidan exclusivamente en paredes verticales de roca sombreadas para protegerse de depredadores terrestres.'
      ],
      fuentes: [
        { titulo: 'BirdLife International - Rupicola peruvianus', enlace: 'https://www.birdlife.org' },
        { titulo: 'Aves del Ecuador - Guía de Campo (Freile & Restall, 2018)' },
        { titulo: 'INABIO - Instituto Nacional de Biodiversidad de Ecuador', enlace: 'https://inabio.biodiversidad.gob.ec' }
      ]
    }
  },
  {
    id: 'tucan-andino',
    data: {
      nombre: 'Tucán Andino Piquiverde',
      nombreCientifico: 'Andigena laminirostris',
      categoria: 'Aves',
      estadoConservacion: 'Casi Amenazado (NT)',
      estadoTono: 'alerta',
      habitat: 'Bosques montanos húmedos de niebla con abundante carga de musgos y epífitas',
      alimentacion: 'Frugívoro e insectívoro facultativo (frutos de higuerones, cecropias y pequeños vertebrados)',
      imagen: '/images/especies/tucan-andino.jpg',
      altImagen: 'Tucán Andino Piquiverde posado sobre rama con musgo en Tandayapa, Chocó Andino',
      descripcion: 'Uno de los tucanes de montaña más hermosos y amenazados de Sudamérica, endémico de la franja biogeográfica del Chocó Andino en el noroccidente de Ecuador y suroccidente de Colombia.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Chordata',
        clase: 'Aves',
        orden: 'Piciformes',
        familia: 'Ramphastidae',
        genero: 'Andigena'
      },
      caracteristicasFisicas: 'Manto superior marrón oliváceo, coronilla y nuca negras, pecho y vientre azul grisáceo iridiscente, rabadilla amarillo brillante y muslos castaños. Su pico es macizo con una placa basal córnea de color marfil amarillento sobre fondo negro.',
      tamanoPeso: '46 a 51 cm de largo total; peso entre 275 y 355 gramos.',
      rasgosIdentificacion: 'Pico con placa elevada marfil sobre fondo negro en la mandíbula superior; plumaje corporal azul pizarra contrastado con rabadilla amarilla dorada; llamadas potentes en dúo.',
      distribucionGeografica: 'Franja altitudinal de la vertiente occidental andina de Pichincha: cuencas de Tandayapa, Nanegal, Mindo, Mashpi y volcán Pichincha.',
      rangoAltitudinal: '1.200 a 3.200 msnm, concentrándose principalmente entre 1.600 y 2.600 msnm.',
      comportamientoHabitos: 'Habita en parejas o grupos familiares de 3 a 6 individuos. Se desplazan saltando entre el dosel y subdosel del bosque nublado. Cantan a dúo al amanecer.',
      reproduccionCiclo: 'Anida en cavidades naturales de troncos de árboles añosos a alturas de 10 a 25 metros. La hembra pone 2 a 3 huevos que son incubados por ambos progenitores.',
      funcionEcologica: 'Dispersor clave de semillas de árboles de gran talla del dosel andino (como palmas de cera y lauráceas), vital para el bosque.',
      importanciaChocoAndino: 'Símbolo bioindicador de la madurez y salud de los bosques montanos de la Reserva de Biosfera del Chocó Andino.',
      amenazasPrincipales: 'Deforestación del bosque nublado primario, escasez de árboles viejos con oquedades para anidación y cambio climático.',
      medidasProteccion: 'Protección de árboles centenarios en reservas de conservación comunitaria; instalación de cajas nido artificiales.',
      datosCuriosos: [
        'La placa dura y elevada sobre su pico da origen a su nombre científico: laminirostris significa "pico con lámina".',
        'Tolera temperaturas cercanas a 5 °C gracias a su plumaje denso y plumón aislante.',
        'Las parejas cantan a dúo de forma tan sincrónica que parece el sonido emitido por una sola ave.'
      ],
      fuentes: [
        { titulo: 'UICN Red List - Andigena laminirostris', enlace: 'https://www.iucnredlist.org' },
        { titulo: 'Fundación Jocotoco - Proyectos de conservación Chocó Andino' },
        { titulo: 'Birds of the World (Cornell Lab of Ornithology)' }
      ]
    }
  },
  {
    id: 'colibri-raqueta',
    data: {
      nombre: 'Colibrí Raqueta de Botas Blancas',
      nombreCientifico: 'Ocreatus underwoodii melanantherus',
      categoria: 'Aves',
      estadoConservacion: 'Preocupación Menor (LC)',
      estadoTono: 'ok',
      habitat: 'Bordes de bosque nublado, claros arbustivos y jardines ricos en néctar',
      alimentacion: 'Nectarívoro e insectívoro (néctar de bromelias, ericáceas y pequeños insectos al vuelo)',
      imagen: '/images/especies/colibri-raqueta.jpg',
      altImagen: 'Colibrí Raqueta de Botas Blancas macho en vuelo mostrando sus dos raquetas caudales en Chocó Andino',
      descripcion: 'Uno de los colibríes más fascinantes de la cordillera occidental ecuatoriana, inconfundible por los mechones blancos como motas de algodón en sus patas y las largas plumas caudales rematadas en raquetas.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Chordata',
        clase: 'Aves',
        orden: 'Apodiformes',
        familia: 'Trochilidae',
        genero: 'Ocreatus'
      },
      caracteristicasFisicas: 'El macho luce plumaje verde esmeralda resplandeciente con garganta irisada. Las patas están envueltas por densas "botas" de plumón blanco puro. Las plumas exteriores de su cola son largas, curvas y terminan en discos azul oscuro.',
      tamanoPeso: '11 a 15 cm (incluyendo plumas caudales en machos); peso ligero de 2,8 a 3,3 gramos.',
      rasgosIdentificacion: 'Dos largas raquetas caudales que flamean durante el vuelo; llamativas "botas" de plumón blanco en los tarsos; vuelo acrobático muy rápido.',
      distribucionGeografica: 'Laderas occidentales de Pichincha: Mindo, Tandayapa, Nanegalito, Reserva Bellavista y Maquipucuna.',
      rangoAltitudinal: '900 a 2.500 msnm en bosques montanos húmedos.',
      comportamientoHabitos: 'Muy activo, territorial y veloz. En el cortejo, el macho vuela frente a la hembra moviendo rítmicamente las raquetas de su cola como péndulos.',
      reproduccionCiclo: 'Nido en forma de copa con pelusa vegetal, musgo y telas de araña. Pone 2 huevos minúsculos que incuba durante 16 a 17 días.',
      funcionEcologica: 'Polinizador imprescindible de docenas de especies de plantas nativas con flores tubulares de corola estrecha.',
      importanciaChocoAndino: 'Constituye uno de los mayores atractivos en los comederos y jardines de colibríes de la Mancomunidad del Chocó Andino.',
      amenazasPrincipales: 'Uso de pesticidas agrícolas en los valles y pérdida de arbustos nativos melíferos.',
      medidasProteccion: 'Mantenimiento de jardines botánicos comunitarios, siembra de plantas nativas y protección de reservas privadas.',
      datosCuriosos: [
        'Las "botitas" de plumón blanco ayudan a mantener calientes las extremidades en las frías mañanas del bosque nublado.',
        'Puede batir sus alas entre 50 y 80 veces por segundo.',
        'La subespecie melanantherus es característica de la vertiente occidental de Ecuador.'
      ],
      fuentes: [
        { titulo: 'Guía de Colibríes de Ecuador - INABIO' },
        { titulo: 'eBird Ecuador - Ocreatus underwoodii' }
      ]
    }
  },
  {
    id: 'barbudo-tucan',
    data: {
      nombre: 'Barbudo Tucán (Yumbo)',
      nombreCientifico: 'Semnornis ramphastinus',
      categoria: 'Aves',
      estadoConservacion: 'Casi Amenazado (NT)',
      estadoTono: 'alerta',
      habitat: 'Bosques montanos nublados primarios y secundarios avanzados con epífitas',
      alimentacion: 'Frugívoro (frutos e higos silvestres) y complementariamente insectos y néctar',
      imagen: '/images/especies/barbudo-tucan.jpg',
      altImagen: 'Barbudo Tucán o Yumbo con su pico robusto amarillo y plumaje multicolor en Chocó Andino',
      descripcion: 'Ave casi endémica del Chocó biogeográfico, célebre por su extraordinaria combinación de colores vivos, su pico bicolor robusto y su canto sincronizado a dúo.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Chordata',
        clase: 'Aves',
        orden: 'Piciformes',
        familia: 'Semnornithidae',
        genero: 'Semnornis'
      },
      caracteristicasFisicas: 'Cuerpo compacto con cabeza grande y robusta. Coronilla y nuca negras con un penacho nucal alargado; máscara facial gris y pecho amarillo anaranjado con abdomen rojizo. Pico grueso amarillo verdoso con punta negra.',
      tamanoPeso: '19 a 22 cm de longitud; peso aproximado de 80 a 115 gramos.',
      rasgosIdentificacion: 'Pico robusto cónico amarillo con punta negra; penacho de plumas negras en la nuca; pecho amarillo encendido; potente canto antifonal "cloc-cloc-cloc".',
      distribucionGeografica: 'Restringida al Chocó Andino de Ecuador y suroeste de Colombia. En Pichincha habita en Mindo, Mashpi, Pacto, Nanegalito y Santa Lucía.',
      rangoAltitudinal: '1.000 a 2.400 msnm en el flanco occidental de los Andes.',
      comportamientoHabitos: 'Muy sociable, vive en grupos familiares con anidación cooperativa donde los hijos anteriores ayudan a alimentar a los nuevos pichones.',
      reproduccionCiclo: 'Excavan cavidades en troncos muertos de árboles blandos. Ponen de 2 a 3 huevos que son incubados durante 15 días.',
      funcionEcologica: 'Dispersor de semillas del bosque nublado y creador de cavidades reutilizadas por otras aves y pequeños mamíferos.',
      importanciaChocoAndino: 'Especie insignia de la identidad natural del Chocó Andino; conocida localmente como "Yumbo" en honor a los antiguos pobladores indígenas.',
      amenazasPrincipales: 'Tala de árboles secos donde anida y fragmentación de hábitat.',
      medidasProteccion: 'Conservación de árboles muertos en pie en reservas locales y fincas comunitarias.',
      datosCuriosos: [
        'Hasta 16 individuos pueden dormir juntos dentro de una sola cavidad de árbol en las noches frías para conservar calor.',
        'Pertenece a una familia única de aves (Semnornithidae) con solo dos especies en el planeta.',
        'El canto es un dúo sincrónico perfecto entre macho y hembra.'
      ],
      fuentes: [
        { titulo: 'BirdLife International - Semnornis ramphastinus' },
        { titulo: 'Libro Rojo de las Aves del Ecuador' }
      ]
    }
  },
  {
    id: 'tangara-cuellidorada',
    data: {
      nombre: 'Tangara Cuellidorada',
      nombreCientifico: 'Chalcothraupis ruficervix',
      categoria: 'Aves',
      estadoConservacion: 'Preocupación Menor (LC)',
      estadoTono: 'ok',
      habitat: 'Dosel y subdosel de bosques montanos húmedos, claros y bordes con árboles en fructificación',
      alimentacion: 'Frugívora e insectívora (bayas silvestres de melastomatáceas, higos y pequeños insectos en el follaje)',
      imagen: '/images/especies/tangara-cuellidorada.jpg',
      altImagen: 'Tangara Cuellidorada posada en rama con su deslumbrante plumaje azul y corona dorada en el Chocó Andino',
      descripcion: 'Una de las tangaras más coloridas y activas del bosque nublado del Chocó Andino. Su cuerpo azul cobalto resplandece al contrastar con una llamativa nuca dorada y anaranjada, formando bandadas mixtas que recorren el dosel forestal.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Chordata',
        clase: 'Aves',
        orden: 'Passeriformes',
        familia: 'Thraupidae',
        genero: 'Chalcothraupis'
      },
      caracteristicasFisicas: 'Plumaje predominantemente azul brillante con matices turquesa en el pecho y flancos. El dorso presenta un diseño escamado negro con bordes azules. El rasgo más sobresaliente es una banda nucal dorada intensa con reflejos rojizos que corona su nuca sobre una coronilla negra.',
      tamanoPeso: '13 a 14,5 cm de longitud; peso aproximado de 18 a 23 gramos.',
      rasgosIdentificacion: 'Nuca dorada brillante contrastada con coronilla negra y cuerpo azul cerúleo; movimientos rápidos y acrobáticos buscando frutos e insectos en el envés de hojas.',
      distribucionGeografica: 'Abundante en el noroccidente de Pichincha: valle de Tandayapa, Mindo, Nanegalito, Reserva Bellavista y cuenca del Guayllabamba.',
      rangoAltitudinal: '1.200 a 2.600 msnm a lo largo del callejón montano húmedo.',
      comportamientoHabitos: 'Diurna y altamente gregaria. Se integra activamente en bandadas mixtas de especies con otras tangaras, furnáridos y reinitas para buscar alimento de forma cooperativa.',
      reproduccionCiclo: 'Construye un nido en forma de taza compacta con musgo, líquenes y raicillas finas en arbustos densos. La hembra pone 2 huevos celestes con motas marrones y los incuba durante 13 a 14 días.',
      funcionEcologica: 'Dispersora activa de semillas de plantas pioneras del sotobosque y reguladora de poblaciones de artrópodos en las copas de los árboles.',
      importanciaChocoAndino: 'Atractivo estelar del turismo ornitológico en los comederos de frutas de Tandayapa y Mindo, que genera ingresos directos para guardabosques locales.',
      amenazasPrincipales: 'Deforestación de bosques maduros con abundancia de bayas nativas y fragmentación de corredores de dosel.',
      medidasProteccion: 'Protección de corredores de bosque nublado y siembra de árboles nativos productores de frutos silvestres.',
      datosCuriosos: [
        'A menudo se cuelga cabeza abajo de ramas delgadas con gran agilidad para alcanzar bayas que cuelgan en extremos inaccesibles.',
        'La tonalidad de la banda nucal dorada varía sutilmente entre subespecies de diferentes vertientes andinas.',
        'Es una de las primeras aves en vocalizar al salir el sol en los claros del bosque nublado.'
      ],
      fuentes: [
        { titulo: 'eBird Ecuador - Chalcothraupis ruficervix' },
        { titulo: 'Aves de la Vertiente Occidental del Ecuador (INABIO)' }
      ]
    }
  },
  {
    id: 'quetzal-andino',
    data: {
      nombre: 'Quetzal Cabeza Dorada',
      nombreCientifico: 'Pharomachrus auriceps',
      categoria: 'Aves',
      estadoConservacion: 'Preocupación Menor (LC)',
      estadoTono: 'ok',
      habitat: 'Bosques montanos nublados maduros con abundancia de epífitas y árboles añosos',
      alimentacion: 'Frugívoro especializado en lauráceas (aguacatillos silvestres) e insectos grandes, lagartijas y ranitas',
      imagen: '/images/especies/quetzal-andino.jpg',
      altImagen: 'Quetzal Cabeza Dorada macho con vientre rojo carmesí y plumaje verde esmeralda en Chocó Andino',
      descripcion: 'Ave mítica y majestuosa de los bosques nublados del Chocó Andino. Pariente cercano del quetzal centroamericano, se distingue por su cabeza con destellos dorados, pecho verde esmeralda iridiscente y un brillante vientre rojo carmesí.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Chordata',
        clase: 'Aves',
        orden: 'Trogoniformes',
        familia: 'Trogonidae',
        genero: 'Pharomachrus'
      },
      caracteristicasFisicas: 'El macho ostenta una cabeza bronceada dorada, pico amarillo brillante y cuerpo verde esmeralda metálico con reflejos cobrizos. Su vientre es rojo escarlata intenso y la parte inferior de la cola es negra uniforme. La hembra tiene la cabeza y el pecho de un tono pardo grisáceo más discreto.',
      tamanoPeso: '33 a 36 cm de longitud; peso aproximado de 155 a 180 gramos.',
      rasgosIdentificacion: 'Vientre rojo fuego en fuerte contraste con el dorso verde metálico; cabeza dorada bronceada; pico amarillo cónico en machos; cola inferior negra.',
      distribucionGeografica: 'Bosques de niebla de Pichincha: Refugio Paz de las Aves, Maquipucuna, Nanegalito, Bellavista y laderas del Pichincha.',
      rangoAltitudinal: '1.200 a 3.100 msnm en bosques montanos húmedos.',
      comportamientoHabitos: 'Arborícola y discreto. Se posa erguido y silencioso en ramas del estrato medio bajo la sombra de helechos epífitos, lanzándose en vuelos rápidos para arrancar frutos o capturar insectos al vuelo.',
      reproduccionCiclo: 'Anida en troncos muertos en descomposición donde excava una cámara con su pico fuerte. Pone 2 huevos azul pálido que ambos padres incuban por turnos durante 18 días.',
      funcionEcologica: 'Dispersor primario de semillas de la familia Lauraceae (aguacatillos de monte), árboles esenciales para la estructura del bosque nublado.',
      importanciaChocoAndino: 'Símbolo de la exuberancia andina y uno de los objetivos más buscados por científicos y observadores de aves del mundo en la reserva.',
      amenazasPrincipales: 'Tala de árboles viejos con troncos descompuestos necesarios para la anidación y pérdida de cobertura forestal.',
      medidasProteccion: 'Conservación de árboles muertos en pie en reservas privadas y zonas de amortiguamiento biológico.',
      datosCuriosos: [
        'Traga enteros los aguacatillos silvestres de gran tamaño y regurgita la semilla intacta horas después, sembrando árboles por todo el bosque.',
        'Su llamada territorial es una serie de notas silbadas melodiosas y melancólicas que pueden oírse a más de medio kilómetro entre la neblina.',
        'Pertenece al orden Trogoniformes, uno de los linajes de aves más antiguos que poblaron los bosques tropicales del continente.'
      ],
      fuentes: [
        { titulo: 'Neotropical Birds - Pharomachrus auriceps (Cornell Lab)' },
        { titulo: 'Libro Rojo de las Aves del Ecuador' }
      ]
    }
  },
  {
    id: 'ninfa-coronada',
    data: {
      nombre: 'Colibrí Ninfa Coronada del Chocó',
      nombreCientifico: 'Thalurania colombica fannyi',
      categoria: 'Aves',
      estadoConservacion: 'Preocupación Menor (LC)',
      estadoTono: 'ok',
      habitat: 'Sotobosque y estrato medio del bosque nublado y húmedo premontano',
      alimentacion: 'Nectarívoro e insectívoro (néctar de flores tubulares de rubiáceas, ericáceas y bromelias)',
      imagen: '/images/especies/ninfa-coronada.jpg',
      altImagen: 'Colibrí Ninfa Coronada con plumaje verde y violeta iridiscente en el Chocó Andino',
      descripcion: 'Uno de los colibríes más resplandecientes del Chocó biogeográfico. Los machos exhiben una corona frontal violeta brillante, garganta verde esmeralda y vientre azul zafiro, patrullando activamente las flores del sotobosque.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Chordata',
        clase: 'Aves',
        orden: 'Apodiformes',
        familia: 'Trochilidae',
        genero: 'Thalurania'
      },
      caracteristicasFisicas: 'El macho presenta una frente violeta centelleante, garganta verde brillante y vientre azul profundo iridiscente con cola bifurcada azul negruzca. La hembra tiene el dorso verde bronceado y el vientre gris blanquecino limpio con puntas blancas en la cola.',
      tamanoPeso: '9,5 a 11 cm de longitud; peso aproximado de 3,8 a 4,5 gramos.',
      rasgosIdentificacion: 'Corona frontal violeta intensa y vientre azul violáceo en machos; cola profundamente ahorquillada; vuelo zumbante rápido cerca del suelo del bosque.',
      distribucionGeografica: 'Estribaciones noroccidentales de Pichincha: Mindo, Mashpi, Pacto, Nanegal y Reserva El Pahuma.',
      rangoAltitudinal: '200 a 1.900 msnm en bosques lluviosos y nublados.',
      comportamientoHabitos: 'Suele seguir rutas de forrajeo regulares visitando flores individuales a lo largo de senderos y quebradas. Muy territorial frente a flores ricas en néctar.',
      reproduccionCiclo: 'La hembra elabora una diminuta taza de fibras vegetales y líquenes pegada con telas de araña en una rama delgada. Pone 2 huevos blancos que cuida en solitario.',
      funcionEcologica: 'Polinizador clave de plantas epífitas y arbustos de flores medianas del sotobosque del Chocó Andino.',
      importanciaChocoAndino: 'Representante de la subespecie fannyi, restringida a la región biogeográfica del Chocó ecuatoriano y colombiano.',
      amenazasPrincipales: 'Deforestación de la vegetación riparia y uso de herbicidas que destruyen las plantas florales silvestres.',
      medidasProteccion: 'Protección de quebradas con vegetación arbustiva nativa y educación ambiental comunitaria.',
      datosCuriosos: [
        'El color de su corona violeta cambia a negro absoluto si la luz no incide en el ángulo exacto de reflexión.',
        'Utiliza tela de araña elástica en su nido para que este se expanda a medida que los pichones crecen.',
        'Consume diariamente su peso corporal en néctar para sustentar su elevadísimo metabolismo alar.'
      ],
      fuentes: [
        { titulo: 'Hummingbirds of Ecuador (Freile & Castro, 2013)' },
        { titulo: 'BioWeb Ecuador - Aves' }
      ]
    }
  },
  {
    id: 'pava-del-choco',
    data: {
      nombre: 'Pava de Monte del Chocó',
      nombreCientifico: 'Penelope ortoni',
      categoria: 'Aves',
      estadoConservacion: 'En Peligro (EN)',
      estadoTono: 'riesgo',
      habitat: 'Bosques pluviales y montanos primarios del Chocó biogeográfico',
      alimentacion: 'Frugívora estricta (grandes frutos y semillas del estrato arbóreo alto de palmas y lauráceas)',
      imagen: '/images/especies/pava-del-choco.jpg',
      altImagen: 'Pava de Monte del Chocó posada en rama alta de bosque primario en Mashpi',
      descripcion: 'Ave grande y majestuosa endémica de la franja del Chocó biogeográfico en Ecuador y Colombia. En peligro crítico por su sensibilidad a la deforestación y la cacería furtiva, es un dispersor insustituible de semillas gigantes.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Chordata',
        clase: 'Aves',
        orden: 'Galliformes',
        familia: 'Cracidae',
        genero: 'Penelope'
      },
      caracteristicasFisicas: 'Cuerpo esbelto y porte gallináceo grande. Plumaje pardo oscuro brillante con diminutos ribetes blancos en el cuello y pecho. Piel facial desnuda de color azul pizarra alrededor de los ojos y una prominente papada carnosa de color rojo escarlata bajo la garganta.',
      tamanoPeso: '58 a 66 cm de longitud; peso aproximado de 1,1 a 1,4 kg.',
      rasgosIdentificacion: 'Gran tamaño; papada roja brillante que cuelga del cuello; anillo ocular azulado; vuelo pesado con aleteos ruidosos seguidos de planeo entre copas.',
      distribucionGeografica: 'Restringida a parches intactos de bosque primario en Mashpi, Pacto y estribaciones bajas del Chocó Andino en Pichincha.',
      rangoAltitudinal: '100 a 1.600 msnm en bosques lluviosos occidentales.',
      comportamientoHabitos: 'Arborícola. Vive en parejas o grupos familiares pequeños que se desplazan por las ramas superiores de árboles emergentes al amanecer emitiendo llamados guturales potentes.',
      reproduccionCiclo: 'Construye un nido de hojas secas y ramas en horquetas altas. Pone 2 huevos grandes que son incubados durante 26 a 28 días.',
      funcionEcologica: 'Dispersora fundamental de semillas grandes que ninguna otra ave del Chocó puede tragar (como las semillas de pambil y canelo).',
      importanciaChocoAndino: 'Bioindicador de máxima integridad ecológica en los bosques primarios mejor conservados de la Mancomunidad del Chocó Andino.',
      amenazasPrincipales: 'Cacería de subsistencia no regulada y fragmentación severa de los bloques continuos de selva húmeda.',
      medidasProteccion: 'Prohibición estricta de cacería en reservas comunitarias, patrullaje de guardaparques en Mashpi y reforestación de corredores.',
      datosCuriosos: [
        'Produce un sonido característico similar a un tamborileo al amanecer golpeando el aire fuertemente con sus alas en el dosel.',
        'Es una de las aves más amenazadas de la familia Cracidae en toda Sudamérica.',
        'La papada roja de los machos se hincha y adquiere mayor brillo durante las exhibiciones nupciales.'
      ],
      fuentes: [
        { titulo: 'UICN Red List - Penelope ortoni' },
        { titulo: 'Libro Rojo de las Aves del Ecuador (Granizo et al.)' }
      ]
    }
  },

  // ==========================================
  // 2. MAMÍFEROS (8 especies en total)
  // ==========================================
  {
    id: 'oso-de-anteojos',
    data: {
      nombre: 'Oso de Anteojos (Oso Andino)',
      nombreCientifico: 'Tremarctos ornatus',
      categoria: 'Mamíferos',
      estadoConservacion: 'Vulnerable (VU)',
      estadoTono: 'riesgo',
      habitat: 'Bosques nublados andinos, estribaciones montañosas y páramos',
      alimentacion: 'Omnívoro predominantemente vegetariano (bromelias epífitas, frutos de palmas, brotes y carroña ocasional)',
      imagen: '/images/especies/oso-de-anteojos.jpg',
      altImagen: 'Oso de anteojos andino con manchas claras en rostro en bosque nublado del Chocó Andino',
      descripcion: 'El único oso nativo de Sudamérica y la especie paraguas por excelencia del Chocó Andino. Su presencia garantiza la conservación de miles de otras especies de flora y fauna en la cuenca de Pichincha.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Chordata',
        clase: 'Mammalia',
        orden: 'Carnivora',
        familia: 'Ursidae',
        genero: 'Tremarctos'
      },
      caracteristicasFisicas: 'Pelaje grueso de color negro profundo o marrón oscuro. Su rasgo más distintivo son las marcas blanquecinas o amarillentas alrededor de los ojos, hocico, cuello y pecho, únicas en cada individuo como una huella dactilar. Garras largas no retráctiles adaptadas para trepar árboles gigantes.',
      tamanoPeso: 'Longitud corporal de 1,30 a 1,90 metros; machos pesan entre 100 y 175 kg; hembras entre 60 y 85 kg.',
      rasgosIdentificacion: 'Parches faciales blanco-amarillentos variables; contextura robusta y musculosa; senderos trillados y plataformas de descanso con ramas dobladas en copas de árboles.',
      distribucionGeografica: 'Corredores biológicos de la Mancomunidad del Chocó Andino: Nanegal, Calacalí, Nono, San José de Minas y Pacto.',
      rangoAltitudinal: '800 a 4.200 msnm; en el Chocó Andino se desplaza estacionalmente entre 1.400 y 2.600 msnm.',
      comportamientoHabitos: 'Solitario y predominantemente diurno y crepuscular. Pasa gran parte del tiempo en las copas de los árboles alimentándose de bromelias y descansando.',
      reproduccionCiclo: 'Gestación de 6 a 8 meses con implantación diferida. La hembra pare 1 a 2 crías en una cueva protegida y las cuida durante casi dos años.',
      funcionEcologica: 'Gran arquitecto del bosque: quiebra ramas abriendo claros de luz en el dosel que activan la germinación de plantas del sotobosque y dispersa semillas a grandes distancias.',
      importanciaChocoAndino: 'Especie bandera del noroccidente de Quito; el DMQ declaró el "Corredor Ecológico del Oso Andino" para garantizar su protección legal.',
      amenazasPrincipales: 'Fragmentación de hábitat por carreteras, expansión agrícola y ganadera no planificada, y conflicto con ganado sin cercas.',
      medidasProteccion: 'Cámaras trampa para censo individual, cercado eléctrico preventivo y educación ambiental comunitaria.',
      datosCuriosos: [
        'No hiberna debido a la disponibilidad constante de alimento en los bosques tropicales andinos.',
        'Las manchas de su cara son tan únicas que los biólogos las utilizan para identificar a cada oso individualmente.',
        'Construye nidos de ramas en las copas de árboles a más de 20 metros de altura para dormir plácidamente.'
      ],
      fuentes: [
        { titulo: 'UICN Red List - Tremarctos ornatus', enlace: 'https://www.iucnredlist.org' },
        { titulo: 'Plan de Conservación del Oso Andino en el DMQ - Secretaría de Ambiente de Quito' }
      ]
    }
  },
  {
    id: 'puma-andino',
    data: {
      nombre: 'Puma Andino',
      nombreCientifico: 'Puma concolor',
      categoria: 'Mamíferos',
      estadoConservacion: 'Preocupación Menor (LC)',
      estadoTono: 'ok',
      habitat: 'Bosques montanos nublados, cañones rocosos, matorrales y páramos andinos',
      alimentacion: 'Carnívoro estricto (caza venados de cola blanca, conejos, pecaríes, guantas y roedores)',
      imagen: '/images/especies/puma-andino.jpg',
      altImagen: 'Puma en alerta en el bosque nublado del Chocó Andino',
      descripcion: 'El mayor depredador terrestre del Chocó Andino de Pichincha y el felino con la distribución más amplia de América, fundamental para mantener el equilibrio ecológico de las poblaciones de herbívoros.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Chordata',
        clase: 'Mammalia',
        orden: 'Carnivora',
        familia: 'Felidae',
        genero: 'Puma'
      },
      caracteristicasFisicas: 'Cuerpo esbelto, ágil y musculoso. Pelaje corto y denso de color pardo leonado o rojizo uniforme con garganta y pecho blancuzcos. Extremidades traseras más largas y potentes que las delanteras.',
      tamanoPeso: 'Longitud de 1,5 a 2,4 metros; machos pesan entre 50 y 85 kg; hembras entre 35 y 55 kg.',
      rasgosIdentificacion: 'Coloración leonada uniforme sin manchas en adultos; punta de la cola oscura; mandíbula fuerte con ojos de iris verdoso o ámbar.',
      distribucionGeografica: 'Monitoreado frecuentemente mediante cámaras trampa en Maquipucuna, Mashpi, Pahuma y flancos del volcán Pichincha.',
      rangoAltitudinal: 'Desde el nivel del mar hasta más de 4.500 msnm; en el Chocó Andino patrulla entre los 1.000 y 3.000 msnm.',
      comportamientoHabitos: 'Solitario, territorial y sigiloso. Se desplaza al atardecer, noche y amanecer recorriendo entre 20 y 40 km en una jornada.',
      reproduccionCiclo: 'Gestación de 90 a 96 días. La hembra da a luz de 1 a 4 cachorros moteados en una guarida protegida entre rocas o raíces.',
      funcionEcologica: 'Depredador tope: regula las poblaciones de herbívoros y previene la propagación de enfermedades entre la fauna silvestre.',
      importanciaChocoAndino: 'Su presencia constante en el Chocó Andino indica que la cadena trófica conserva una densidad óptima de presas.',
      amenazasPrincipales: 'Cacería por conflicto con ganado doméstico no protegido y atropellamiento en carreteras.',
      medidasProteccion: 'Cámaras trampa comunitarias, compensación preventiva y protección de corredores biológicos.',
      datosCuriosos: [
        'A pesar de su gran tamaño, no ruge: en su lugar ronronea, silba y emite un grito agudo.',
        'Puede saltar horizontalmente hasta 12 metros de longitud en un solo impulso.',
        'Los cachorros nacen con manchas oscuras en el pelaje que desaparecen a los 6 meses.'
      ],
      fuentes: [
        { titulo: 'Panthera Ecuador - Monitoreo de Grandes Felinos' },
        { titulo: 'Libro Rojo de los Mamíferos del Ecuador (Tirira, 2021)' }
      ]
    }
  },
  {
    id: 'olinguito',
    data: {
      nombre: 'Olinguito',
      nombreCientifico: 'Bassaricyon neblina',
      categoria: 'Mamíferos',
      estadoConservacion: 'Casi Amenazado (NT)',
      estadoTono: 'alerta',
      habitat: 'Dosel superior de los bosques nublados y lluviosos de montaña',
      alimentacion: 'Frugívoro e insectívoro (higos silvestres, néctar, frutos del dosel y pequeños invertebrados)',
      imagen: '/images/especies/olinguito.jpg',
      altImagen: 'Olinguito en rama alta del bosque nublado del Chocó Andino',
      descripcion: 'El mamífero carnívoro más recientemente descubierto para la ciencia en el continente americano (descrito en 2013). Es un habitante arborícola y nocturno que vive en las copas de los árboles del Chocó Andino.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Chordata',
        clase: 'Mammalia',
        orden: 'Carnivora',
        familia: 'Procyonidae',
        genero: 'Bassaricyon'
      },
      caracteristicasFisicas: 'Pelaje largo, denso y ondulado de color marrón rojizo anaranjado que lo protege de la neblina helada. Cara redondeada con hocico corto, ojos grandes adaptados para visión nocturna y cola larga peluda no prensil.',
      tamanoPeso: 'Longitud de cabeza y cuerpo de 32 a 40 cm, más cola de 33 a 43 cm; peso entre 900 gramos y 1,2 kg.',
      rasgosIdentificacion: 'Pelaje rojizo espeso y esponjoso; rostro corto con ojos grandes; cola larga muy peluda sin anillos marcados; hábitos arborícolas nocturnos.',
      distribucionGeografica: 'Descubierto en bosques nublados de Ecuador (valle de Tandayapa, Nanegalito, Otonga y Mindo).',
      rangoAltitudinal: '1.500 a 2.750 msnm en bosques montanos andinos occidentales.',
      comportamientoHabitos: 'Nocturno y casi 100% arborícola. Rara vez baja al suelo. Salta ágilmente entre el dosel superior en busca de higos maduros.',
      reproduccionCiclo: 'Una sola cría por parto tras una gestación de 65 a 75 días, criada en cavidades de árboles altos.',
      funcionEcologica: 'Dispersor de semillas del estrato superior del bosque y polinizador ocasional al consumir néctar.',
      importanciaChocoAndino: 'Símbolo del inmenso potencial de descubrimiento científico que aún encierra el Chocó Andino.',
      amenazasPrincipales: 'Deforestación del dosel forestal y cambio climático que reduce la cobertura de niebla.',
      medidasProteccion: 'Protección de reservas privadas de bosque nublado y estudios de radio-telemetría.',
      datosCuriosos: [
        'Durante más de un siglo sus pieles estuvieron en museos confundidas con las de olingos de tierras bajas.',
        'Fue el primer mamífero carnívoro descubierto en las Américas en 35 años.',
        'Su pelaje es sumamente denso para tolerar la constante llovizna y el frío nocturno andino.'
      ],
      fuentes: [
        { titulo: 'ZooKeys - Discovery of the Olinguito (Helgen et al., 2013)' },
        { titulo: 'Smithsonian Institution - Olinguito Research' }
      ]
    }
  },
  {
    id: 'margay-tigrillo',
    data: {
      nombre: 'Margay (Tigrillo Chico)',
      nombreCientifico: 'Leopardus wiedii',
      categoria: 'Mamíferos',
      estadoConservacion: 'Casi Amenazado (NT)',
      estadoTono: 'alerta',
      habitat: 'Bosques montanos nublados y bosques pluviales primarios y secundarios',
      alimentacion: 'Carnívoro arborícola (roedores de dosel, pequeñas aves, ranas arborícolas, lagartijas e insectos grandes)',
      imagen: '/images/especies/margay-tigrillo.jpg',
      altImagen: 'Margay o tigrillo trepador con grandes ojos y pelaje manchado en rama de Chocó Andino',
      descripcion: 'El acróbata del dosel andino: un felino manchado con ojos inmensos y la asombrosa capacidad anatómica de rotar sus tobillos traseros 180 grados para descender de los árboles cabeza abajo.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Chordata',
        clase: 'Mammalia',
        orden: 'Carnivora',
        familia: 'Felidae',
        genero: 'Leopardus'
      },
      caracteristicasFisicas: 'Pelaje suave pardo amarillento con rosetas longitudinales oscuras de centro claro. Ojos grandes adaptados para cazar en la penumbra. Cola excepcionalmente larga que actúa como balancín.',
      tamanoPeso: '45 a 65 cm de longitud corporal, más cola de 35 a 50 cm; peso ligero entre 2,5 y 4,5 kg.',
      rasgosIdentificacion: 'Cola más larga que las patas traseras combinadas; ojos grandes prominentes; articulaciones de los tobillos reversibles para bajar troncos cabeza abajo.',
      distribucionGeografica: 'Flancos del Chocó Andino: Mindo, Mashpi, Nanegal, Reserva Intillacta y Maquipucuna.',
      rangoAltitudinal: 'Desde el nivel del mar hasta 2.800 msnm en el Chocó biogeográfico.',
      comportamientoHabitos: 'Nocturno y solitario. Pasa la mayor parte de su vida en las copas de los árboles, imitando a veces vocalizaciones de presas.',
      reproduccionCiclo: 'Gestación de 76 a 84 días. La hembra da a luz a una sola cría en el hueco de un árbol o nido de bromelia.',
      funcionEcologica: 'Controlador biológico fundamental de roedores arborícolas en el dosel medio y alto del bosque.',
      importanciaChocoAndino: 'Indicador de la conectividad arbórea del bosque; al ser estrictamente arborícola no tolera áreas deforestadas.',
      amenazasPrincipales: 'Deforestación de dosel continuo y ataques de perros domésticos en límites agrícolas.',
      medidasProteccion: 'Corredores aéreos de fauna, reforestación de riberas y monitoreo con cámaras trampa.',
      datosCuriosos: [
        'Puede colgarse de una rama sostenido únicamente por una pata trasera mientras atrapa un ave con las garras delanteras.',
        'Es uno de los dos únicos felinos en el mundo con tobillos que pueden girar 180 grados.',
        'Puede imitar el llanto de pequeños primates para atraer presas.'
      ],
      fuentes: [
        { titulo: 'UICN Red List - Leopardus wiedii' },
        { titulo: 'Libro Rojo de los Mamíferos del Ecuador' }
      ]
    }
  },
  {
    id: 'perezoso-hoffmann',
    data: {
      nombre: 'Perezoso de Dos Dedos de Hoffmann',
      nombreCientifico: 'Choloepus hoffmanni',
      categoria: 'Mamíferos',
      estadoConservacion: 'Preocupación Menor (LC)',
      estadoTono: 'ok',
      habitat: 'Dosel superior de bosques montanos nublados y bosques pluviales con abundancia de lianas',
      alimentacion: 'Herbívoro y folívoro estricto (hojas tiernas de cecropia, brotes, yemas florales y frutos silvestres)',
      imagen: '/images/especies/perezoso-hoffmann.jpg',
      altImagen: 'Perezoso de Dos Dedos de Hoffmann colgado de una rama en el dosel del Chocó Andino',
      descripcion: 'El apacible habitante del dosel andino. Pasa prácticamente toda su existencia suspendido boca abajo en las copas de los árboles, con un pelaje adaptado donde crecen algas microscópicas que le otorgan un camuflaje verdoso perfecto contra águilas y felinos.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Chordata',
        clase: 'Mammalia',
        orden: 'Pilosa',
        familia: 'Megalonychidae',
        genero: 'Choloepus'
      },
      caracteristicasFisicas: 'Pelaje largo y áspero de tono pardo canela o grisáceo con tonalidades verdosas por algas simbióticas. Extremidades delanteras con dos dedos terminados en poderosas garras curvas de hasta 7 cm; patas traseras con tres dedos. Cabeza redondeada con hocico desnudo achatado y ojos castaños soñolientos.',
      tamanoPeso: 'Longitud corporal de 55 a 72 cm; peso entre 5,5 y 8,5 kg.',
      rasgosIdentificacion: 'Dos dedos con garras en extremidades delanteras; rostro claro con nariz carnosa; movimientos lentos y pausados colgado bajo las ramas.',
      distribucionGeografica: 'Bosques húmedos y montanos del noroccidente de Pichincha: Mindo, Mashpi, Nanegal, Pacto y cuenca del río Guayllabamba.',
      rangoAltitudinal: 'Desde el nivel del mar hasta 2.400 msnm en el Chocó ecuatoriano.',
      comportamientoHabitos: 'Nocturno y solitario. Pasa hasta 18 horas al día descansando o durmiendo en horquetas altas. Desciende al suelo del bosque únicamente cada 6 a 8 días para defecar.',
      reproduccionCiclo: 'Gestación prolongada de 11 a 12 meses. La hembra pare una sola cría que se aferra con fuerza al vientre materno durante sus primeros 6 a 9 meses de vida.',
      funcionEcologica: 'Regulador del follaje del dosel y centro de un microecosistema único: en su pelaje conviven polillas especializadas (Cryptoses choloepi), escarabajos y algas verdes.',
      importanciaChocoAndino: 'Símbolo de la tranquilidad y equilibrio de los ecosistemas maduros del Chocó Andino, altamente apreciado en programas de educación ambiental.',
      amenazasPrincipales: 'Deforestación que fragmenta el dosel obligándolo a bajar al suelo donde es vulnerable a atropellamientos y ataques de perros.',
      medidasProteccion: 'Puentes de dosel aéreos sobre carreteras rurales, centros de rescate silvestre y protección de árboles de guarumo.',
      datosCuriosos: [
        'Su digestión es la más lenta entre todos los mamíferos terrestres: una sola hoja puede tardar hasta un mes en digerirse por completo en su estómago policavitario.',
        'El pelaje crece en dirección contraria al resto de mamíferos (del vientre hacia la espalda) para que el agua de lluvia escurra fácilmente mientras cuelga boca abajo.',
        'Puede girar su cabeza casi 270 grados gracias a vértebras cervicales adicionales.'
      ],
      fuentes: [
        { titulo: 'UICN Red List - Choloepus hoffmanni' },
        { titulo: 'Mamíferos del Ecuador - Museo de Zoología QCAZ' }
      ]
    }
  },
  {
    id: 'kinkaju-cusumbo',
    data: {
      nombre: 'Kinkajú o Cusumbo',
      nombreCientifico: 'Potos flavus',
      categoria: 'Mamíferos',
      estadoConservacion: 'Preocupación Menor (LC)',
      estadoTono: 'ok',
      habitat: 'Estrato alto y medio de bosques nublados y lluviosos primarios y secundarios',
      alimentacion: 'Frugívoro y nectarívoro apasionado (higos, guabas, frutos carnosos y néctar de flores del dosel)',
      imagen: '/images/especies/kinkaju-cusumbo.jpg',
      altImagen: 'Kinkajú nocturno en rama con cola prensil y ojos reflectivos en el Chocó Andino',
      descripcion: 'El mono nocturno que no es mono: un pariente carnívoro de los mapaches y olinguitos que desarrolló una cola prensil tan fuerte que funciona como una quinta extremidad para descolgarse y libar flores en las alturas del Chocó Andino.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Chordata',
        clase: 'Mammalia',
        orden: 'Carnivora',
        familia: 'Procyonidae',
        genero: 'Potos'
      },
      caracteristicasFisicas: 'Pelaje corto, tupido y aterciopelado de color marrón dorado o miel uniforme. Cola larga, musculosa y completamente prensil que puede soportar todo su peso. Ojos grandes redondos reflectivos color ámbar y una lengua extensible de hasta 12 cm de largo adaptada para extraer néctar.',
      tamanoPeso: 'Longitud de cabeza y cuerpo de 40 a 55 cm, más cola prensil de 40 a 55 cm; peso entre 2,2 y 4 kg.',
      rasgosIdentificacion: 'Pelaje dorado miel; cola prensil con la que se cuelga cabeza abajo; rostro redondeado con orejas pequeñas laterales; hábitos estrictamente nocturnos y arborícolas.',
      distribucionGeografica: 'Ampliamente distribuido en el Chocó Andino: cuencas de Mindo, Mashpi, Nanegalito y Maquipucuna.',
      rangoAltitudinal: 'Desde el nivel del mar hasta 2.500 msnm en bosques andinos occidentales.',
      comportamientoHabitos: 'Nocturno y arborícola. Duerme durante el día en oquedades de árboles o entre marañas densas de bromelias. Al caer la noche emite silbidos y chillidos mientras recorre rutas fijas de árboles frutales.',
      reproduccionCiclo: 'Gestación de 112 a 118 días. La hembra da a luz a una sola cría (raramente gemelos) que transporta sobre su pecho mientras trepa.',
      funcionEcologica: 'Polinizador nocturno excepcional: al meter su rostro en grandes flores del dosel para beber néctar, su pelaje se cubre de polen que transporta a otros árboles distantes; además es un gran dispersor de semillas.',
      importanciaChocoAndino: 'Especie clave en la regeneración de bosques maduros gracias a su incansable dispersión nocturna de higos y frutos silvestres.',
      amenazasPrincipales: 'Tala de árboles añosos con cavidades para descanso diurno y tráfico ilegal como mascota exótica.',
      medidasProteccion: 'Campañas contra la tenencia de fauna silvestre y conservación de árboles huecos centenarios.',
      datosCuriosos: [
        'Los locales lo llaman "oso de miel" porque adora saquear colmenas de abejas silvestres utilizando su larga lengua inmune a las picaduras gracias a su piel gruesa.',
        'Puede rotar sus tobillos para correr hacia atrás con la misma velocidad que hacia adelante en ramas delgadas.',
        'Su cola prensil es tan sensitiva que puede usarla para palpar frutos en la oscuridad antes de verlos.'
      ],
      fuentes: [
        { titulo: 'UICN Red List - Potos flavus' },
        { titulo: 'Tirira, D. Guía de Campo de los Mamíferos del Ecuador' }
      ]
    }
  },
  {
    id: 'armadillo-nueve-bandas',
    data: {
      nombre: 'Armadillo de Nueve Bandas',
      nombreCientifico: 'Dasypus novemcinctus',
      categoria: 'Mamíferos',
      estadoConservacion: 'Preocupación Menor (LC)',
      estadoTono: 'ok',
      habitat: 'Sotobosque húmedo, quebradas con suelos blandos y hojarasca profunda',
      alimentacion: 'Insectívoro y omnívoro excavador (larvas de escarabajos, hormigas, termitas, lombrices y pequeños tubérculos)',
      imagen: '/images/especies/armadillo-nueve-bandas.jpg',
      altImagen: 'Armadillo de Nueve Bandas forrajeando en la hojarasca del Chocó Andino',
      descripcion: 'El acorazado del suelo andino: un mamífero primitivo dotado de un caparazón óseo articulado que patrulla incansablemente la hojarasca del Chocó Andino, removiendo y oxigenando el suelo del bosque con sus poderosas garras excavadoras.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Chordata',
        clase: 'Mammalia',
        orden: 'Cingulata',
        familia: 'Dasypodidae',
        genero: 'Dasypus'
      },
      caracteristicasFisicas: 'Caparazón dorsal protector formado por placas óseas cubiertas por escamas córneas, dividido en el centro por ocho a nueve bandas móviles transversales que le otorgan flexibilidad. Cabeza alargada protegida por un escudo cefálico; cola larga anillada y garras delanteras cavadoras muy desarrolladas.',
      tamanoPeso: 'Longitud de cabeza y cuerpo de 38 a 55 cm, más cola de 25 a 40 cm; peso de 3,5 a 6,5 kg.',
      rasgosIdentificacion: 'Caparazón óseo con 9 bandas móviles; hocico alargado en forma de cerda que olfatea constantemente el suelo; ruidos sonoros de hojas crujiendo al forrajear.',
      distribucionGeografica: 'Común en las 6 parroquias del Chocó Andino: Calacalí, Nono, Nanegal, Nanegalito, Gualea y Pacto.',
      rangoAltitudinal: 'Desde el nivel del mar hasta 2.800 msnm.',
      comportamientoHabitos: 'Crepuscular y nocturno. Excava madrigueras profundas en pendientes protegidas con múltiples entradas. Tiene un agudo sentido del olfato que detecta larvas a más de 15 cm bajo tierra.',
      reproduccionCiclo: 'Poliembrionía obligada única: la hembra pare invariablemente cuatro crías idénticas del mismo sexo, originadas a partir de un solo óvulo fertilizado tras una gestación de 4 meses.',
      funcionEcologica: 'Ingeniero del suelo: al excavar diariamente en busca de insectos airea la tierra, facilita la penetración del agua de lluvia y crea madrigueras que sirven de refugio a serpientes, ranas y roedores.',
      importanciaChocoAndino: 'Regulador natural fundamental de plagas agrícolas de larvas de coleópteros en zonas de transición agroforestal.',
      amenazasPrincipales: 'Cacería tradicional por carne de monte y atropellamientos en vías interparroquiales durante la noche.',
      medidasProteccion: 'Señalización vial de cruce de fauna y programas comunitarios de conservación en fincas agroecológicas.',
      datosCuriosos: [
        'Puede contener la respiración bajo el agua hasta por 6 minutos para vadear arroyos o tragar aire para inflar sus intestinos y flotar en ríos anchos.',
        'Cuando se asusta, salta verticalmente en el aire hasta un metro de altura por reflejo defensivo.',
        'Sus cuatro crías nacen siempre como cuatrillizos genéticamente idénticos.'
      ],
      fuentes: [
        { titulo: 'Smithsonian - Dasypus novemcinctus biology' },
        { titulo: 'Asociación Ecuatoriana de Mastozoología' }
      ]
    }
  },
  {
    id: 'pecari-de-collar',
    data: {
      nombre: 'Pecarí de Collar (Sajino)',
      nombreCientifico: 'Dicotyles tajacu',
      categoria: 'Mamíferos',
      estadoConservacion: 'Preocupación Menor (LC)',
      estadoTono: 'ok',
      habitat: 'Bosques montanos húmedos, quebradas boscosas densas y valles subtropicales',
      alimentacion: 'Omnívoro y frugívoro (frutos caídos de palmas de pambil, raíces, bulbos, hongos, invertebrados y pequeñas serpientes)',
      imagen: '/images/especies/pecari-de-collar.jpg',
      altImagen: 'Pecarí de Collar con su distintiva franja clara sobre los hombros en bosque nublado',
      descripcion: 'El jabalí autóctono de los Andes: un mamífero social y gregario que recorre el bosque en piaras solidarias, triturando semillas duras con sus colmillos rectos y manteniendo abiertas las sendas naturales del Chocó Andino.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Chordata',
        clase: 'Mammalia',
        orden: 'Artiodactyla',
        familia: 'Tayassuidae',
        genero: 'Dicotyles'
      },
      caracteristicasFisicas: 'Cuerpo compacto y robusto cubierto por cerdas gruesas de color gris negruzco jaspeado. Sobre los hombros y cuello exhibe una distintiva banda o "collar" de cerdas amarillentas o blanquecinas. Posee una glándula dorsal odorífera y colmillos superiores dirigidos verticalmente hacia abajo que se afilan solos al masticar.',
      tamanoPeso: '80 a 105 cm de longitud; peso entre 16 y 28 kg.',
      rasgosIdentificacion: 'Collar blanco-amarillento visible sobre los hombros; hocico cartilaginoso en forma de disco; olor almizclado característico en el sendero; desplazamiento en grupos de 6 a 15 individuos.',
      distribucionGeografica: 'Bosques continuos de Mashpi, Pacto, Nanegal y reservas protegidas de la Mancomunidad del Chocó Andino.',
      rangoAltitudinal: 'Desde el nivel del mar hasta 2.300 msnm.',
      comportamientoHabitos: 'Diurno y crepuscular. Animal fuertemente social que se defiende comunitariamente chasqueando los colmillos y formando círculos protectores ante la presencia de pumas o perros.',
      reproduccionCiclo: 'Gestación de 140 a 150 días. La hembra pare habitualmente 2 crías rojizas que siguen a la madre inmediatamente después de nacer.',
      funcionEcologica: 'Depredador y dispersor clave de semillas de cáscara pétrea como las de la palma pambil, moldeando la densidad y distribución de árboles en el bosque.',
      importanciaChocoAndino: 'Presa natural prioritaria para los grandes felinos (puma y jaguarundi) en las reservas del noroccidente de Pichincha.',
      amenazasPrincipales: 'Cacería furtiva con trampas y deforestación que divide los territorios amplios que requieren sus manadas.',
      medidasProteccion: 'Monitoreo de piaras con cámaras trampa comunitarias y veda estricta de cacería en áreas de conservación.',
      datosCuriosos: [
        'A diferencia de los cerdos domésticos europeos, sus colmillos no crecen curvados hacia afuera sino rectos hacia abajo, rozándose continuamente para mantenerse afilados como navajas.',
        'Se frotan mutuamente la glándula del lomo entre miembros de la piara para adquirir un olor de grupo uniforme que les permite reconocerse en la niebla.',
        'Sus huellas de pezuñas hendidas son uno de los rastros más comunes que buscan los guías nativos en los senderos de Mashpi.'
      ],
      fuentes: [
        { titulo: 'UICN Red List - Dicotyles tajacu' },
        { titulo: 'Libro Rojo de los Mamíferos del Ecuador' }
      ]
    }
  },

  // ==========================================
  // 3. ANFIBIOS (8 especies en total)
  // ==========================================
  {
    id: 'rana-de-vidrio',
    data: {
      nombre: 'Rana de Vidrio Esmeralda',
      nombreCientifico: 'Espadarana prosoblepon',
      categoria: 'Anfibios',
      estadoConservacion: 'Preocupación Menor (LC)',
      estadoTono: 'ok',
      habitat: 'Vegetación ribereña a lo largo de quebradas limpias, riachuelos y cascadas',
      alimentacion: 'Insectívoro (pequeños dípteros, polillas, arañas diminutas y larvas acuáticas)',
      imagen: '/images/especies/rana-de-vidrio.jpg',
      altImagen: 'Rana de Vidrio Esmeralda sobre el haz de una hoja brillante en Chocó Andino',
      descripcion: 'Famosa por su piel ventral completamente transparente que permite observar en vivo sus órganos internos, vasos sanguíneos y el latido de su corazón.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Chordata',
        clase: 'Amphibia',
        orden: 'Anura',
        familia: 'Centrolenidae',
        genero: 'Espadarana'
      },
      caracteristicasFisicas: 'Dorso verde esmeralda brillante con diminutos puntos negros dispersos. Vientre transparente que deja ver estómago, intestinos y pericardio blanco. Machos poseen una espina humeral curva en el brazo para combates territoriales.',
      tamanoPeso: 'Machos de 21 a 28 mm; hembras de 25 a 32 mm; peso de 2 a 3 gramos.',
      rasgosIdentificacion: 'Piel ventral transparente como cristal; dorso verde con puntos oscuros; espina humeral en machos; ojos dorados con reticulaciones oscuras.',
      distribucionGeografica: 'Quebradas y cursos de agua en Mindo, Nanegalito, Mashpi, Pacto y la cuenca del río Guayllabamba.',
      rangoAltitudinal: '100 a 1.900 msnm en el Chocó biogeográfico.',
      comportamientoHabitos: 'Nocturna. Los machos se ubican en el haz de hojas colgantes sobre torrentes de agua limpia emitiendo un canto metálico ("tink-tink").',
      reproduccionCiclo: 'La hembra deposita de 20 a 45 huevos en hojas sobre el agua. Al eclosionar tras 10 a 14 días, los renacuajos caen al agua donde completan su metamorfosis.',
      funcionEcologica: 'Bioindicador de pureza hídrica en quebradas y regulador clave de insectos vectores de enfermedades.',
      importanciaChocoAndino: 'El Chocó Andino alberga una de las mayores diversidades de ranas de vidrio del planeta, muchas de ellas endémicas de Pichincha.',
      amenazasPrincipales: 'Contaminación de ríos por aguas residuales o agroquímicos y el hongo quitridio.',
      medidasProteccion: 'Establecimiento de zonas de amortiguamiento forestal en fuentes de agua y monitoreo biológico.',
      datosCuriosos: [
        'A través de su barriga translúcida se puede ver con lupa el latido rítmico de su corazón y el flujo sanguíneo.',
        'Los machos combaten agarrándose pecho a pecho en hojas colgantes empujándose con sus espinas de los brazos.',
        'Sus huesos son de color verde pálido debido a sales biliares en su fisiología.'
      ],
      fuentes: [
        { titulo: 'AmphibiaWeb Ecuador - QCAZ Pontificia Universidad Católica del Ecuador' },
        { titulo: 'Guía de Anfibios del Chocó Andino - INABIO' }
      ]
    }
  },
  {
    id: 'rana-arlequin',
    data: {
      nombre: 'Rana Arlequín Hocicuda del Chocó',
      nombreCientifico: 'Atelopus longirostris',
      categoria: 'Anfibios',
      estadoConservacion: 'En Peligro Crítico (CR)',
      estadoTono: 'riesgo',
      habitat: 'Bosques montanos de niebla ribereños y orillas pedregosas de ríos caudalosos no intervenidos',
      alimentacion: 'Insectívora de suelo (hormigas, ácaros y colémbolos del musgo y la hojarasca)',
      imagen: '/images/especies/rana-arlequin.jpg',
      altImagen: 'Rana Arlequín Hocicuda sobre roca húmeda en arroyo del Chocó Andino',
      descripcion: 'Una de las especies más emblemáticas de la conservación ecuatoriana. Se creyó extinta en el mundo durante más de 25 años por el hongo quitridio, hasta que una población relíctica fue redescubierta en el Chocó Andino.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Chordata',
        clase: 'Amphibia',
        orden: 'Anura',
        familia: 'Bufonidae',
        genero: 'Atelopus'
      },
      caracteristicasFisicas: 'Cuerpo esbelto con extremidades largas y finas. El hocico es puntiagudo y saliente. Dorso pardo chocolate con manchas y estrías amarillo crema o verdoso pálido.',
      tamanoPeso: 'Machos de 30 a 38 mm; hembras de 42 a 50 mm; peso de 3 a 6 gramos.',
      rasgosIdentificacion: 'Hocico alargado y angulado hacia adelante; caminata pausada en lugar de saltos bruscos; piel rugosa con toxinas defensivas.',
      distribucionGeografica: 'Restringida a cuencas fluviales muy localizadas en los bosques del Chocó Andino en Imbabura y Pichincha.',
      rangoAltitudinal: '200 a 2.500 msnm en bosques montanos húmedos.',
      comportamientoHabitos: 'Diurna y terrestre. Se desplaza lentamente caminando entre piedras y musgo al borde de ríos torrentosos.',
      reproduccionCiclo: 'Cordones de huevos en remansos sombreados de ríos rápidos. Los renacuajos poseen una ventosa ventral especializada para no ser arrastrados.',
      funcionEcologica: 'Consumidora especializada de microartrópodos y bioindicadora extrema de la salud microclimática y química del agua.',
      importanciaChocoAndino: 'Símbolo internacional de esperanza para la herpetología; su redescubrimiento motivó reservas dedicadas a proteger su último reducto.',
      amenazasPrincipales: 'Minería a gran escala en cabeceras de cuenca, contaminación hídrica y hongo quitridio.',
      medidasProteccion: 'Monitoreo demográfico estricto, programa de cría ex situ en el Centro Jambatu y protección legal de sus cuencas.',
      datosCuriosos: [
        'Fue declarada oficialmente "Extinta" por la UICN hasta su redescubrimiento científico en 2016.',
        'Sus renacuajos tienen una boca convertida en ventosa para alimentarse pegados a rocas en plena corriente.',
        'Posee potentes bufotoxinas en su piel que la defienden de depredadores.'
      ],
      fuentes: [
        { titulo: 'Centro Jambatu para la Investigación y Conservación de Anfibios' },
        { titulo: 'UICN Red List - Atelopus longirostris' }
      ]
    }
  },
  {
    id: 'cutin-de-mindo',
    data: {
      nombre: 'Rana Cutín de Mindo',
      nombreCientifico: 'Pristimantis mindo',
      categoria: 'Anfibios',
      estadoConservacion: 'Vulnerable (VU)',
      estadoTono: 'alerta',
      habitat: 'Sotobosque húmedo de bosque nublado, hojas de arbustos y bromelias bajas',
      alimentacion: 'Insectívora (ortópteros, escarabajillos, hormigas y arácnidos de la hojarasca)',
      imagen: '/images/especies/cutin-de-mindo.jpg',
      altImagen: 'Rana Cutín de Mindo sobre hoja verde del bosque nublado de Pichincha',
      descripcion: 'Pequeña rana endémica de los bosques nublados de Mindo en el Chocó Andino. Posee desarrollo directo: de sus huevos terrestres nacen directamente ranitas diminutas completamente formadas sin pasar por renacuajo acuático.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Chordata',
        clase: 'Amphibia',
        orden: 'Anura',
        familia: 'Strabomantidae',
        genero: 'Pristimantis'
      },
      caracteristicasFisicas: 'Coloración dorsal variable entre pardo rojizo, oliva y marrón amarillento, con tubérculos cónicos sobre párpados y talón. Ojos dorados con franja rojiza oscura y discos digitales ensanchados.',
      tamanoPeso: 'Machos de 18 a 24 mm; hembras de 26 a 33 mm; peso menor a 2 gramos.',
      rasgosIdentificacion: 'Tubérculos cónicos en los párpados; discos dilatados en los dedos; canto nocturno agudo ("chirrido" metálico) desde arbustos bajos.',
      distribucionGeografica: 'Endémica estricta de estribaciones noroccidentales de Pichincha: valle de Mindo, Tandayapa y río Nambillo.',
      rangoAltitudinal: '1.400 a 2.100 msnm en bosque nublado andino.',
      comportamientoHabitos: 'Nocturna. De día se oculta bajo musgo o en la base de bromelias; al anochecer trepa a las hojas para vocalizar.',
      reproduccionCiclo: 'Huevos con desarrollo directo depositados en sitios húmedos terrestres. Nacen ranitas autónomas de 4 a 5 mm.',
      funcionEcologica: 'Controladora de microartrópodos del sotobosque y presa clave para pequeñas serpientes de bosque.',
      importanciaChocoAndino: 'Especie endémica cuyo nombre científico rinde homenaje a Mindo, capital de la biodiversidad de la reserva.',
      amenazasPrincipales: 'Urbanización y parcelación de tierras en el valle de Mindo y calentamiento microclimático.',
      medidasProteccion: 'Ampliación de reservas naturales privadas y mantenimiento de cobertura vegetal nativa.',
      datosCuriosos: [
        'Sus huevos dependen de la humedad atmosférica de la neblina constante para no deshidratarse.',
        'El género Pristimantis es el grupo de vertebrados terrestres más diverso del planeta.',
        'Su piel cambia sutilmente de tono entre el día y la noche para mejorar el camuflaje.'
      ],
      fuentes: [
        { titulo: 'QCAZ - Base de Datos de Anfibios de Ecuador (PUCE)' },
        { titulo: 'INABIO - Fichas de Especies Amenazadas de Pichincha' }
      ]
    }
  },
  {
    id: 'rana-cohete',
    data: {
      nombre: 'Rana Cohete del Toachi',
      nombreCientifico: 'Hyloxalus toachi',
      categoria: 'Anfibios',
      estadoConservacion: 'En Peligro (EN)',
      estadoTono: 'riesgo',
      habitat: 'Quebradas rocosas de aguas rápidas, cascadas y bordes de bosque primario y secundario',
      alimentacion: 'Insectívora diurna (pequeños colémbolos, moscas de la orilla, hormigas y escarabajos)',
      imagen: '/images/especies/rana-cohete.jpg',
      altImagen: 'Rana Cohete del Toachi sobre canto rodado al borde de cascada en Chocó Andino',
      descripcion: 'Anfibio diurno y veloz perteneciente a la familia de las ranas dardo, endémico de las vertientes de Pichincha. Es célebre por su dedicado cuidado parental: los machos transportan a sus renacuajos sobre la espalda.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Chordata',
        clase: 'Amphibia',
        orden: 'Anura',
        familia: 'Dendrobatidae',
        genero: 'Hyloxalus'
      },
      caracteristicasFisicas: 'Cuerpo compacto y musculoso adaptado para saltos rápidos y natación en torrentes. Dorso marrón oliváceo con una marcada línea oblicua crema o plateada desde la ingle hasta el ojo.',
      tamanoPeso: 'Machos de 20 a 26 mm; hembras de 24 a 31 mm; peso de 2 a 4 gramos.',
      rasgosIdentificacion: 'Franja lateral clara nítida en el costado; saltos en trayectoria recta como un proyectil ("cohete") hacia el agua; machos cargando renacuajos.',
      distribucionGeografica: 'Endémica de la cuenca del río Toachi y estribaciones del Chocó Andino en Pichincha y Santo Domingo.',
      rangoAltitudinal: '800 a 2.200 msnm a lo largo de arroyos andinos occidentales.',
      comportamientoHabitos: 'Diurna y muy activa con sol y llovizna suave. Se asolea sobre piedras húmedas cerca de cascadas.',
      reproduccionCiclo: 'Puesta de 15 a 30 huevos en hojarasca. El macho cuida la puesta y transporta los renacuajos en su lomo hasta pozas limpias.',
      funcionEcologica: 'Conector ecológico entre la hojarasca terrestre y el ecosistema fluvial montano; regula insectos acuáticos y riparios.',
      importanciaChocoAndino: 'Especie endémica que representa la singularidad evolutiva de las cuencas fluviales del noroccidente de Pichincha.',
      amenazasPrincipales: 'Contaminación de arroyos por vertidos agroindustriales y deforestación de riberas.',
      medidasProteccion: 'Restauración de riberas fluviales con vegetación nativa y ordenamiento hídrico.',
      datosCuriosos: [
        'A diferencia de las ranas dardo venenosas amazónicas, no posee veneno letal: su defensa es su velocidad asombrosa.',
        'El padre puede llevar hasta 20 renacuajos apiñados sobre su lomo durante varios días.',
        'Se le llama "cohete" por la trayectoria recta y fulgurante de sus saltos hacia el agua.'
      ],
      fuentes: [
        { titulo: 'Dendrobatidae de Ecuador - Catálogo de Anfibios PUCE' },
        { titulo: 'Libro Rojo de los Anfibios del Ecuador' }
      ]
    }
  },
  {
    id: 'rana-mono-choco',
    data: {
      nombre: 'Rana Mono Planeadora del Chocó',
      nombreCientifico: 'Agalychnis spurrelli',
      categoria: 'Anfibios',
      estadoConservacion: 'Preocupación Menor (LC)',
      estadoTono: 'ok',
      habitat: 'Dosel alto de bosques lluviosos y bosques montanos bajos con charcas temporales',
      alimentacion: 'Insectívora nocturna (polillas, grillos de copa, moscas y escarabajos del dosel)',
      imagen: '/images/especies/rana-mono-choco.jpg',
      altImagen: 'Rana Mono Planeadora del Chocó verde brillante con ojos anaranjados sobre hoja húmeda',
      descripcion: 'Una de las ranas arborícolas más espectaculares del Chocó biogeográfico. Sus enormes membranas interdigitales en manos y patas le permiten planear suavemente como un paracaídas entre las ramas de árboles gigantes del dosel.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Chordata',
        clase: 'Amphibia',
        orden: 'Anura',
        familia: 'Phyllomedusidae',
        genero: 'Agalychnis'
      },
      caracteristicasFisicas: 'Dorso verde manzana brillante uniforme (que puede cambiar a verde oliva oscuro de noche) salpicado a veces de diminutos puntos blancos. Ojos grandes saltones con iris rojo anaranjado o cobrizo y pupila vertical. Membranas interdigitales muy extendidas de color amarillo anaranjado en manos y patas.',
      tamanoPeso: 'Machos de 48 a 60 mm; hembras de 65 a 76 mm; peso aproximado de 12 a 22 gramos.',
      rasgosIdentificacion: 'Ojos grandes con iris rojizo anaranjado y pupila vertical; membranas interdigitales completas y llamativas; habilidad de lanzarse al vacío planeando entre ramas.',
      distribucionGeografica: 'Bosques lluviosos y de estribación del Chocó Andino: Mashpi, Pacto y cuenca baja del Guayllabamba.',
      rangoAltitudinal: '100 a 1.200 msnm en el Chocó biogeográfico.',
      comportamientoHabitos: 'Nocturna y estrictamente arborícola. Pasa el día comprimida sobre el haz de hojas del dosel alto cerrando los ojos para camuflarse como una hoja viva. Desciende en masa solo durante eventos de reproducción explosiva tras aguaceros intensos.',
      reproduccionCiclo: 'Reproducción explosiva: cientos de individuos se congregan en charcas temporales. Depositan masas de huevos verde claros en hojas que cuelgan sobre el agua. Los renacuajos caen a la charca al eclosionar a los 6 días.',
      funcionEcologica: 'Depredadora mayor de insectos en el estrato más alto del bosque y presa predilecta de serpientes arborícolas como la boa arborícola y la lora del Chocó.',
      importanciaChocoAndino: 'Símbolo de la maravillosa fauna de dosel que habita en las copas inaccesibles de la Reserva de Biosfera.',
      amenazasPrincipales: 'Tala de árboles emergentes altos donde vive y desecación de charcas temporales naturales.',
      medidasProteccion: 'Protección estricta de parches de selva alta con humedales estacionales en reservas comunitarias.',
      datosCuriosos: [
        'Puede descender planeando distancias de más de 15 metros extendiendo sus anchas patas palmeadas para desacelerar la caída.',
        'Durante el día oculta los costados anaranjados de sus patas metiéndolos bajo el cuerpo para ser 100% verde e invisible a las aves rapaces.',
        'Sus eventos reproductivos masivos pueden durar una sola noche al año reuniendo miles de individuos que desaparecen al amanecer.'
      ],
      fuentes: [
        { titulo: 'AmphibiaWeb - Agalychnis spurrelli' },
        { titulo: 'Herpetología Neotropical (Duellman)' }
      ]
    }
  },
  {
    id: 'rana-nodriza',
    data: {
      nombre: 'Rana Nodriza del Chocó',
      nombreCientifico: 'Epipedobates boulengeri',
      categoria: 'Anfibios',
      estadoConservacion: 'Preocupación Menor (LC)',
      estadoTono: 'ok',
      habitat: 'Hojarasca húmeda a lo largo de quebradas pedregosas y arroyos de bosque nublado y húmedo',
      alimentacion: 'Insectívora diurna (pequeñas hormigas, ácaros, colémbolos y termes de la hojarasca)',
      imagen: '/images/especies/rana-nodriza.jpg',
      altImagen: 'Rana Nodriza del Chocó con coloración críptica y marcas de advertencia en el suelo del bosque',
      descripcion: 'Pequeña rana diurna terrestre de la familia de las ranas dardo, endémica de la cuenca del Chocó. Debe su nombre al extraordinario celo con el que los machos cuidan los huevos en tierra y luego transportan a sus renacuajos a las pozas de agua.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Chordata',
        clase: 'Amphibia',
        orden: 'Anura',
        familia: 'Dendrobatidae',
        genero: 'Epipedobates'
      },
      caracteristicasFisicas: 'Cuerpo esbelto con piel dorsal finamente granular de color marrón café o castaño rojizo con manchas oscuras. En los flancos y la ingle exhibe una llamativa mancha alargada de color amarillo brillante o rojo escarlata que actúa como señal aposemática. Vientre jaspeado de azul y negro.',
      tamanoPeso: 'Machos de 15 a 19 mm; hembras de 18 a 22 mm; peso de 1 a 2 gramos.',
      rasgosIdentificacion: 'Manchas aposemáticas amarillas o rojizas en la base de los muslos; canto diurno rítmico similar al piar de un polluelo; comportamiento activo de día sobre piedras de quebradas.',
      distribucionGeografica: 'Abundante en el sotobosque húmedo de Mashpi, Pacto, Nanegalito y Mindo.',
      rangoAltitudinal: '200 a 1.500 msnm en bosques lluviosos occidentales.',
      comportamientoHabitos: 'Diurna y terrestre. Camina y da saltos cortos entre hojas secas y musgo cerca del agua. Los machos son territoriales y cantan desde pequeñas elevaciones rocosas.',
      reproduccionCiclo: 'Ponen de 10 a 20 huevos en la hojarasca húmeda. El macho permanece cerca humedeciendo la puesta; al nacer los renacuajos, suben a su dorso y el padre los transporta hacia riachuelos limpios.',
      funcionEcologica: 'Reguladora de la fauna de artrópodos del piso del bosque y bioindicadora de humedad del mantillo vegetal.',
      importanciaChocoAndino: 'Elemento fundamental de las redes tróficas ribereñas del Chocó Andino.',
      amenazasPrincipales: 'Uso de agroquímicos en plantaciones colindantes y contaminación de aguas superficiales.',
      medidasProteccion: 'Protección de franjas de bosque ribereño en fincas productivas.',
      datosCuriosos: [
        'Produce epibatidina en bajas concentraciones en su piel, un alcaloide que la ciencia médica investiga por su potente efecto analgésico.',
        'El padre es capaz de llevar renacuajos durante varios kilómetros buscando arroyos libres de peces depredadores.',
        'Su canto diurno confunde a menudo a los observadores que creen estar escuchando a un pajarito escondido en las hojas.'
      ],
      fuentes: [
        { titulo: 'QCAZ - Base de Datos de Anfibios del Ecuador' },
        { titulo: 'AmphibiaWeb Ecuador - Epipedobates boulengeri' }
      ]
    }
  },
  {
    id: 'rana-payaso',
    data: {
      nombre: 'Rana Payaso del Chocó',
      nombreCientifico: 'Dendropsophus carnifex',
      categoria: 'Anfibios',
      estadoConservacion: 'Preocupación Menor (LC)',
      estadoTono: 'ok',
      habitat: 'Lagunas montanas, humedales, charcas temporales y vegetación baja de bosque nublado',
      alimentacion: 'Insectívora (mosquitos, pequeñas polillas, moscas y arañitas de hojas)',
      imagen: '/images/especies/rana-payaso.jpg',
      altImagen: 'Rana Payaso del Chocó de cuerpo amarillento con marcas oscuras en vegetación de Mindo',
      descripcion: 'Rana arborícola carismática y endémica de las laderas occidentales de los Andes ecuatorianos. Muy abundante en Mindo, llena de conciertos nocturnos las lagunas y estanques con su potente coro vocal.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Chordata',
        clase: 'Amphibia',
        orden: 'Anura',
        familia: 'Hylidae',
        genero: 'Dendropsophus'
      },
      caracteristicasFisicas: 'Coloración dorsal sumamente variable y atractiva que va desde amarillo brillante o crema hasta marrón cobrizo o verde pálido, con manchas dorsales oscuras en forma de reloj de arena o manchas circulares. Ojos con iris dorado rojizo y saco vocal subgular grande e inflable en machos.',
      tamanoPeso: 'Machos de 26 a 33 mm; hembras de 32 a 41 mm; peso aproximado de 2 a 4 gramos.',
      rasgosIdentificacion: 'Patrón variable de manchas en reloj de arena sobre dorso amarillento; discos adhesivos circulares bien desarrollados en las puntas de los dedos; saco vocal esférico prominente al cantar.',
      distribucionGeografica: 'Endémica de la vertiente occidental andina de Pichincha, Cotopaxi y Santo Domingo: Mindo, Tandayapa, Nanegalito y Nono.',
      rangoAltitudinal: '1.200 a 2.600 msnm en bosques montanos nublados.',
      comportamientoHabitos: 'Nocturna. Durante las tardes lluviosas y las noches, docenas de machos se instalan en juncos y ramas sobre charcas de agua formando coros estridentes de alta intensidad sonora.',
      reproduccionCiclo: 'Las hembras depositan masas gelatinosas de cientos de huevos directamente en el agua de lagunas o charcas temporales. Los renacuajos nadan libremente completando su metamorfosis en 2 a 3 meses.',
      funcionEcologica: 'Controladora masiva de mosquitos y jejenes en humedales andinos y alimento de garzas, serpientes acuáticas y zarigüeyas.',
      importanciaChocoAndino: 'Es la voz icónica de las noches de Mindo; protagonista de los famosos tours nocturnos de ranas que atraen a miles de ecoturistas.',
      amenazasPrincipales: 'Drenaje de lagunas y humedales para urbanización o pastoreo y contaminación con pesticidas.',
      medidasProteccion: 'Conservación de humedales artificiales y naturales en hosterías y reservas de Mindo.',
      datosCuriosos: [
        'Su saco vocal transparente se infla casi tanto como el tamaño de su propia cabeza para amplificar el canto como un altavoz natural.',
        'El epíteto carnifex ("verdugo" en latín) le fue dado por el científico Edward Drinker Cope en el siglo XIX por la mancha en forma de capucha sobre su lomo.',
        'Tolera muy bien humedales en recuperación y estanques de jardines con vegetación nativa.'
      ],
      fuentes: [
        { titulo: 'QCAZ - Catálogo de Ranas de Ecuador' },
        { titulo: 'Guía de Anfibios de Mindo (Paz y Flora)' }
      ]
    }
  },
  {
    id: 'rana-torrente',
    data: {
      nombre: 'Rana Torrente de Tandayapa',
      nombreCientifico: 'Hyloscirtus alytolylax',
      categoria: 'Anfibios',
      estadoConservacion: 'Casi Amenazada (NT)',
      estadoTono: 'alerta',
      habitat: 'Vegetación ribereña densa de ríos torrentosos, arroyos de aguas frías y cascadas de montaña',
      alimentacion: 'Insectívora (macroinvertebrados acuáticos en fase adulta, tricópteros, efímeras y dípteros de corriente)',
      imagen: '/images/especies/rana-torrente.jpg',
      altImagen: 'Rana Torrente de Tandayapa de color verde manzana en piedras cerca de cascada',
      descripcion: 'Una joya esmeralda de las aguas bravas andinas: una rana arborícola robusta adaptada a vivir al filo de cascadas rugientes en los cañones montanos del Chocó Andino.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Chordata',
        clase: 'Amphibia',
        orden: 'Anura',
        familia: 'Hylidae',
        genero: 'Hyloscirtus'
      },
      caracteristicasFisicas: 'Cuerpo robusto y aplanado dorsoventralmente adaptado para no ser desplazada por el viento de las cascadas. Coloración dorsal verde pálido o verde manzana con finas motas canela o rojizas. Ojos grandes dorados con reticulaciones negras y extremidades muy musculosas con discos adhesivos anchos.',
      tamanoPeso: 'Machos de 34 a 42 mm; hembras de 44 a 53 mm; peso aproximado de 5 a 9 gramos.',
      rasgosIdentificacion: 'Dorso verde manzana con finas motas pardas; discos digitales muy anchos en manos y patas; machos con espina nupcial en el pulgar; presencia exclusiva junto a torrentes de corriente rápida.',
      distribucionGeografica: 'Vertiente occidental de Pichincha e Imbabura: cuenca de Tandayapa, Nanegalito, Mindo y río Alambi.',
      rangoAltitudinal: '1.400 a 2.500 msnm en bosques montanos nublados.',
      comportamientoHabitos: 'Nocturna. Los machos cantan desde hojas de árboles que cuelgan directamente sobre aguas turbulentas con un silbido agudo y penetrante diseñado para sobreponerse al estruendo de la corriente.',
      reproduccionCiclo: 'Ponen masas de huevos adheridas a piedras sumergidas en remansos de ríos de montaña. Los renacuajos son aplanados y de nado potente, adaptados a la alta oxigenación del agua corriente.',
      funcionEcologica: 'Bioindicadora de aguas ultraoxigenadas y frías; reguladora de los insectos que eclosionan de los ríos de montaña.',
      importanciaChocoAndino: 'Endémica de los bosques nublados de las estribaciones de Pichincha; su salud refleja el estado prístino de las cuencas altas.',
      amenazasPrincipales: 'Deforestación de cabeceras de cuenca, sedimentación de ríos por obras viales y aumento térmico del agua por cambio climático.',
      medidasProteccion: 'Protección integral de las márgenes ribereñas y reservas que abarcan cuencas completas como Tandayapa.',
      datosCuriosos: [
        'Su canto tiene frecuencias ultrasónicas parciales para que la hembra pueda escucharla claramente a través del rugido de cascadas de varios metros de altura.',
        'Los machos tienen una espina ósea prepólica en el pulgar que utilizan en combates cuerpo a cuerpo por las mejores ramas sobre el torrente.',
        'Sus renacuajos poseen bocas con hasta 7 filas de dientes córneos para raspar algas de piedras sumergidas en plena corriente.'
      ],
      fuentes: [
        { titulo: 'PeerJ - Systematics of the genus Hyloscirtus in the Ecuadorian Andes' },
        { titulo: 'Libro Rojo de los Anfibios del Ecuador' }
      ]
    }
  },

  // ==========================================
  // 4. INSECTOS (8 especies en total)
  // ==========================================
  {
    id: 'mariposa-morfo',
    data: {
      nombre: 'Mariposa Morfo Azul',
      nombreCientifico: 'Morpho peleides',
      categoria: 'Insectos',
      estadoConservacion: 'Estable / Preocupación Menor',
      estadoTono: 'ok',
      habitat: 'Interior y bordes de bosques tropicales húmedos y bosques montanos bajos',
      alimentacion: 'En fase adulta se alimenta de jugos de frutas fermentadas, savia de árboles y humedad mineral de suelos',
      imagen: '/images/especies/mariposa-morfo.jpg',
      altImagen: 'Mariposa Morfo Azul posada con alas abiertas mostrando su color azul iridiscente metálico',
      descripcion: 'Uno de los insectos más impresionantes del mundo, famosa por el resplandeciente color azul cobalto de la parte superior de sus alas, producido por refracción de luz en nanoestructuras microscópicas.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Arthropoda',
        clase: 'Insecta',
        orden: 'Lepidoptera',
        familia: 'Nymphalidae',
        genero: 'Morpho'
      },
      caracteristicasFisicas: 'Enorme envergadura alar. La cara dorsal de las alas es azul metálico reflectivo con bordes negros; la cara ventral es parda jaspeada con una hilera de grandes ocelos circulares que desconciertan a los depredadores.',
      tamanoPeso: 'Envergadura de alas de 12 a 16 cm; peso aproximado de 1 a 1,5 gramos.',
      rasgosIdentificacion: 'Destello azul metálico intermitente durante el vuelo boyante por claros de bosque; ocelos circulares pardos en el envés al posarse con alas cerradas.',
      distribucionGeografica: 'Común en los valles templados y cálidos del Chocó Andino: Mindo, Pacto, Nanegal y reservas de Mashpi y Maquipucuna.',
      rangoAltitudinal: '200 a 1.600 msnm en bosques lluviosos y nublados.',
      comportamientoHabitos: 'Diurna y amante de los claros soleados. Los machos patrullan los cursos de los ríos y senderos durante las horas más cálidas del día.',
      reproduccionCiclo: 'Metamorfosis completa: huevo verdoso, oruga vellosa con parches rojos y amarillos, crisálida verde jade y adulto.',
      funcionEcologica: 'Descomponedora y recicladora de nutrientes al alimentarse de frutas caídas y hongos silvestres.',
      importanciaChocoAndino: 'Emblema del ecoturismo entomológico en los mariposarios educativos de Mindo y símbolo de la selva nublada.',
      amenazasPrincipales: 'Uso de agroquímicos en zonas agrícolas vecinas y pérdida de plantas hospederas de las orugas.',
      medidasProteccion: 'Cría sustentable en mariposarios autorizados y preservación de corredores florales silvestres.',
      datosCuriosos: [
        'El color azul no proviene de tintes químicos, sino de la estructura nanométrica de sus escamas alares.',
        'Tiene sensores del gusto en sus patas que le permiten saborear la fruta al posarse.',
        'Al cerrar las alas parece una hoja seca muerta, camuflándose de inmediato.'
      ],
      fuentes: [
        { titulo: 'Mariposas del Ecuador - Museo Ecuatoriano de Ciencias Naturales' },
        { titulo: 'Mariposario de Mindo - Guía Educativa de Lepidópteros' }
      ]
    }
  },
  {
    id: 'mariposa-cristal',
    data: {
      nombre: 'Mariposa Alas de Cristal',
      nombreCientifico: 'Greta oto',
      categoria: 'Insectos',
      estadoConservacion: 'Estable / Preocupación Menor',
      estadoTono: 'ok',
      habitat: 'Sotobosque sombreado y húmedo de bosques montanos nublados',
      alimentacion: 'Néctar de flores compuestas (Asteraceae); las orugas consumen hojas de solanáceas tóxicas',
      imagen: '/images/especies/mariposa-cristal.jpg',
      altImagen: 'Mariposa Alas de Cristal posada sobre flor silvestre mostrando sus alas transparentes en Chocó Andino',
      descripcion: 'Una de las maravillas visuales más sorprendentes de la naturaleza: una mariposa cuyas alas son casi totalmente transparentes como el vidrio fino, lo que le permite volverse invisible en el aire.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Arthropoda',
        clase: 'Insecta',
        orden: 'Lepidoptera',
        familia: 'Nymphalidae',
        genero: 'Greta'
      },
      caracteristicasFisicas: 'La membrana alar carece de escamas coloreadas, dejando el tejido transparente y antirreflectante. Los bordes de las alas están delineados por un marco marrón oscuro con una franja blanca transversal.',
      tamanoPeso: 'Envergadura de alas de 5,5 a 6,5 cm; peso muy ligero de 0,15 a 0,3 gramos.',
      rasgosIdentificacion: 'Alas transparentes como cristal sin escamas; marco perimetral castaño rojizo; vuelo pausado e ingrávido en zonas sombreadas.',
      distribucionGeografica: 'Abundante en el bosque nublado del Chocó Andino: senderos de Mindo, Tandayapa, Nanegalito y Bellavista.',
      rangoAltitudinal: '800 a 2.400 msnm en bosques montanos húmedos.',
      comportamientoHabitos: 'Diurna de sotobosque. Vuela a baja altura entre helechos. Los machos absorben alcaloides para producir feromonas y volverse tóxicos frente a aves.',
      reproduccionCiclo: 'Huevos diminutos en hojas de solanáceas (Cestrum). Las orugas acumulan alcaloides tóxicos que permanecen en el cuerpo del adulto.',
      funcionEcologica: 'Polinizadora de flores del sotobosque andino y ejemplo biológico supremo de adaptación morfológica por transparencia.',
      importanciaChocoAndino: 'Especie modelo muy apreciada en turismo de observación y fotografía macro en las reservas de Pichincha.',
      amenazasPrincipales: 'Destrucción de plantas hospederas del sotobosque y desecamiento de cañadas húmedas.',
      medidasProteccion: 'Protección de quebradas sombreadas y vegetación baja en reservas ecológicas.',
      datosCuriosos: [
        'Sus alas tienen microestructuras nanoscópicas cónicas que impiden el reflejo de la luz, haciéndolas invisibles al sol.',
        'Los alcaloides que consume de oruga le dan un sabor tan amargo que las aves aprenden a no volver a atacarla.',
        'Puede volar distancias de varios kilómetros en migraciones locales siguiendo la floración andina.'
      ],
      fuentes: [
        { titulo: 'Journal of Experimental Biology - Nanostructure in Greta oto' },
        { titulo: 'BioWeb Ecuador - Sección Entomología (PUCE)' }
      ]
    }
  },
  {
    id: 'escarabajo-hercules',
    data: {
      nombre: 'Escarabajo Hércules Ecuatoriano',
      nombreCientifico: 'Dynastes hercules ecuatorianus',
      categoria: 'Insectos',
      estadoConservacion: 'Preocupación Menor (LC)',
      estadoTono: 'ok',
      habitat: 'Bosques montanos húmedos con abundancia de troncos caídos en descomposición',
      alimentacion: 'En fase adulta consume savia de árboles y frutas en fermentación; las larvas devoran madera podrida',
      imagen: '/images/especies/escarabajo-hercules.jpg',
      altImagen: 'Escarabajo Hércules macho con cuernos torácicos imponentes en el Chocó Andino',
      descripcion: 'Uno de los coleópteros más grandes y fuertes del planeta. Los machos desarrollan cuernos cefálicos y torácicos descomunales que utilizan como tenazas para combatir por territorio y parejas.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Arthropoda',
        clase: 'Insecta',
        orden: 'Coleoptera',
        familia: 'Scarabaeidae',
        genero: 'Dynastes'
      },
      caracteristicasFisicas: 'Dimorfismo sexual extremo. Los machos adultos poseen dos cuernos masivos: uno torácico curvado hacia abajo con pelos amarillos y otro cefálico curvado hacia arriba. Élitros verde oliva con puntos negros que cambian con la humedad.',
      tamanoPeso: 'Machos pueden alcanzar hasta 15 a 17 cm de largo total; peso de hasta 100 gramos en larvas y 40 gramos en adultos.',
      rasgosIdentificacion: 'Cuernos gigantescos en machos; élitros amarillentos con motas negras; vuelo pesado y sonoro al atardecer.',
      distribucionGeografica: 'Vertientes boscosas de Mindo, Mashpi, Pacto, Nanegal y cuenca del Guayllabamba.',
      rangoAltitudinal: '300 a 1.900 msnm en bosques lluviosos y premontanos.',
      comportamientoHabitos: 'Crepuscular y nocturno. Pasa el día oculto bajo troncos podridos. Los machos entablan combates feroces levantando y arrojando al oponente.',
      reproduccionCiclo: 'Las larvas se alimentan durante 1,5 a 2 años de celulosa podrida antes de formar una celda pupal y emerger como adultos.',
      funcionEcologica: 'Descomponedor e ingeniero de nutrientes primario: tritura y transforma toneladas de madera muerta en suelo fértil.',
      importanciaChocoAndino: 'Pieza clave en el ciclo del carbono del bosque y gran atractivo educativo en ferias de biodiversidad.',
      amenazasPrincipales: 'Eliminación indiscriminada de madera muerta en bosques productivos y recolección para coleccionismo.',
      medidasProteccion: 'Regulación del comercio de insectos bajo normativa ambiental y conservación de troncos caídos en reservas.',
      datosCuriosos: [
        'Puede levantar objetos que superan cientos de veces su propio peso corporal.',
        'El color de sus élitros cambia de verde amarillento a negro en minutos según la humedad ambiental.',
        'Su larva es más pesada y voluminosa que el escarabajo adulto final.'
      ],
      fuentes: [
        { titulo: 'Coleópteros del Ecuador - Museo QCAZ' },
        { titulo: 'Revista Ecuatoriana de Entomología' }
      ]
    }
  },
  {
    id: 'abeja-orquideas',
    data: {
      nombre: 'Abeja de las Orquídeas',
      nombreCientifico: 'Euglossa dilemma',
      categoria: 'Insectos',
      estadoConservacion: 'Estable / Preocupación Menor',
      estadoTono: 'ok',
      habitat: 'Bosques montanos húmedos y nublados con alta densidad de orquídeas epífitas',
      alimentacion: 'Néctar y polen de flores diversas; los machos recolectan sustancias aromáticas y aceites volátiles de orquídeas',
      imagen: '/images/especies/abeja-orquideas.jpg',
      altImagen: 'Abeja de las Orquídeas con brillante cuerpo metálico verde esmeralda en vuelo sobre flor',
      descripcion: 'Insecto joya del Chocó Andino, resplandeciente por su cuerpo metálico de color verde esmeralda iridiscente. Es el socio mutualista imprescindible para la polinización y supervivencia de las orquídeas más complejas del bosque.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Arthropoda',
        clase: 'Insecta',
        orden: 'Hymenoptera',
        familia: 'Apidae',
        genero: 'Euglossa'
      },
      caracteristicasFisicas: 'Exoesqueleto con reflejos metálicos verde esmeralda o zafiro. Lengua (glosa) extraordinariamente larga que puede superar la longitud total del insecto. Patas traseras hinchadas con cavidades colectoras de fragancias.',
      tamanoPeso: '11 a 17 mm de largo; peso aproximado de 0,1 a 0,2 gramos.',
      rasgosIdentificacion: 'Cuerpo verde metálico brillante; vuelo veloz zumbante con giros instantáneos; lengua muy larga extendida para extraer néctar en flores profundas.',
      distribucionGeografica: 'Ampliamente distribuida en todo el Chocó Andino: Mindo, Mashpi, Nanegalito, Pacto y Calacalí.',
      rangoAltitudinal: '200 a 2.200 msnm en bosques montanos y estribaciones occidentales.',
      comportamientoHabitos: 'Diurna y solitaria. Los machos visitan orquídeas para recolectar fragancias que almacenan en sus patas para crear un perfume nupcial.',
      reproduccionCiclo: 'Las hembras construyen nidos individuales con resinas vegetales y cera en huecos de madera, alimentando a sus larvas con polen y néctar.',
      funcionEcologica: 'Polinizador exclusivo de cientos de especies de orquídeas (géneros Dracula, Stanhopea, Gongora) que dependen 100% de estas abejas.',
      importanciaChocoAndino: 'Sin las abejas de las orquídeas, la extraordinaria riqueza de orquídeas epífitas del Chocó Andino colapsaría en pocas generaciones.',
      amenazasPrincipales: 'Uso de insecticidas agrícolas y pérdida de árboles resinosos para la construcción de sus nidos.',
      medidasProteccion: 'Protección de árboles resinosos nativos y fomento de jardines botánicos de orquídeas.',
      datosCuriosos: [
        'Su lengua puede ser el doble de larga que su cuerpo para alcanzar néctar en flores profundas inaccesibles a otras abejas.',
        'Los machos pasan semanas mezclando esencias florales hasta crear un perfume químico único para cortejar.',
        'Pueden volar a velocidades de más de 30 km/h a través del bosque nublado.'
      ],
      fuentes: [
        { titulo: 'Orchid Bees of the Neotropics (Dressler)' },
        { titulo: 'INABIO - Red de Interacciones Planta-Polinizador' }
      ]
    }
  },
  {
    id: 'mariposa-buho',
    data: {
      nombre: 'Mariposa Búho del Chocó',
      nombreCientifico: 'Caligo telamonius',
      categoria: 'Insectos',
      estadoConservacion: 'Estable / Preocupación Menor',
      estadoTono: 'ok',
      habitat: 'Sotobosque húmedo sombreado, cañadas y bordes de bosque con abundancia de heliconias',
      alimentacion: 'En fase adulta se alimenta de jugos de frutas fermentadas, savia y barro mineral; las orugas comen hojas de platanillo y banano silvestre',
      imagen: '/images/especies/mariposa-buho.jpg',
      altImagen: 'Mariposa Búho con sus grandes ocelos circulares que imitan la mirada de un búho',
      descripcion: 'Gigante del sotobosque del Chocó Andino: una de las mariposas más grandes de Sudamérica, dotada en el envés de sus alas de enormes ojos falsos u ocelos que imitan con asombroso realismo la mirada hipnótica de un búho para aterrorizar a pájaros depredadores.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Arthropoda',
        clase: 'Insecta',
        orden: 'Lepidoptera',
        familia: 'Nymphalidae',
        genero: 'Caligo'
      },
      caracteristicasFisicas: 'Envergadura alar imponente. La cara superior es de color pardo oscuro con reflejos azul pizarra y una franja amarilla ocre en las alas anteriores. La cara inferior presenta un intrincado patrón de mármol grisáceo y dos gigantescos ocelos negros con bordes dorados y una pupila blanca en media luna que parece reflejar la luz.',
      tamanoPeso: 'Envergadura de alas de 12 a 16 cm; peso aproximado de 1,5 a 2,5 gramos.',
      rasgosIdentificacion: 'Dos ocelos circulares gigantescos parecidos a ojos de búho en la cara inferior de las alas posteriores; vuelo crepuscular bajo y pesado al alba y al atardecer.',
      distribucionGeografica: 'Valles cálidos y templados del Chocó Andino: Mindo, Pacto, Nanegal y cuenca del Guayllabamba.',
      rangoAltitudinal: '100 a 1.700 msnm en bosques lluviosos y premontanos.',
      comportamientoHabitos: 'Crepuscular. Vuela activamente durante los primeros 45 minutos del amanecer y justo antes de anochecer. Pasa las horas más calurosas del día posada inmóvil verticalmente sobre troncos donde su camuflaje es infalible.',
      reproduccionCiclo: 'Huevos esféricos sobre el envés de hojas de heliconias. Las orugas son grandes, rayadas de verde y amarillo, con cuernitos en la cabeza y cola bifurcada. Crisálida que imita una hoja marchita.',
      funcionEcologica: 'Descomponedora y recicladora de frutos caídos en el suelo del bosque y alimento para murciélagos insectívoros grandes.',
      importanciaChocoAndino: 'Estrella indiscutible de la educación ambiental en mariposarios de Mindo que enseña a los niños el fascinante fenómeno del mimetismo defensivo.',
      amenazasPrincipales: 'Uso de plaguicidas agrícolas en cultivos vecinos y recolección descontrolada para artesanías.',
      medidasProteccion: 'Fomento de mariposarios sustentables certificados y protección de cañadas con heliconias nativas.',
      datosCuriosos: [
        'Cuando un ave insectívora se acerca para atacarla, abre repentinamente las alas mostrando los dos ocelos gigantescos; el pájaro cree ver los ojos de un búho rapaz y huye despavorido.',
        'Sus ojos falsos tienen incluso un pequeño "brillo" blanco pintado por escamas microscópicas que simula el reflejo de la luz en una córnea real.',
        'Es atraída con fascinación por frutas muy maduras fermentadas como guineos y papayas de monte.'
      ],
      fuentes: [
        { titulo: 'Lepidoptera of the Neotropics (DeVries)' },
        { titulo: 'Mariposas de Mindo - Guía de Especies' }
      ]
    }
  },
  {
    id: 'escarabajo-arlequin',
    data: {
      nombre: 'Escarabajo Arlequín',
      nombreCientifico: 'Acrocinus longimanus',
      categoria: 'Insectos',
      estadoConservacion: 'Preocupación Menor (LC)',
      estadoTono: 'ok',
      habitat: 'Troncos caídos y árboles añosos de higuerón y matapalo en bosques montanos y húmedos',
      alimentacion: 'En fase adulta consume savia rezumante y hongos de cortezas; las larvas devoran madera en descomposición',
      imagen: '/images/especies/escarabajo-arlequin.jpg',
      altImagen: 'Escarabajo Arlequín con larguísimas patas delanteras y dibujos geométricos en élitros',
      descripcion: 'El gran pintor del bosque nublado: un escarabajo de cuernos largos cuyos élitros lucen un elaborado tapiz geométrico de rojos, negros y verdes oliváceos. Los machos poseen patas delanteras monstruosamente largas que duplican el tamaño de su propio cuerpo.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Arthropoda',
        clase: 'Insecta',
        orden: 'Coleoptera',
        familia: 'Cerambycidae',
        genero: 'Acrocinus'
      },
      caracteristicasFisicas: 'Cuerpo aplanado y ancho. Élitros decorados con un mosaico caleidoscópico de figuras geométricas rojas, anaranjadas y negras sobre fondo verde grisáceo. Los machos poseen patas anteriores extremadamente largas y articuladas (hasta 15 cm) y largas antenas curvadas hacia atrás.',
      tamanoPeso: 'Longitud corporal de 6 a 8,5 cm (sin patas); machos con patas extendidas superan los 25 cm; peso de 15 a 25 gramos.',
      rasgosIdentificacion: 'Patas anteriores larguísimas en machos que parecen zancos; diseño geométrico multicolor en los élitros que recuerda a un traje de arlequín; antenas más largas que el cuerpo.',
      distribucionGeografica: 'Bosques subtropicales y montanos de Mashpi, Pacto, Nanegal y Mindo.',
      rangoAltitudinal: '200 a 1.800 msnm en bosques lluviosos y nublados.',
      comportamientoHabitos: 'Nocturno. Se posa sobre troncos gigantes de árboles de la familia Moraceae (higuerones). Los machos usan sus largas patas para abrazar a la hembra durante el apareamiento y alejar a otros machos rivales.',
      reproduccionCiclo: 'La hembra abre ranuras en la corteza de troncos muertos donde deposita sus huevos. Las larvas gigantescas barrena la madera podrida durante más de un año antes de metamorfosearse.',
      funcionEcologica: 'Descomponedor primario de troncos caídos de gran porte y vehículo de transporte simbiótico (foresia) de pseudoescorpiones que viajan protegidos bajo sus alas para cazar ácaros parásitos.',
      importanciaChocoAndino: 'Ejemplo icónico de las asombrosas adaptaciones morfológicas de los invertebrados del noroccidente de Pichincha.',
      amenazasPrincipales: 'Eliminación sistemática de madera muerta en bosques manejados y captura ilegal para colecciones de insectos.',
      medidasProteccion: 'Preservación de árboles secos y troncos caídos dentro de reservas ecológicas.',
      datosCuriosos: [
        'Bajo sus alas transporta colonias enteras de diminutos pseudoescorpiones que se suben a él como si fuera un autobús aéreo para viajar de un árbol a otro.',
        'Sus patas delanteras son tan largas que cuando camina sobre un tronco parece una gigantesca araña acorazada.',
        'A pesar de su apariencia temible con sus largas patas y mandíbulas, es completamente inofensivo para el ser humano.'
      ],
      fuentes: [
        { titulo: 'Cerambycidae of the Neotropical Region' },
        { titulo: 'Entomología Ecuatoriana - PUCE' }
      ]
    }
  },
  {
    id: 'hormiga-arriera',
    data: {
      nombre: 'Hormiga Arriera o Cortadora',
      nombreCientifico: 'Atta cephalotes',
      categoria: 'Insectos',
      estadoConservacion: 'Común y Estable',
      estadoTono: 'ok',
      habitat: 'Suelos bien drenados del bosque húmedo y montano bajo con extensos nidos subterráneos',
      alimentacion: 'No come hojas: cultiva un hongo simbiótico subterráneo (Leucoagaricus gongylophorus) alimentándolo con fragmentos foliares',
      imagen: '/images/especies/hormiga-arriera.jpg',
      altImagen: 'Hormiga Arriera transportando un fragmento de hoja verde sobre su cabeza en sendero',
      descripcion: 'La primera agricultora del planeta: una hormiga social que organiza colonias subterráneas de millones de individuos con complejas castas especializadas, que cortan y transportan toneladas de hojas frescas para nutrir sus jardines de hongos subterráneos.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Arthropoda',
        clase: 'Insecta',
        orden: 'Hymenoptera',
        familia: 'Formicidae',
        genero: 'Atta'
      },
      caracteristicasFisicas: 'Coloración castaño rojizo oscuro con espinas afiladas sobre el tórax. Polimorfismo extremo con castas muy diferenciadas: reinas gigantescas de hasta 30 mm, soldados con cabezas acorazadas y mandíbulas cortantes de 15 mm, forrajeras medianas y jardineras minúsculas de 2 mm.',
      tamanoPeso: '2 mm a 30 mm según la casta; una colonia completa puede pesar decenas de kilogramos.',
      rasgosIdentificacion: 'Senderos limpios y anchos en el suelo del bosque transitados por miles de hormigas que cargan trozos de hojas verdes como sombrillas; montículos de tierra removida en la entrada del nido.',
      distribucionGeografica: 'Abundante en todo el Chocó Andino: Mindo, Pacto, Nanegal, Gualea y Calacalí.',
      rangoAltitudinal: '100 a 2.000 msnm en bosques lluviosos y valles templados.',
      comportamientoHabitos: 'Activa de día y noche. Forman autopistas biológicas despejadas en el suelo del bosque. Las soldados patrullan los flancos protegiendo a las cargadoras contra moscas parásitas.',
      reproduccionCiclo: 'Vuelos nupciales masivos en días húmedos donde reinas y machos alados copulan en el aire. La reina fecundada entierra un pedacito de hongo en su nueva madriguera y funda una colonia que puede durar más de 15 años.',
      funcionEcologica: 'Arquitecta del suelo y mayor herbívoro del bosque neotropical: poda el dosel estimulando el rebrote vegetal, airea toneladas de suelo y recicla nutrientes a profundidades de más de 4 metros.',
      importanciaChocoAndino: 'Especie clave en la dinámica de suelos y reciclaje orgánico de toda la Reserva de Biosfera.',
      amenazasPrincipales: 'Uso de venenos hormiguicidas químicos de amplio espectro que contaminan fuentes subterráneas de agua.',
      medidasProteccion: 'Manejo agroecológico preventivo en cultivos comunitarios de café y cacao de sombra en el Chocó Andino.',
      datosCuriosos: [
        'Llevan practicando la agricultura desde hace más de 50 millones de años, mucho antes de que los humanos inventáramos el cultivo de plantas.',
        'Una sola hormiga arriera puede cargar en sus mandíbulas un trozo de hoja que pesa 20 veces su propio peso corporal mientras corre a gran velocidad.',
        'Producen sus propios antibióticos naturales a través de bacterias simbióticas que llevan en su piel para evitar que plagas infecten sus jardines de hongos.'
      ],
      fuentes: [
        { titulo: 'The Leafcutter Ants: Civilization by Instinct (Hölldobler & Wilson)' },
        { titulo: 'Guía de Formícidos del Ecuador - Museo de Zoología QCAZ' }
      ]
    }
  },
  {
    id: 'mantis-hoja',
    data: {
      nombre: 'Mantis Hoja del Chocó',
      nombreCientifico: 'Choeradodis rhombicollis',
      categoria: 'Insectos',
      estadoConservacion: 'Preocupación Menor (LC)',
      estadoTono: 'ok',
      habitat: 'Estrato medio y bajo del bosque nublado, arbustos y follaje húmedo',
      alimentacion: 'Carnívora depredadora al acecho (moscas, polillas, mariposas, grillos y orugas)',
      imagen: '/images/especies/mantis-hoja.jpg',
      altImagen: 'Mantis Hoja del Chocó con pronoto ensanchado en forma de hoja verde perfecta',
      descripcion: 'El camuflaje absoluto: una mantis religiosa cuyo tórax se ensancha lateralmente formando un escudo idéntico a una hoja verde con nervaduras y bordes aserrados, volviéndose invisible tanto para sus presas como para las aves que la buscan.',
      clasificacion: {
        reino: 'Animalia',
        filo: 'Arthropoda',
        clase: 'Insecta',
        orden: 'Mantodea',
        familia: 'Mantidae',
        genero: 'Choeradodis'
      },
      caracteristicasFisicas: 'Coloración verde hoja viva uniforme. Su característica anatómica más fascinante es la enorme expansión laminar de su protórax (escudo pronotal) con forma romboidal, que simula las nervaduras principales y secundarias de una hoja vegetal fresca. Patas delanteras raptoras dotadas de fuertes espinas para aprisionar a sus presas.',
      tamanoPeso: '6 a 8,5 cm de longitud; peso aproximado de 3 a 6 gramos.',
      rasgosIdentificacion: 'Escudo torácico verde dilatado en forma de hoja romboidal perfecta; cabeza triangular muy móvil con ojos compuestos saltones; patas raptoras espinosas plegadas.',
      distribucionGeografica: 'Bosques montanos húmedos de Mindo, Mashpi, Nanegalito y Pacto.',
      rangoAltitudinal: '200 a 1.800 msnm en bosques lluviosos y nublados.',
      comportamientoHabitos: 'Diurna. Permanece inmóvil durante horas aferrada al envés o haz de una hoja balanceándose suavemente con la brisa para simular una hoja movida por el viento antes de lanzar su ataque fulgurante.',
      reproduccionCiclo: 'La hembra deposita una ooteca espumosa que se endurece como papel maché en una rama protegida. De ella emergen entre 30 y 60 pequeñas ninfas que nacen ya parecidas a hojas diminutas.',
      funcionEcologica: 'Controladora biológica formidable de poblaciones de insectos fitófagos (comedores de hojas) en el sotobosque andino.',
      importanciaChocoAndino: 'Uno de los mayores atractivos en expediciones entomológicas y talleres educativos de biodiversidad en Pichincha.',
      amenazasPrincipales: 'Deforestación del sotobosque y aplicación de pesticidas químicos que diezman sus presas.',
      medidasProteccion: 'Protección de senderos naturales con abundante vegetación arbustiva en reservas biológicas.',
      datosCuriosos: [
        'Su ataque raptor dura menos de 50 milisegundos: es tan veloz que el ojo humano no puede seguir el movimiento de captura.',
        'Puede girar su cabeza triangular 180 grados sin mover el resto de su cuerpo para vigilar su entorno con visión estereoscópica tridimensional.',
        'Se mece de lado a lado imitando una hoja sacudida por el viento cuando sospecha que un ave rapaz está cerca.'
      ],
      fuentes: [
        { titulo: 'Mantodea of the World (Wieland)' },
        { titulo: 'Insectos del Chocó Ecuatoriano - INABIO' }
      ]
    }
  },

  // ==========================================
  // 5. FLORA (8 especies en total)
  // ==========================================
  {
    id: 'orquidea-andina',
    data: {
      nombre: 'Orquídea Drácula (Cara de Mono)',
      nombreCientifico: 'Dracula simia',
      categoria: 'Flora',
      estadoConservacion: 'Vulnerable (VU)',
      estadoTono: 'alerta',
      habitat: 'Troncos cubiertos de musgo y ramas sombreadas con humedad relativa superior al 85%',
      alimentacion: 'Fotosíntesis y absorción de agua y nutrientes disueltos en la neblina a través de raíces epífitas',
      imagen: '/images/especies/orquidea-andina.jpg',
      altImagen: 'Orquídea Drácula simia con su asombrosa forma de rostro de mono en el Chocó Andino',
      descripcion: 'Una de las flores más insólitas del planeta: una orquídea epífita cuyos pétalos, sépalos y labelo configuran con asombrosa precisión las facciones del rostro de un pequeño mono, despidiendo además una fragancia a naranja madura.',
      clasificacion: {
        reino: 'Plantae',
        filo: 'Tracheophyta',
        clase: 'Liliopsida',
        orden: 'Asparagales',
        familia: 'Orchidaceae',
        genero: 'Dracula'
      },
      familiaBotanica: 'Orchidaceae (Orquídeas)',
      caracteristicasFisicas: 'Planta epífita sin pseudobulbos. Hojas alargadas, coriáceas y erectas de color verde oscuro. Sus flores presentan tres grandes sépalos triangulares que terminan en largas colas delgadas de tono púrpura o marrón rojizo; en el centro, el labelo y la columna forman la silueta facial de un simio.',
      tamanoPeso: 'Planta de 15 a 30 cm de altura; flores de 8 a 15 cm de diámetro incluyendo las colas sépalas.',
      rasgosIdentificacion: 'Patrón facial simiesco central en la flor; tres largas colas filiformes oscuras que parten de los sépalos; hábito epífito en árboles cubiertos de briófitas.',
      distribucionGeografica: 'Endémica de los bosques montanos muy húmedos del noroccidente de Ecuador: Nanegal, Mindo, Pacto y estribaciones del volcán Pichincha.',
      rangoAltitudinal: '1.200 a 2.200 msnm en el corazón del bosque de niebla.',
      comportamientoHabitos: 'Crecimiento epífito sobre cortezas rugosas de árboles maduros en laderas sombreadas donde la niebla se condensa.',
      reproduccionCiclo: 'Polinización por engaño: mimetiza el olor y textura de hongos silvestres para atraer moscas del vinagre y abejas especializadas.',
      funcionEcologica: 'Contribuye a la captación de agua atmosférica en el dosel y mantiene complejas redes simbióticas con hongos micorrízicos.',
      importanciaChocoAndino: 'Especie bandera del ecoturismo botánico de Pichincha; Quito y el Chocó Andino son reconocidos como la "Capital de las Orquídeas".',
      amenazasPrincipales: 'Extracción ilegal por coleccionistas botánicos y tala de árboles hospederos centenarios.',
      medidasProteccion: 'Prohibición estricta de recolección silvestre y cultivo in vitro en orquidearios científicos autorizados.',
      caracteristicasBotanicas: {
        hojas: 'Erectas, coriáceas, de color verde intenso, sin pseudobulbos de almacenamiento.',
        flores: 'Sépalos extendidos con colas alargadas oscuras; labelo cóncavo que simula la boca y nariz de un mono.',
        frutosSemillas: 'Cápsula que libera millones de semillas microscópicas transportadas por el viento.',
        troncoRaices: 'Raíces aéreas cubiertas por velamen esponjoso que atrapa el agua de la neblina.'
      },
      condicionesCrecimiento: 'Requiere sombra densa (luz filtrada), ventilación constante y temperaturas frescas entre 12 y 20 °C con humedad permanente.',
      relacionOrganismos: 'Simbiosis obligada con hongos micorrizas para germinar sus semillas y mutualismo con dípteros polinizadores.',
      datosCuriosos: [
        'El nombre "Dracula" significa "pequeño dragón" en latín por las largas colas de los sépalos que parecen colmillos.',
        'El epíteto "simia" hace referencia a su increíble parecido con la cara de un mono capuchino.',
        'Despide un aroma cítrico muy agradable que recuerda a naranjas maduras recién peladas.'
      ],
      fuentes: [
        { titulo: 'Asociación Ecuatoriana de Orquideología - Guía de Especies' },
        { titulo: 'Jardín Botánico de Quito - Colección Nacional de Orquídeas' }
      ]
    }
  },
  {
    id: 'bromelia-gigante',
    data: {
      nombre: 'Bromelia Epífita del Chocó',
      nombreCientifico: 'Tillandsia complanata',
      categoria: 'Flora',
      estadoConservacion: 'Preocupación Menor (LC)',
      estadoTono: 'ok',
      habitat: 'Copas, ramas gruesas y troncos verticales de árboles altos en el dosel nublado',
      alimentacion: 'Fotosíntesis y absorción de nutrientes a través de escamas foliares (tricomas) que capturan polvo mineral y agua de lluvia',
      imagen: '/images/especies/bromelia-gigante.jpg',
      altImagen: 'Bromelia Epífita formando roseta tanque con hojas rojizas en árbol del Chocó Andino',
      descripcion: 'Planta epífita que crece en las alturas de los árboles centenarios formando un "tanque" o cisterna natural entre sus hojas, creando un microecosistema acuático en el dosel que sirve de hogar a ranas, insectos y aves.',
      clasificacion: {
        reino: 'Plantae',
        filo: 'Tracheophyta',
        clase: 'Liliopsida',
        orden: 'Poales',
        familia: 'Bromeliaceae',
        genero: 'Tillandsia'
      },
      familiaBotanica: 'Bromeliaceae (Bromelias)',
      caracteristicasFisicas: 'Roseta densa y compacta de hojas acintadas arqueadas de color verde vivo con tintes púrpura rojizos. Produce múltiples escapos florales aplanados de color rojo brillante con flores violetas.',
      tamanoPeso: 'Roseta de 40 a 70 cm de diámetro; espigas florales de 20 a 40 cm de largo.',
      rasgosIdentificacion: 'Roseta en forma de embudo que almacena agua de lluvia; múltiples inflorescencias delgadas de color carmín; no es parásita: utiliza las ramas solo como soporte físico.',
      distribucionGeografica: 'Abundante en todo el Chocó Andino: Mindo, Tandayapa, Nanegal, Nono, Pacto y Maquipucuna.',
      rangoAltitudinal: '800 a 3.200 msnm en bosques montanos andinos.',
      comportamientoHabitos: 'Crecimiento epífito sobre horquetas y ramas iluminadas del dosel con raíces de anclaje tenaces.',
      reproduccionCiclo: 'Polinizada por colibríes. Produce cápsulas secas con semillas provistas de vilanos plumosos dispersadas por el viento.',
      funcionEcologica: 'Oasis vertical: almacena varios litros de agua en las alturas del bosque albergando renacuajos, larvas y suministrando agua de beber al oso de anteojos y aves.',
      importanciaChocoAndino: 'Ingeniera del ecosistema del dosel andino; sostiene una red trófica que jamás toca el suelo del bosque.',
      amenazasPrincipales: 'Tala de árboles viejos donde habita y recolección para adornos en zonas periurbanas.',
      medidasProteccion: 'Prohibición de extracción silvestre y protección de árboles con gran carga de epífitas.',
      caracteristicasBotanicas: {
        hojas: 'Coriáceas con tricomas absorbentes especializados en la base del embudo.',
        flores: 'Tubulares de color violeta intenso protegidas por brácteas florales rojizas aplanadas.',
        frutosSemillas: 'Cápsulas que liberan semillas con plumón sedoso dispersadas por corrientes de aire.',
        troncoRaices: 'Raíces alambrinas cuya función única es amarrarse a la corteza del árbol soporte.'
      },
      condicionesCrecimiento: 'Buena luminosidad en el estrato medio y alto del bosque, abundante humedad ambiental y lluvia frecuente.',
      relacionOrganismos: 'Alberga renacuajos de ranas arborícolas, provee alimento al oso andino que come el cogollo tierno de sus bases, y atrae a colibríes.',
      datosCuriosos: [
        'No absorbe el agua por sus raíces como las plantas terrestres, sino a través de pelos microscópicos en sus hojas llamados tricomas.',
        'Se han encontrado más de 250 especies diferentes de microorganismos e insectos viviendo en el agua de una sola bromelia.',
        'El oso de anteojos trepa más de 20 metros para arrancar estas bromelias y comer su corazón tierno.'
      ],
      fuentes: [
        { titulo: 'Bromeliaceae del Ecuador - Flora of Ecuador' },
        { titulo: 'Missouri Botanical Garden - Tropicos Database' }
      ]
    }
  },
  {
    id: 'helecho-arboreo',
    data: {
      nombre: 'Helecho Arbóreo Gigante',
      nombreCientifico: 'Cyathea caracasana',
      categoria: 'Flora',
      estadoConservacion: 'Casi Amenazado / Apéndice II CITES',
      estadoTono: 'alerta',
      habitat: 'Estrato medio de bosques nublados primarios, cañadas húmedas y laderas con neblina',
      alimentacion: 'Fotosíntesis y absorción de nutrientes a través de un denso manto de raíces adventicias aéreas',
      imagen: '/images/especies/helecho-arboreo.jpg',
      altImagen: 'Helecho Arbóreo Gigante con su tronco fibroso y copa de frondas verdes en Chocó Andino',
      descripcion: 'Verdadero fósil viviente de los bosques nublados andinos: un helecho con porte de árbol que puede alcanzar más de 12 metros de altura, dominando el paisaje prehistórico de las cañadas del Chocó Andino.',
      clasificacion: {
        reino: 'Plantae',
        filo: 'Pteridophyta',
        clase: 'Polypodiopsida',
        orden: 'Cyatheales',
        familia: 'Cyatheaceae',
        genero: 'Cyathea'
      },
      familiaBotanica: 'Cyatheaceae (Helechos Arbóreos)',
      caracteristicasFisicas: 'Tronco fibroso columnar erecto formado por bases foliares viejas y raíces adventicias entrelazadas. Corona superior con frondas gigantescas de 2 a 3,5 metros de longitud con escamas doradas.',
      tamanoPeso: 'Altura de 6 a 12 metros; diámetro del tronco de 15 a 30 cm; frondas de más de 3 metros de largo.',
      rasgosIdentificacion: 'Tronco esbelto fibroso cubierto de cicatrices foliares; báculos ("churos") tiernos enrollados en espiral en el ápice protegidos por escamas pardas.',
      distribucionGeografica: 'Cañadas y laderas húmedas de Nanegalito, Mindo, Tandayapa, Pacto y Reserva Mashpi.',
      rangoAltitudinal: '1.000 a 2.800 msnm en bosques montanos.',
      comportamientoHabitos: 'Crecimiento lento (2 a 5 cm por año). Prospera bajo el dosel protector de árboles altos con saturación permanente de humedad.',
      reproduccionCiclo: 'Reproducción por esporas microscópicas producidas en soros circulares en el envés de las frondas fértiles, dispersadas por el viento.',
      funcionEcologica: 'Regulador térmico e hídrico del sotobosque: su tronco fibroso es el sustrato preferido para orquídeas miniatura, musgos y hepáticas.',
      importanciaChocoAndino: 'Estructura la arquitectura vegetal del bosque de niebla y previene derrumbes en laderas escarpadas.',
      amenazasPrincipales: 'Tala para uso de su tronco fibroso como sustrato comercial para orquídeas ("chachi") y expansión ganadera.',
      medidasProteccion: 'Inclusión en Apéndice II de CITES que prohíbe su comercio internacional.',
      caracteristicasBotanicas: {
        hojas: 'Grandes frondas compuestas de hasta 3 metros de largo que se abren desenrollándose en espiral.',
        flores: 'No produce flores ni semillas (se reproduce por esporas).',
        frutosSemillas: 'Soros globosos ubicados en el envés de los foliolos con esporangios.',
        troncoRaices: 'Tronco falso formado por tejido vascular reforzado por raíces adventicias exteriores.'
      },
      condicionesCrecimiento: 'Suelos ricos en materia orgánica, sombra parcial, neblina continua y protección contra vientos secos.',
      relacionOrganismos: 'Su tronco funciona como un jardín vertical albergando orquídeas, helechos miniatura y nidos de aves.',
      datosCuriosos: [
        'Los helechos arbóreos ya poblaban la Tierra hace más de 300 millones de años, mucho antes que los dinosaurios.',
        'Los brotes jóvenes enrollados se conocen en el campo andino como "churos" o "cabezas de mono".',
        'Su tronco no tiene madera verdadera ni anillos de crecimiento: se mantiene en pie por su corsé de raíces entrelazadas.'
      ],
      fuentes: [
        { titulo: 'Helechos del Ecuador - Catálogo de Plantas Vasculares' },
        { titulo: 'CITES - Guía de Identificación de Helechos Arbóreos Amenazados' }
      ]
    }
  },
  {
    id: 'palma-pambil',
    data: {
      nombre: 'Palma Pambil (Palma Caminadora)',
      nombreCientifico: 'Iriartea deltoidea',
      categoria: 'Flora',
      estadoConservacion: 'Preocupación Menor (LC)',
      estadoTono: 'ok',
      habitat: 'Laderas de bosque pluvial y bosque montano bajo del Chocó Andino',
      alimentacion: 'Fotosíntesis y absorción profunda de minerales y agua a través de un cono de raíces zancudas',
      imagen: '/images/especies/palma-pambil.jpg',
      altImagen: 'Palma Pambil con su cono de raíces zancudas y tronco liso en bosque del Chocó Andino',
      descripcion: 'La reina del dosel del Chocó Andino: una palma majestuosa de hasta 30 metros de altura, famosa por su asombroso cono de raíces zancudas espinosas que emergen de la base del tronco elevándolo sobre el suelo.',
      clasificacion: {
        reino: 'Plantae',
        filo: 'Tracheophyta',
        clase: 'Liliopsida',
        orden: 'Arecales',
        familia: 'Arecaceae',
        genero: 'Iriartea'
      },
      familiaBotanica: 'Arecaceae (Palmas)',
      caracteristicasFisicas: 'Tronco solitario, liso, recto y cilíndrico de color grisáceo con un ensanchamiento globular en la parte media. En la base exhibe un cono de hasta 2 metros formado por cientos de raíces zancudas duras y punzantes. Copa con frondas pinadas de foliolos deltoides en múltiples planos.',
      tamanoPeso: 'Altura de 20 a 35 metros; diámetro de tronco de 25 a 40 cm; hojas de 4 a 6 metros de largo.',
      rasgosIdentificacion: 'Cono denso de raíces zancudas en la base con pequeñas espinas; tronco con engrosamiento en la mitad; foliolos con extremo aserrado como aleta de pez.',
      distribucionGeografica: 'Bosques subtropicales y montanos del Chocó Andino: Mashpi, Pacto, Nanegal y estribaciones del Guayllabamba.',
      rangoAltitudinal: '100 a 1.500 msnm en bosques lluviosos occidentales.',
      comportamientoHabitos: 'Árbol emergente del dosel forestal. Sus raíces zancudas le permiten afirmarse en laderas empinadas propensas a deslaves.',
      reproduccionCiclo: 'Inflorescencias ramificadas que producen miles de frutos globosos amarillentos de 2 cm dispersados por aves y mamíferos.',
      funcionEcologica: 'Pilar nutricional del bosque: sus frutos alimentan a tucanes, pavas de monte, monos capuchinos y pecaríes durante épocas de escasez.',
      importanciaChocoAndino: 'Elemento dominante de la estructura forestal; su madera externa ("chonta de pambil") ha sido empleada por pueblos ancestrales por su dureza incorruptible.',
      amenazasPrincipales: 'Tala selectiva por su madera para pisos y postes, y deforestación para monocultivos.',
      medidasProteccion: 'Manejo forestal sostenible y veda de tala en pendientes pronunciadas en reservas protegidas.',
      caracteristicasBotanicas: {
        hojas: 'Grandes frondas curvadas con foliolos asimétricos deltoideos con bordes dentados dispuestos en abanico.',
        flores: 'Inflorescencias ramificadas con flores masculinas y femeninas bajo el capitel foliar.',
        frutosSemillas: 'Drupas globosas de color amarillo verdoso al madurar con pulpa fibrosa comestible para la fauna.',
        troncoRaices: 'Madera periférica extremadamente densa y negra; cono basal de raíces adventicias resistentes a la torsión.'
      },
      condicionesCrecimiento: 'Alta pluviosidad, suelos profundos con buen drenaje y espacio en el dosel para recibir luz solar plena.',
      relacionOrganismos: 'Alimenta a docenas de especies de fauna silvestre y sus raíces zancudas crean madrigueras para armadillos y pequeños mamíferos.',
      datosCuriosos: [
        'Las raíces zancudas crecen hacia el lado de mayor luz o firmeza, dando la impresión de que la palma "camina" lentamente con los años.',
        'La madera de la parte externa del tronco es tan densa que no flota en el agua y desafía a los clavos comunes.',
        'Una sola palma madura puede producir más de 10.000 frutos en una sola fructificación.'
      ],
      fuentes: [
        { titulo: 'Palmeras del Ecuador - Guía de Campo (Balslev et al.)' },
        { titulo: 'Árboles del Chocó Ecuatoriano - Herbario Nacional de Ecuador' }
      ]
    }
  },
  {
    id: 'anturio-choco',
    data: {
      nombre: 'Anturio de Montaña',
      nombreCientifico: 'Anthurium andreanum',
      categoria: 'Flora',
      estadoConservacion: 'Preocupación Menor (LC)',
      estadoTono: 'ok',
      habitat: 'Sotobosque húmedo sombreado, cañadas musgosas y troncos caídos con alta humedad ambiental',
      alimentacion: 'Fotosíntesis bajo luz tamizada y absorción radicular en materia orgánica rica en humus',
      imagen: '/images/especies/anturio-choco.jpg',
      altImagen: 'Anturio de montaña con espata roja brillante y espádice amarillo en el Chocó Andino',
      descripcion: 'Planta herbácea y epífita baja emblemática de los bosques pluviales del Chocó biogeográfico. Famosa mundialmente por su espata cerosa en forma de corazón de color rojo encendido o carmesí y su espádice cilíndrico repleto de diminutas flores verdaderas.',
      clasificacion: {
        reino: 'Plantae',
        filo: 'Tracheophyta',
        clase: 'Liliopsida',
        orden: 'Alismatales',
        familia: 'Araceae',
        genero: 'Anthurium'
      },
      familiaBotanica: 'Araceae (Aráceas)',
      caracteristicasFisicas: 'Hojas grandes, coriáceas y largamente pecioladas en forma de corazón acorazonado de color verde oscuro brillante con nervaduras prominentes. La inflorescencia consta de una gran bráctea modificada (espata) carnosa, cordiforme y reluciente, y una espiga central erguida (espádice) amarilla o crema.',
      tamanoPeso: 'Altura de 40 a 90 cm; hojas de 25 a 45 cm de largo; espata floral de 8 a 15 cm de ancho.',
      rasgosIdentificacion: 'Hojas en forma de corazón con textura lustrosa; espata floral roja cerosa con espádice cilíndrico rígido; hábito terrestre y semiepífito sobre raíces tabulares.',
      distribucionGeografica: 'Bosques lluviosos y nublados de Mashpi, Pacto, Nanegal y Mindo.',
      rangoAltitudinal: '200 a 1.600 msnm en el Chocó biogeográfico.',
      comportamientoHabitos: 'Crece en colonias densas en el suelo fértil del sotobosque o trepando lentamente por la base de árboles musgosos en ambientes con saturación constante de humedad.',
      reproduccionCiclo: 'Polinizada por pequeños escarabajos de las flores y abejas sin aguijón atraídos por el polen y el aroma del espádice. Produce bayas globosas carnosas que son consumidas por aves del sotobosque.',
      funcionEcologica: 'Cubre y estabiliza el suelo orgánico en cañadas de pendientes fuertes y sus frutos carnosos nutren a aves terrestres y pequeños roedores.',
      importanciaChocoAndino: 'Especie insignia de la flora ecuatoriana que dio origen a la floricultura tropical de anturios en el mundo.',
      amenazasPrincipales: 'Extracción indiscriminada de plantas silvestres para comercio ornamental y degradación de quebradas húmedas.',
      medidasProteccion: 'Prohibición de recolección en áreas protegidas y cultivo sustentable en viveros comunitarios.',
      caracteristicasBotanicas: {
        hojas: 'Láminas foliares acorazonadas de borde liso, verde oscuro lustroso por el haz y más pálidas por el envés.',
        flores: 'Espádice denso con cientos de diminutas flores hermafroditas protegidas por la espata brillante.',
        frutosSemillas: 'Bayas carnosas globosas que emergen del espádice con semillas gelatinosas.',
        troncoRaices: 'Tallo corto y carnoso con raíces adventicias carnosas que penetran la hojarasca profunda.'
      },
      condicionesCrecimiento: 'Sombra intensa, humedad relativa superior al 80% y temperaturas cálidas a templadas entre 18 y 24 °C.',
      relacionOrganismos: 'Sus grandes hojas acumulan gotas de rocío que beben ranitas diminutas y sus frutos alimentan a aves del sotobosque.',
      datosCuriosos: [
        'Lo que comúnmente llamamos "flor" del anturio no es un pétalo, sino una hoja modificada llamada espata cuya función es atraer a los polinizadores hacia las verdaderas flores diminutas del espádice central.',
        'La espata puede durar fresca y brillante en la planta durante más de dos meses gracias a su gruesa cutícula cerosa.',
        'El Chocó Andino alberga decenas de especies de Anthurium que no crecen en ningún otro rincón del planeta.'
      ],
      fuentes: [
        { titulo: 'Araceae del Ecuador - Annals of the Missouri Botanical Garden' },
        { titulo: 'Flora Vascular de la Reserva Biológica Maquipucuna' }
      ]
    }
  },
  {
    id: 'palma-cera',
    data: {
      nombre: 'Palma de Cera Andina',
      nombreCientifico: 'Ceroxylon echinulatum',
      categoria: 'Flora',
      estadoConservacion: 'Casi Amenazada (NT)',
      estadoTono: 'alerta',
      habitat: 'Laderas montañosas escarpadas de bosque nublado andino y valles intermontanos',
      alimentacion: 'Fotosíntesis a pleno dosel y absorción profunda de minerales en suelos andinos volcánicos',
      imagen: '/images/especies/palma-cera.jpg',
      altImagen: 'Tronco columnar cubierto de cera blanca de la Palma de Cera Andina en ladera montañosa',
      descripcion: 'El monumento vegetal de los Andes occidentales: una palma solitaria que desafía el viento y la niebla andina elevándose hasta 30 metros de altura, con un tronco columnar de apariencia marmórea recubierto por una espesa capa de cera natural blanca.',
      clasificacion: {
        reino: 'Plantae',
        filo: 'Tracheophyta',
        clase: 'Liliopsida',
        orden: 'Arecales',
        familia: 'Arecaceae',
        genero: 'Ceroxylon'
      },
      familiaBotanica: 'Arecaceae (Palmas)',
      caracteristicasFisicas: 'Tronco liso, perfectamente cilíndrico, de color gris blanquecino debido a una densa cobertura de cera blanquecina cerosa, marcado por anillos oscuros regulares de cicatrices foliares. Corona terminal esférica con 12 a 20 frondas pinnadas de color verde oscuro por encima y blanco plateado ceroso por debajo.',
      tamanoPeso: 'Altura de 15 a 30 metros; diámetro del tronco de 25 a 35 cm; hojas de 3 a 5 metros de longitud.',
      rasgosIdentificacion: 'Tronco blanco como de tiza o mármol cubierto de cera cerosa; envés de las hojas blanco plateado llamativo al viento; porte altísimo sobresaliendo en el dosel nublado.',
      distribucionGeografica: 'Laderas montañosas de Nono, Calacalí, Nanegalito, Tandayapa y Reserva Pahuma.',
      rangoAltitudinal: '1.400 a 2.800 msnm en bosques montanos altos.',
      comportamientoHabitos: 'Crecimiento lento. Palma heliófila que una vez alcanza el estrato superior domina el paisaje de montaña soportando vientos fuertes y frío andino.',
      reproduccionCiclo: 'Dioica (individuos macho y hembra separados). Las palmas hembra producen racimos gigantescos de frutos esféricos de color rojo anaranjado de 2 cm dispersados por tucanes y loros.',
      funcionEcologica: 'Hogar exclusivo de anidación y alimentación del perico orejiamarillo y del tucán andino piquiverde; sus troncos secos proporcionan oquedades para decenas de aves andinas.',
      importanciaChocoAndino: 'Patrimonio florístico de los Andes de Pichincha y pieza vital para la supervivencia de aves amenazadas en la reserva.',
      amenazasPrincipales: 'Deforestación histórica de laderas para potreros ganaderos y corte ancestral de cogollos jóvenes para ramos de Semana Santa.',
      medidasProteccion: 'Campañas de concientización para sustituir el uso de ramos de palma silvestre y viveros de propagación comunitaria.',
      caracteristicasBotanicas: {
        hojas: 'Pinnadas, erectas o ligeramente arqueadas con foliolos regulares densamente plateados por el envés.',
        flores: 'Inflorescencias ramificadas pendulares de hasta 2 metros protegidas por brácteas leñosas.',
        frutosSemillas: 'Frutos globosos de color rojo encendido al madurar con superficie finamente verrucosa.',
        troncoRaices: 'Tronco columnar no ramificado revestido por una capa de cera natural repelente al agua.'
      },
      condicionesCrecimiento: 'Luz solar directa en su madurez, suelos volcánicos andinos bien drenados y humedad constante de neblina.',
      relacionOrganismos: 'Vital para el perico orejiamarillo (Ognorhynchus icterotis) y alimento para el oso de anteojos y el tucán andino.',
      datosCuriosos: [
        'En siglos pasados los pobladores andinos raspaban la cera natural de sus troncos para fabricar velas y fósforos antes de que existiera la parafina.',
        'El envés de sus hojas es tan blanco plateado que refleja la luz lunar en las noches despejadas de la cordillera.',
        'Puede tardar hasta 40 años en desarrollar su primer tronco visible por encima de la vegetación baja.'
      ],
      fuentes: [
        { titulo: 'Palmeras Andinas del Ecuador (Borchsenius & Balslev)' },
        { titulo: 'UICN Red List - Ceroxylon echinulatum' }
      ]
    }
  },
  {
    id: 'orquidea-mariposa',
    data: {
      nombre: 'Orquídea Mariposa',
      nombreCientifico: 'Psychopsis krameriana',
      categoria: 'Flora',
      estadoConservacion: 'Vulnerable (VU)',
      estadoTono: 'alerta',
      habitat: 'Ramas medias y altas de árboles maduros en bosques montanos húmedos con buena circulación de aire',
      alimentacion: 'Fotosíntesis y captación de neblina y polvo orgánico a través de raíces epífitas aéreas',
      imagen: '/images/especies/orquidea-mariposa.jpg',
      altImagen: 'Flor de Orquídea Mariposa de pétalos anteniformes y labelo moteado de rojo y oro en Chocó Andino',
      descripcion: 'Una de las orquídeas más fascinantes de la botánica mundial: su flor solitaria se mece al extremo de una vara delgada de hasta 80 cm pareciendo una gran mariposa dorada y rojiza suspendida en pleno vuelo en medio de la niebla.',
      clasificacion: {
        reino: 'Plantae',
        filo: 'Tracheophyta',
        clase: 'Liliopsida',
        orden: 'Asparagales',
        familia: 'Orchidaceae',
        genero: 'Psychopsis'
      },
      familiaBotanica: 'Orchidaceae (Orquídeas)',
      caracteristicasFisicas: 'Pseudobulbos comprimidos y redondeados coronados por una sola hoja coriácea manchada de púrpura o pardo rojizo. Sus flores exhiben tres sépalos superiores extremadamente largos y delgados como antenas de insecto, y un labelo ancho, ondulado y festoneado de color amarillo oro salpicado de manchas castaño rojizas.',
      tamanoPeso: 'Planta de 20 a 30 cm; varas florales de 50 a 85 cm; flores de 10 a 14 cm de alto.',
      rasgosIdentificacion: 'Flor con pétalos superiores largos como antenas de mariposa; labelo ondulado amarillo manchado de rojo fuego; hojas moteadas de marrón purpúreo.',
      distribucionGeografica: 'Bosques montanos húmedos de Pacto, Mashpi y Nanegal.',
      rangoAltitudinal: '300 a 1.600 msnm en bosques lluviosos y premontanos.',
      comportamientoHabitos: 'Epífita en horquetas altas bien iluminadas y ventiladas. Produce una flor a la vez en la misma vara floral sucesivamente a lo largo de varios años.',
      reproduccionCiclo: 'Polinizada por abejas de las orquídeas y abejorros que intentan copular o competir con la flor creyéndola un insecto territorial (pseudocopulación y mimetismo).',
      funcionEcologica: 'Especialista en nichos de luz alta en el dosel andino y componente clave de la biodiversidad orquideológica del bosque nublado.',
      importanciaChocoAndino: 'Joya codiciada del patrimonio botánico regional; su conservación protege microhábitats de árboles longevos.',
      amenazasPrincipales: 'Saqueo por coleccionistas botánicos y tala de árboles hospederos en el dosel medio.',
      medidasProteccion: 'Prohibición de comercialización de ejemplares silvestres bajo convenio CITES y custodia en reservas ecológicas.',
      caracteristicasBotanicas: {
        hojas: 'Coriáceas, oblongas, coriáceas y atractivamente jaspeadas de marrón violáceo sobre verde oliva.',
        flores: 'Sépalos filiformes erectos de color castaño; pétalos laterales ondulados y labelo amplio amarillo oro festoneado.',
        frutosSemillas: 'Cápsula fusiforme que libera miles de semillas aladas microscópicas.',
        troncoRaices: 'Pseudobulbos aplanados con raíces carnosas cubiertas de velamen absorbente.'
      },
      condicionesCrecimiento: 'Luz brillante filtrada (no sol directo abrasador), excelente ventilación y humedad ambiental constante.',
      relacionOrganismos: 'Mimetismo visual con insectos para atraer abejas polinizadoras y anclaje no invasivo sobre árboles hospederos.',
      datosCuriosos: [
        'Cuando sopla el viento, la flor se mece al extremo de su vara delgada imitando con exactitud el aleteo errático de una mariposa real.',
        'Una sola vara floral puede seguir produciendo flores una tras otra durante más de diez años consecutivos si no se corta.',
        'Las manchas de sus hojas le permiten camuflarse entre los líquenes de las ramas para no ser devorada por saltamontes herbívoros.'
      ],
      fuentes: [
        { titulo: 'Icones Orchidacearum - Psychopsis krameriana' },
        { titulo: 'Asociación Ecuatoriana de Orquideología' }
      ]
    }
  },
  {
    id: 'heliconia-platanillo',
    data: {
      nombre: 'Heliconia Metálica / Platanillo',
      nombreCientifico: 'Heliconia metallica',
      categoria: 'Flora',
      estadoConservacion: 'Preocupación Menor (LC)',
      estadoTono: 'ok',
      habitat: 'Bordes sombreados de riachuelos, cañadas húmedas y claros de bosque nublado y húmedo',
      alimentacion: 'Fotosíntesis y absorción profunda de nutrientes y agua mediante rizomas perennes',
      imagen: '/images/especies/heliconia-platanillo.jpg',
      altImagen: 'Inflorescencia erecta de Heliconia con brácteas rojas y verdes polinizada por colibríes en Chocó Andino',
      descripcion: 'Planta herbácea exuberante y arquitectónica del Chocó Andino, emparentada con los plátanos silvestres. Sus hojas presentan un brillo metálico terciopelo con el envés púrpura y produce brácteas erectas de color rojo escarlata y verde que alimentan a los colibríes ermitaños.',
      clasificacion: {
        reino: 'Plantae',
        filo: 'Tracheophyta',
        clase: 'Liliopsida',
        orden: 'Zingiberales',
        familia: 'Heliconiaceae',
        genero: 'Heliconia'
      },
      familiaBotanica: 'Heliconiaceae (Heliconias)',
      caracteristicasFisicas: 'Porte herbáceo erguido con tallos falsos (pseudotallos) formados por las vainas foliares imbricadas. Hojas oblongas grandes de color verde oscuro satinado por el haz con nervadura central pálida y un hermoso envés púrpura violáceo. Inflorescencia terminal erecta con brácteas angostas de color rojo carmesí con bordes verdes que contienen flores verdaderas tubulares blancas y verdes.',
      tamanoPeso: 'Altura de 1,5 a 3 metros; hojas de 60 a 120 cm de largo.',
      rasgosIdentificacion: 'Envés de las hojas de color púrpura oscuro metálico; inflorescencias erectas rojas y verdes; hábito en matas densas junto a corrientes de agua.',
      distribucionGeografica: 'Abundante en quebradas y orillas de senderos de Mindo, Mashpi, Nanegalito y Pacto.',
      rangoAltitudinal: '100 a 1.800 msnm en bosques lluviosos y montanos bajos.',
      comportamientoHabitos: 'Crecimiento rizomatoso perenne. Forma densos bosquecillos riparios en sitios con alta humedad del suelo y semisombra.',
      reproduccionCiclo: 'Polinización ornitófila obligada por colibríes de pico curvo (ermitaños). Produce frutos drupáceos de color azul brillante intenso que son consumidos por tucanes y tangaras.',
      funcionEcologica: 'Fuente inagotable de néctar para colibríes durante todo el año y estabilizadora de taludes húmedos contra deslaves en cañadas.',
      importanciaChocoAndino: 'Planta nutricia fundamental de la cual dependen decenas de especies de colibríes y mariposas búho en la Reserva de Biosfera.',
      amenazasPrincipales: 'Canalización de arroyos y limpieza indiscriminada de vegetación nativa en orillas de quebradas.',
      medidasProteccion: 'Conservación de vegetación riparia en senderos ecológicos y proyectos de restauración ecológica.',
      caracteristicasBotanicas: {
        hojas: 'Grandes hojas oblongas dísticas con haz aterciopelado y envés purpúreo metalizado.',
        flores: 'Tubulares, ligeramente curvadas, protegidas en el interior de brácteas rígidas rojas.',
        frutosSemillas: 'Drupas carnosas que maduran a un color azul cobalto llamativo con 3 semillas pétreas.',
        troncoRaices: 'Rizoma subterráneo fibroso y horizontal del cual brotan continuamente nuevos vástagos.'
      },
      condicionesCrecimiento: 'Suelos aluviales ricos en materia orgánica, humedad permanente en las raíces y luz filtrada.',
      relacionOrganismos: 'Sus flores sostienen energéticamente al colibrí ermitaño del Chocó (Phaethornis yaruqui) y sus hojas alimentan a las orugas de la mariposa búho.',
      datosCuriosos: [
        'Sus frutos son de un azul metálico tan intenso que no contiene pigmento azul común: utiliza una estructura celular especial para deslumbrar a las aves.',
        'El néctar acumulado en sus brácteas es tan abundante que colibríes de diferentes especies hacen fila esperando su turno para libar.',
        'Los murciélagos pequeños suelen cortar las nervaduras de sus hojas grandes para fabricar "carpas" colgantes donde refugiarse de la lluvia.'
      ],
      fuentes: [
        { titulo: 'Heliconias del Ecuador - Guía Botánica (Kress)' },
        { titulo: 'Flora of Ecuador - Heliconiaceae' }
      ]
    }
  }
];

export const categoriasEspecies = ['Todas', 'Aves', 'Mamíferos', 'Anfibios', 'Insectos', 'Flora'] as const;
