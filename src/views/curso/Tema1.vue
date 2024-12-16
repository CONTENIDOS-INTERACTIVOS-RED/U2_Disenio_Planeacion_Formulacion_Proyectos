<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Metodologías de planeación de proyectos '")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    
    .row.mb-5
      .col-lg-5.order-lg-2
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-7.order-lg-1
        p Las metodologías de planeación de proyectos son enfoques estructurados que guían la organización, ejecución y control de proyectos. Estas metodologías describen un paso a paso para planificar, definiendo objetivos, recursos, tiempos y actividades, lo que facilita el seguimiento y la ejecución del proyecto desde su inicio hasta su cierre. Cada metodología tiene principios y herramientas que ayudan a los equipos de trabajo a coordinarse, anticipar riesgos, y asegurar que los objetivos del proyecto se cumplan en tiempo y forma.
        .bg-color-1.p-4(data-aos="fade-left" style="background-color:#D7E7F8;").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las metodologías de planeación de proyectos permiten minimizar los riesgos, mejorar la coordinación entre los equipos, y optimizar el uso de recursos, ayudan a establecer una ruta clara de trabajo, alinear los esfuerzos con los objetivos organizacionales y mejorar la capacidad de respuesta ante imprevistos. Por tanto, elegir una metodología adecuada reduce la posibilidad de errores, establece criterios de éxito y facilita la toma de decisiones informadas, garantizando que el proyecto pueda avanzar de manera controlada y predecible.

    .titulo-figura.mb-2(data-aos="fade-right")
      h5 Figura 1. 
      span Características de los proyectos. 

    figure(data-aos="fade-up").mb-5
      img(src='@/assets/curso/tema1/f1.png', alt='').mb-2
      figcaption #[strong Nota]. Basada Cerezuela, B. & Ollé, C. (2018). Gestión de proyectos paso a paso: ( ed.) 

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Metodología del marco lógico

    .cont_1_1
      p(data-aos="fade-right") ¿Sabía que una planificación deficiente es una de las causas principales del fracaso en los proyectos? ¿Cómo puede garantizar el éxito de su proyecto en lugar de verlo fracasar? El Sistema de Marco Lógico (SML) es una herramienta sumamente eficaz para la planificación de proyectos.
      p.fw-bold(data-aos="fade-left") Teniendo en cuenta a Córdoba Padilla, M. (2011). Las principales características del marco lógico son:

      div.row.justify-content-center.align-items-stretch
        div.col-lg-4.mb-4(data-aos="zoom-in-up")
          div.bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(
              src="@/assets/curso/tema1/5.svg"
              alt=""
              style="width: 90px"
            )
            p.mb-0.text-center Este método permite formular proyectos de acción centrados en los grupos de interés y los problemas a resolver, orientados hacia objetivos de cambio.
        
        div.col-lg-4.mb-4(data-aos="zoom-in-up")
          div.bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(
              src="@/assets/curso/tema1/6.svg"
              alt=""
              style="width: 90px"
            )
            p.mb-0.text-center En un proyecto, los objetivos representan el elemento central, ya que reflejan el impacto deseado en las personas beneficiarias, más allá de las actividades específicas a realizar.
        
        div.col-lg-4.mb-4(data-aos="zoom-in-up")
          div.bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(
              src="@/assets/curso/tema1/7.svg"
              alt=""
              style="width: 90px"
            )
            p.mb-0.text-center Esta herramienta organiza los elementos esenciales de un proyecto, resaltando las relaciones lógicas entre los recursos disponibles, las actividades planificadas y los resultados esperados.

    p(data-aos="fade-right") El Sistema de Marco Lógico (SML) es una herramienta orientada a resultados que facilita la conceptualización, diseño, implementación, seguimiento y evaluación de proyectos. Su objetivo es estructurar el proceso de planificación y comunicar información clave del proyecto de manera clara y accesible para todos los involucrados. 

    .row.mt-4.mb-4(data-aos="fade-up")
      .col-lg-auto.d-none.d-lg-block.pe-lg-0
        figure
          img(src="@/assets/curso/tema1/8.png")
      .col-lg.ps-lg-0
        .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#FEE3D8;")
          p.mb-0 El marco lógico es útil en todas las fases de preparación del proyecto, desde la programación e identificación hasta la presentación ante comités, ejecución y evaluación, brindando así una estructura ordenada y efectiva a cada etapa del proceso.
    
    p(data-aos="fade-right") El método de Marco Lógico fue desarrollado originalmente para abordar tres problemas comunes en los proyectos: falta de precisión en la planificación, múltiples objetivos sin una clara relación con las actividades del proyecto, y la ausencia de una visión clara del éxito, lo cual dificulta la evaluación objetiva. Este método aborda estos desafíos y ofrece ventajas sobre enfoques menos estructurados, como:

    .cont_1_2.mt-5
      .row
        .col-lg-12(data-aos="zoom-in")
          SlyderF(columnas="col-lg-6 col-xl-4 p-4 pt-0")
            .custom-image-card
              img.custom-image-card__image.text-center(src="@/assets/curso/tema1/11.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center Proporcionar una terminología uniforme que facilita la comunicación y reduce la ambigüedad.
            .custom-image-card
              img.custom-image-card__image.text-center(src="@/assets/curso/tema1/12.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center Ofrecer un formato para definir de manera precisa los objetivos, metas y riesgos del proyecto, que puede ser compartido entre financiadores, prestatarios y ejecutores.
            .custom-image-card
              img.custom-image-card__image.text-center(src="@/assets/curso/tema1/13.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center Proporcionar un esquema analítico común que todos los involucrados pueden utilizar para el diseño y reporte del proyecto.
            .custom-image-card
              img.custom-image-card__image.text-center(src="@/assets/curso/tema1/14.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center Centrar el trabajo técnico en aspectos críticos y reducir la extensión de documentos de proyecto.
            .custom-image-card
              img.custom-image-card__image.text-center(src="@/assets/curso/tema1/15.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center Facilitar el monitoreo y evaluación del proyecto al suministrar la información necesaria.
            .custom-image-card
              img.custom-image-card__image.text-center(src="@/assets/curso/tema1/16.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center Resumir en un solo cuadro la información clave del proyecto, mejorando su comprensión integral.
            .custom-image-card
              img.custom-image-card__image.text-center(src="@/assets/curso/tema1/17.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center Organizar de manera lógica el plan de ejecución, facilitando la planificación y estructura del proyecto.
    
    p.mt-4(data-aos="fade-right") La matriz del marco lógico es una herramienta fundamental para planificar, ejecutar y evaluar proyectos de desarrollo. Este enfoque permite estructurar y visualizar de manera clara los objetivos, actividades, indicadores y supuestos necesarios para el éxito del proyecto.

    TabsC.color-acento-contenido.mt-4
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Objetivos" :icon="require('@/assets/curso/tema1/51.svg')" )
        .row
          .col-md-6.col-lg-5.col-xl-4.mb-4.mb-md-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/18.png', alt='')
          .col-md-6.col-lg-7.col-xl-8
            h4 Objetivos
            p Establecen los fines, propósitos y resultados esperados del proyecto.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Actividades" :icon="require('@/assets/curso/tema1/51.svg')" )
        .row
          .col-md-6.col-lg-5.col-xl-4.mb-4.mb-md-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/19.png', alt='')
          .col-md-6.col-lg-7.col-xl-8
            h4 Actividades
            p Detallan las acciones específicas requeridas para lograr los objetivos definidos.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Indicadores" :icon="require('@/assets/curso/tema1/51.svg')" )
        .row
          .col-md-6.col-lg-5.col-xl-4.mb-4.mb-md-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/20.png', alt='')
          .col-md-6.col-lg-7.col-xl-8
            h4 Indicadores
            p Miden el éxito de los objetivos y resultados alcanzados.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Supuestos" :icon="require('@/assets/curso/tema1/51.svg')" )
        .row
          .col-md-6.col-lg-5.col-xl-4.mb-4.mb-md-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/21.png', alt='')
          .col-md-6.col-lg-7.col-xl-8
            h4 Supuestos
            p Identifican factores externos necesarios para el éxito del proyecto.
    
    h3 Componentes principales de la matriz del marco lógico

    .row.align-items-center.mb-5
      .col-lg-8
        p A continuación, se describen los pasos clave para completar la matriz, junto con sus elementos principales:
        LineaTiempoD.color-secundario.large
          p(numero="1" titulo="Fin") Describe el impacto general esperado a largo plazo. Responde a la pregunta: "¿Cuál es el resultado final que se desea alcanzar?".
          p(numero="2" titulo="Propósito") Define el efecto inmediato que el proyecto busca lograr. Responde a: "¿Qué se espera lograr a corto plazo?".
          p(numero="3" titulo="Resultados o productos") Establece los entregables concretos del proyecto. Responde a: "¿Qué se va a producir?".
          p(numero="4" titulo="Actividades") Detalla las acciones específicas necesarias para alcanzar los resultados. Responde a: "¿Qué se va a hacer?".
          p(numero="5" titulo="Indicadores") Proporcionan las métricas para evaluar el éxito de cada objetivo. Responde a: "¿Cómo se medirá el logro?".
          p(numero="6" titulo="Supuestos") Identifican las condiciones externas necesarias para el éxito del proyecto. Responde a: "¿Qué factores deben cumplirse?".
      .col-lg-4.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema1/22.svg", alt="").mt-4.mt-lg-0

    h3 Diligenciamiento de la matriz del marco lógico
    p La matriz se organiza en cuatro columnas, cada una con un propósito específico que facilita la gestión y evaluación del proyecto:

    .row.my-4
      .col-lg-6.col-md-6.mb-3(data-aos="zoom-in")
        .bg-color-1.p-4(style="background-color:#D8F5F5;border-radius:15px;box-shadow:0px 4px 8px rgba(0,0,0,.11);")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/23.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.fw-bold Objetivos
              p.mb-0 Fin, propósito y resultados específicos del proyecto.
      .col-lg-6.col-md-6.mb-3(data-aos="zoom-in")
        .bg-color-1.p-4(style="background-color:#FEF0EA;border-radius:15px;box-shadow:0px 4px 8px rgba(0,0,0,.11);")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/24.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.fw-bold Actividades
              p.mb-0 Acciones necesarias para alcanzar los objetivos establecidos.
      .col-lg-6.col-md-6.mb-3(data-aos="zoom-in")
        .bg-color-1.p-4(style="background-color:#FEF0EA;border-radius:15px;box-shadow:0px 4px 8px rgba(0,0,0,.11);")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/25.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.fw-bold Indicadores
              p.mb-0 Medidas cuantitativas o cualitativas que reflejan el progreso y el éxito.
      .col-lg-6.col-md-6.mb-3(data-aos="zoom-in")
        .bg-color-1.p-4(style="background-color:#D8F5F5;border-radius:15px;box-shadow:0px 4px 8px rgba(0,0,0,.11);")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/26.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.fw-bold Supuestos
              p.mb-0 Factores externos que podrían afectar el desarrollo del proyecto.
    
    p La matriz del marco lógico asegura la alineación entre los objetivos, actividades e indicadores, lo que facilita tanto la ejecución como el monitoreo del proyecto. Una revisión constante de cada componente permite mantener coherencia y adaptarse a condiciones cambiantes durante el ciclo de vida del proyecto.

    .titulo-figura.mb-2.mt-5(data-aos="fade-right")
      h5 Tabla 1.  
      span Ejemplo: Matriz marco lógico para un proyecto social
    .tabla-a.color-acento-botones.mb-5.mt-4
      table
        thead(style="border:0;")
          tr
            th.text-center(style="background-color:#82E0E0 !important;") Objetivos
            th.text-center(style="background-color:#82E0E0 !important;") Actividades
            th.text-center(style="background-color:#82E0E0 !important;") Indicadores
            th.text-center(style="background-color:#82E0E0 !important;") Supuestos
        tbody.text-center
          tr(style="background-color:#F3F3F3;")
            td(style="background-color:#E5F8F8;") Fin: Mejorar la calidad de vida de la comunidad
            td Capacitar a 100 personas en habilidades técnicas.
            td Número de personas capacitadas.
            td La comunidad está dispuesta a participar.
          tr(style="background-color:#fff;")
            td(style="background-color:#E5F8F8;") Propósito: Incrementar la empleabilidad
            td Realizar talleres prácticos de empleo.
            td Porcentaje de personas empleadas.
            td Existen oportunidades laborales disponibles.
          tr(style="background-color:#F3F3F3;")
            td(style="background-color:#E5F8F8;") Resultados: Habilidades adquiridas
            td Proveer materiales y recursos para talleres.
            td Evaluación de satisfacción del taller.
            td Los materiales llegan a tiempo.
    
    .cont_1_3 
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          .bg-color-white.shadow-soft.py-4.px-lg-5
            .row.justify-content-around.align-items-center
              .col-md-auto
                img(src="@/assets/template/bg-icono-pdf.svg", style="width: 90px;")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1 Marco lógico
                    p Colypro. (2022, 13 julio). ¿El marco lógico y su utilidad en la evaluación?
                  .col-sm-auto
                    a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/K2yCrokrBv4?si=hX41jJiJ_sDKreHu" target="_blank")
                      span Descargar
                      i.fas.fa-arrow-right


    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Metodología PMI
    
      .row.align-items-center.mb-5
        .col-lg-8(data-aos="fade-right")
          .p-4(style="background-color:#E5F8F8;")
            p.mb-0 El estándar de gestión de proyectos promovido por el Project Management Institute (PMI) es reconocido a nivel internacional y aplicable en múltiples sectores. Proporciona una guía con prácticas recomendadas que pueden ajustarse según los requerimientos específicos de cada proyecto. En su quinta edición (PMI, 2013), estas prácticas están organizadas en cinco grupos de procesos básicos, diez áreas de conocimiento y cuarenta y siete procesos, los cuales serán explicados con mayor profundidad más adelante.
        .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema1/29.png", alt="").mt-4.mt-lg-0
    
    .p-4.mb-5(style="background-color:#EAF2FB;")
      .row.justify-content-center.align-items-center.my-5
        .col-lg-10
          ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/info1.png', alt='', style="max-width: 585px;").mx-auto
              .bg-color-6.p-3(x="27.5%" y="20%" numero="5")
                h5 Cierre
                p Finalización formal del proyecto, evaluación de resultados y transferencia de entregables.
              .bg-color-6.p-3(x="70%" y="21%" numero="1")
                h5 Inicio
                p Definición del proyecto y aprobación inicial.
              .bg-color-6.p-3(x="82%" y="57%" numero="2")
                h5 Planificación
                p Diseño de un plan detallado que incluye los objetivos, alcance, cronograma y recursos necesarios.
              .bg-color-6.p-3(x="20%" y="64%" numero="4")
                h5 Monitoreo y Control
                p Supervisión continua del avance del proyecto para asegurar que se mantenga dentro del alcance, el presupuesto y el tiempo establecidos.
              .bg-color-6.p-3(x="43%" y="88%" numero="3")
                h5 Ejecución
                p Implementación del plan, desarrollo de entregables y administración de los recursos.

    h3 Áreas de conocimiento en la gestión de proyectos
    p A continuación, se presentan las principales áreas de conocimiento necesarias para una gestión de proyectos efectiva. Estas áreas abarcan todos los aspectos críticos, desde la planificación inicial hasta la ejecución y el cierre del proyecto.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              h5 Gestión de integración
              p Garantiza la cohesión entre los elementos del proyecto, alineándolos con los objetivos organizacionales para asegurar su éxito global.
            .col-lg-5.col-md-8.m-auto
              figure
                img(src="@/assets/curso/tema1/32.png")
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              h5 Gestión del alcance
              p Define y controla el alcance del proyecto, previniendo desviaciones y asegurando que se cumplan los entregables establecidos.
            .col-lg-5.col-md-8.m-auto
              figure
                img(src="@/assets/curso/tema1/33.png")
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              h5 Gestión del cronograma
              p Implica la planificación, estimación y control del tiempo necesario para ejecutar el proyecto dentro del marco temporal definido.
            .col-lg-5.col-md-8.m-auto
              figure
                img(src="@/assets/curso/tema1/34.png")
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              h5 Gestión de costos
              p Estima y controla los costos asociados al proyecto, garantizando que se mantenga dentro del presupuesto asignado.
            .col-lg-5.col-md-8.m-auto
              figure
                img(src="@/assets/curso/tema1/35.png")
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              h5 Gestión de calidad
              p Se enfoca en cumplir con los estándares de calidad establecidos para los entregables del proyecto, asegurando la satisfacción de los interesados.
            .col-lg-5.col-md-8.m-auto
              figure
                img(src="@/assets/curso/tema1/36.png")
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              h5 Gestión de recursos humanos
              p Organiza, coordina y desarrolla el equipo de trabajo, asegurando que cada miembro aporte al éxito del proyecto.
            .col-lg-5.col-md-8.m-auto
              figure
                img(src="@/assets/curso/tema1/37.png")
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              h5 Gestión de comunicaciones
              p Asegura la efectiva comunicación entre todos los involucrados, facilitando el intercambio de información relevante durante el proyecto.
            .col-lg-5.col-md-8.m-auto
              figure
                img(src="@/assets/curso/tema1/38.png")
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              h5 Gestión de riesgos
              p Identifica, analiza y desarrolla respuestas ante los riesgos potenciales que podrían afectar los objetivos del proyecto.
            .col-lg-5.col-md-8.m-auto
              figure
                img(src="@/assets/curso/tema1/39.png")
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              h5 Gestión de adquisiciones
              p Coordina y controla la adquisición de recursos externos, incluidas las subcontrataciones necesarias para el desarrollo del proyecto.
            .col-lg-5.col-md-8.m-auto
              figure
                img(src="@/assets/curso/tema1/40.png")
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              h5 Gestión de stakeholders
              p Identifica a los interesados clave del proyecto y gestiona sus expectativas para garantizar su compromiso y alineación con los objetivos.
            .col-lg-5.col-md-8.m-auto
              figure
                img(src="@/assets/curso/tema1/41.png")

    p(data-aos="fade-up").mb-5 Estas áreas funcionan de manera interrelacionada, asegurando que cada aspecto del proyecto se aborde de manera integral, lo que facilita su éxito desde la concepción hasta su culminación.

    .bg-full-width.bg-color-4.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/42.png', alt='')
          .col-lg-7
            h2.mb-4(data-aos="flip-up") Metodologías ágiles y análisis de viabilidad
            p.mb-4(data-aos="fade-right") En el documento Metodologías ágiles y análisis de viabilidad , se presentan enfoques como Scrum, Kanban y Lean, junto con las etapas clave para evaluar proyectos en aspectos técnicos, legales, administrativos y ambientales. Se invita a utilizar estas herramientas para mejorar la planificación y sostenibilidad de los proyectos. ¡Descubre cómo pueden transformar tu gestión!
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Metodologías ágiles y análisis de viabilidad


    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] PRINCE2
    .row.mb-5
      .col-lg-5.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/45.png", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-7.order-lg-1(data-aos="fade-right")
        p PRINCE2 es un estándar ampliamente utilizado en la gestión de proyectos, especialmente en el Reino Unido. Inicialmente desarrollado para el sector público, se ha extendido a otras industrias gracias a su enfoque estructurado y adaptable. Según Cerezuela y Ollé (2018), PRINCE2 organiza la gestión de proyectos en ocho procesos clave, centrándose en la dirección estratégica y la supervisión continua, mientras asume que aspectos como la gestión de la calidad son abordados mediante metodologías complementarias.
        .bg-color-1.p-4(style="background-color:#FEF8E7;").mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/44.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Procesos de PRINCE2
              p.mb-0 Los procesos de PRINCE2 proporcionan una guía clara y estructurada para gestionar proyectos desde su inicio hasta su finalización.

    .cont_1_4.mb-5
      .row.align-items-center
        .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema1/47.png", alt="").mt-4.mt-lg-0
        .col-lg-8(data-aos="fade-left")
          AcordionA(tipo="b")
            .div(titulo="Inicio del proyecto")
              p Verifica la viabilidad del proyecto y establece elementos esenciales como el equipo y el marco de trabajo inicial.
            .div(titulo="Dirección del proyecto")
              p Asegura la supervisión estratégica, alineando el proyecto con los objetivos organizacionales.
            .div(titulo="Inicio de la etapa del proyecto")
              p Detalla la planificación de cada etapa específica, revisando objetivos y asignación de recursos.
    
      .row.align-items-center.mt-4
        .col-lg-8(data-aos="fade-right")
          AcordionA(tipo="b")
            .div(titulo="Control de la etapa")
              p Gestiona la ejecución diaria de tareas, permitiendo ajustes y supervisión del progreso.
            .div(titulo="Gestión de la entrega de productos")
              p Supervisa la producción y entrega de los productos, asegurando su cumplimiento con los estándares requeridos.
            .div(titulo="Gestión de los límites de la etapa")
              p Evalúa cada etapa para decidir si el proyecto debe continuar o finalizar.
            .div(titulo="Cierre del proyecto")
              p Formaliza la finalización del proyecto, evaluando objetivos y entregando productos al cliente.
        .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema1/48.png", alt="").mt-4.mt-lg-0

    h3 Características principales de PRINCE2
    p Esta metodología destaca por varios atributos que la hacen altamente efectiva en diversos contextos:

    .bg-color-4.p-4.p-xl-5
      .row
        .col-lg-auto.d-none.d-lg-block.pe-lg-5(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema1/49.svg")
        .col-lg(data-aos="fade-left")
          ol.lista-ol--cuadro.mb-0
            li 
              .lista-ol--cuadro__vineta
                span 1
              span #[strong Adaptabilidad:] puede ajustarse a proyectos de diferentes tamaños y sectores.
            li 
              .lista-ol--cuadro__vineta
                span 2
              span #[strong Enfoque en la mitigación de riesgos:] identifica y anticipa problemas potenciales para reducir su impacto.
            li 
              .lista-ol--cuadro__vineta
                span 3
              span #[strong Roles y responsabilidades claramente definidos:] asegura transparencia y claridad en la comunicación dentro del equipo de trabajo.
            li 
              .lista-ol--cuadro__vineta
                span 4
              span #[strong Revisión continua de la viabilidad del negocio:] verifica que el proyecto sea rentable y aporte valor claro a la organización.
            li 
              .lista-ol--cuadro__vineta
                span 5
              span #[strong Ausencia de procesos de calidad:] asume que la organización ya cuenta con sistemas de calidad integrados.
    
    .bg-color-1.p-4.mt-4(data-aos="fade-left" style="background-color:#FEF0EA;").mb-5
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/tema1/50.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 PRINCE2 es una herramienta poderosa para la gestión estructurada de proyectos, proporcionando claridad y control en todas las etapas del proceso, y asegurando que los proyectos sean viables y estén alineados con los objetivos estratégicos de la organización.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/116314" target="_blank" rel="noopener noreferrer") Cerezuela, B. & Ollé, C. (2018). Gestión de proyectos paso a paso: ( ed.). Editorial UOC.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/69169" target="_blank" rel="noopener noreferrer") Córdoba Padilla, M. (2011). Formulación y evaluación de proyectos: ( ed.). Ecoe Ediciones.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/250971" target="_blank" rel="noopener noreferrer") Malagón Bariñas, J. (2019). Modelos, metodologías y sistemas de gestión de proyectos: (1 ed.). Editorial Universidad EAN.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/116949" target="_blank" rel="noopener noreferrer") Rodríguez Aranday, F. (2018). Formulación y evaluación de proyectos de inversión: una propuesta metodológica: ( ed.). Instituto Mexicano de Contadores Públicos.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/57720?page=10" target="_blank" rel="noopener noreferrer") Bataller, A. (2016). La gestión de proyectos: ( ed.). Editorial UOC.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/39414?page=1" target="_blank" rel="noopener noreferrer") Torres Hernández, Z. (2014). Administración de proyectos: ( ed.). Grupo Editorial Patria.

            p.d-flex.mb-2
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'20px'}")
              a(href="https://youtu.be/K2yCrokrBv4?si=hX41jJiJ_sDKreHu" target="_blank" rel="noopener noreferrer") Colypro. (2022, 13 julio). ¿El marco lógico y su utilidad en la evaluación? [Video].

            p.d-flex.mb-2
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'20px'}")
              a(href="https://youtu.be/OAzL1YMOcnM?si=6SCDVXl8EnGmeMbK" target="_blank" rel="noopener noreferrer") Oscar Caita (23 de marzo 2023). ¿Cómo hacer un Estudio de Mercado? | Guía: Investigación de mercado en pocos pasos [Video].

            p.d-flex.mb-2
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'20px'}")
              a(href="https://youtu.be/lNiwncWOr4I?si=UyE51SaU5B0MCBql" target="_blank" rel="noopener noreferrer") Hashtag Capacitaciones (18 de septiembre de 2024). Cómo crear un diagrama de Gantt en Excel paso a paso [Video].

            p.d-flex.mb-2
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'20px'}")
              a(href="https://youtu.be/H3QMrOU9dT8?si=2cR1_ww8gal8G-a12" target="_blank" rel="noopener noreferrer") OpenWebinars (4 de octubre 2020) Curso de gestión de proyectos basados en PRINCE2 [Video].

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.opp.gub.uy/sites/default/files/documentos/2020-08/guia_snip_12.08.20.pdf" target="_blank" rel="noopener noreferrer") PNUD. (2015). Guía de formulación de proyectos. Programa de las Naciones Unidas para el Desarrollo.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.researchgate.net/publication/273103852_El_estudio_de_mercado_como_herramienta_de_gestion_empresarial" target="_blank" rel="noopener noreferrer") Díaz, A. (2014). El estudio de mercado como herramienta de gestión empresarial. Universidad de La Habana.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.ucipfg.com/Repositorio/MGTS/MGTS14/MGTSV-04/semana4/4Guia_Factibilidad_Proyectos_Ecoturisticos_CAPAS.pdf" target="_blank" rel="noopener noreferrer") Luna, R., & Chaves, D. (2001). Guía para elaborar estudios de factibilidad de proyectos ecoturísticos. PROARCA/CAPAS.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/pdf/1939/193955500004.pdf" target="_blank" rel="noopener noreferrer") Oussouboure, G., & Delgado Victore, R. (2020). La asignación de recursos en la gestión de proyectos orientada a la metodología BIM. Revista de Arquitectura e Ingeniería, 10(1), 1-11. E-ISSN: 1990-8830.
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
