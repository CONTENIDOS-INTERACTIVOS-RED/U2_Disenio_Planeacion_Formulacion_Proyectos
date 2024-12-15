export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Planeación Estratégica de Proyectos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Metodologías de planeación de proyectos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Metodología del marco lógico',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Metodología PMI',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'PRINCE2',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Marco lógico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Estudio de mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Descripción o presentación del producto o servicio',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Análisis de la demanda',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Estudio de mercado',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Análisis de la oferta',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Comercialización',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Gestión de recursos',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Cerezuela, B., & Ollé, C. (2018). <em>Gestión de proyectos paso a paso</em> (Ed.). Editorial UOC.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/116314',
    },
    {
      referencia:
        'Córdoba Padilla, M. (2011). <em>Formulación y evaluación de proyectos</em> (Ed.). Ecoe Ediciones. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/69169',
    },
    {
      referencia:
        'Malagón Barinas, J. (2019). <em>Modelos, metodologías y sistemas de gestión de proyectos</em> (1ª ed.). Editorial Universidad EAN. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/250971',
    },
    {
      referencia:
        'Rodríguez Aranday, F. (2018). <em>Formulación y evaluación de proyectos de inversión: una propuesta metodológica</em> (Ed.). Instituto Mexicano de Contadores Públicos. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/116949',
    },
    {
      referencia:
        'Bataller, A. (2016). <em>La gestión de proyectos</em> (Ed.). Editorial UOC. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/57720?page=10',
    },
    {
      referencia:
        'Torres Hernández, Z. (2014). <em>Administración de proyectos</em> (Ed.). Grupo Editorial Patria. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/39414?page=6',
    },
  ],
  glosario: [
    {
      termino: 'Demanda',
      significado:
        'cantidad de bienes o servicios que los consumidores están dispuestos a adquirir en un mercado a distintos precios.',
    },
    {
      termino: 'Diagrama de <em>Gantt</em>',
      significado:
        'herramienta visual que muestra la programación de actividades de un proyecto en una línea de tiempo, facilitando el seguimiento y control del mismo.',
    },
    {
      termino: 'Elementos corporativos',
      significado:
        'componentes que representan la identidad y cultura de una empresa, como misión, visión, valores, marca y estructura organizacional.',
    },
    {
      termino: 'Estructura organizacional',
      significado:
        'distribución jerárquica de roles y responsabilidades dentro de una organización, establecida para alcanzar objetivos comunes.',
    },
    {
      termino: 'Estudio de factibilidad',
      significado:
        'análisis integral que determina si un proyecto es viable técnica, económica, y legalmente antes de su ejecución.',
    },
    {
      termino: 'Estudio de mercado',
      significado:
        'investigación que analiza las características de un mercado específico para entender la demanda, la oferta y el comportamiento del consumidor.',
    },
    {
      termino: 'Marco lógico',
      significado:
        'método de planificación que organiza objetivos, actividades y resultados de un proyecto en una matriz, facilitando su evaluación y seguimiento.',
    },
    {
      termino: 'Metodologías ágiles',
      significado:
        'conjunto de métodos de gestión de proyectos que promueven flexibilidad, colaboración y adaptabilidad en el desarrollo de productos o servicios.',
    },
    {
      termino: 'Oferta',
      significado:
        'cantidad de bienes o servicios que los productores están dispuestos a vender en un mercado a diferentes precios.',
    },
    {
      termino: 'Organigramas',
      significado:
        'diagramas que representan la estructura jerárquica y los departamentos o áreas de una organización, mostrando relaciones y niveles de autoridad.',
    },
    {
      termino: 'USAID',
      significado:
        'agencia de los Estados Unidos para el Desarrollo Internacional, que brinda asistencia para promover el desarrollo económico y social en países en desarrollo.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
}
