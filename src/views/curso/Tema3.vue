<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Estudio de mercado'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden

    .row.mt-4.mb-4(data-aos="fade-up")
      .col-lg-auto.d-none.d-lg-block.pe-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png")
      .col-lg.ps-lg-0
        .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#FEF0EA;")
          p.mb-0 El estudio de mercados se refiere al uso de diversas técnicas para recopilar información sobre el entorno en el que se comercializa un producto o servicio. Su propósito es identificar la oferta y demanda, la población objetivo, las condiciones de venta, el precio, entre otros factores clave. En la siguiente figura se presentan los pasos para llevar a cabo un estudio de mercado de manera efectiva.

    .mb-5
      .titulo-figura.mb-2(data-aos="fade-right")
        h5 Figura 3. 
        span Estudio de mercado
      .bg-color-3.p-4.p-xl-5.mt-4
        .col-lg-10.m-auto
          figure(data-aos="fade-up")
            img(src='@/assets/curso/tema3/2.svg', alt='').mb-2
      figcaption.mt-3 #[strong Nota]. Basada Córdoba Padilla, M. (2011).  Elaboración propia (2024)

    Separador 

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_1 3.1 Descripción o presentación del producto o servicio

    p(data-aos="fade-right") La descripción del producto o servicio en un plan de negocios o propuesta de proyecto es clave para transmitir su valor y singularidad. Este proceso detalla sus características, funcionalidades, beneficios y aspectos técnicos, destacando lo que lo diferencia en el mercado. Es esencial responder preguntas como:

    .col-lg-10.m-auto.mt-4.mb-4
      .bg-color-2.p-4.p-xl-5(style="background-color:#FEF0EA;")
        .row.col-lg-10.m-auto
          .col-lg(data-aos="fade-right")
            ol.lista-ol--cuadro.mb-0
              li 
                .lista-ol--cuadro__vineta
                  span 1
                span ¿Qué necesidades satisface?
              li 
                .lista-ol--cuadro__vineta
                  span 2
                span ¿Qué problemas resuelve?
              li 
                .lista-ol--cuadro__vineta
                  span 3
                span ¿Cuáles son sus ventajas competitivas frente a otros productos o servicios en el mercado?
          .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
            figure
              img(src="@/assets/curso/tema3/3.svg")

    p(data-aos="fade-right") Además, la descripción debe incluir información sobre materiales, tecnologías empleadas, estándares de calidad y certificaciones. Una presentación completa y clara facilita el posicionamiento y aceptación del producto o servicio en el mercado.

    Separador 

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_2 3.2 Análisis de la demanda

    p(data-aos="fade-right") El análisis de la demanda permite entender cuántos bienes los consumidores estarían dispuestos a adquirir a determinado precio. La demanda depende de varios factores, entre ellos:

    .cont_1_2.mt-5
      .row
        .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema3/4.png")
        .col-lg-8(data-aos="zoom-in")
          SlyderF(columnas="col-lg-6 col-xl-6 p-4 pt-0")
            .custom-image-card-2
              img.custom-image-card__image.text-center(src="@/assets/curso/tema3/5.png" alt="")
              .custom-image-card__text.p-4
                .text-center
                  h5 Necesidad del producto
                  p.mb-0 Identificación del valor que aporta al mercado.
            .custom-image-card-2
              img.custom-image-card__image.text-center(src="@/assets/curso/tema3/6.png" alt="")
              .custom-image-card__text.p-4
                .text-center
                  h5 Ingresos de la población
                  p.mb-0 Nivel de capacidad económica del público objetivo.
            .custom-image-card-2
              img.custom-image-card__image.text-center(src="@/assets/curso/tema3/7.png" alt="")
              .custom-image-card__text.p-4
                .text-center
                  h5 Precio y disponibilidad
                  p.mb-0 Comparativa con productos alternativos y competencia.
            .custom-image-card-2
              img.custom-image-card__image.text-center(src="@/assets/curso/tema3/8.png" alt="")
              .custom-image-card__text.p-4
                .text-center
                  h5 Preferencias del cliente
                  p.mb-0 Tendencias y hábitos de consumo del público objetivo.
            .custom-image-card-2
              img.custom-image-card__image.text-center(src="@/assets/curso/tema3/9.png" alt="")
              .custom-image-card__text.p-4
                .text-center
                  h5 Competencia
                  p.mb-0 Grado de rivalidad entre empresas en el mismo mercado.
    
    p(data-aos="fade-right") El equilibrio de mercado ocurre cuando la oferta y la demanda coinciden. Este balance permite determinar el precio adecuado del producto. Situaciones como un exceso de demanda frente a la oferta dan lugar a un "mercado de vendedores", mientras que lo contrario genera un "mercado de compradores".

    Separador 

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_3 3.3 Estudio de mercado

    p(data-aos="fade-right") Un estudio de mercado es una herramienta fundamental para entender la demanda y orientar un proyecto de manera estratégica. Permite obtener datos precisos sobre el público objetivo y el entorno competitivo, ayudando a evaluar la viabilidad económica del producto o servicio.

    .row.mt-4.justify-content-center.mb-3
      .col-lg.col-md-9.mb-3(data-aos="zoom-in")
        .bg-color-1.p-4.h-100(style="background-color:#D8F5F5;border-radius:15px;box-shadow:0px 4px 8px rgba(0,0,0,.11);")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.fw-bold Exploratoria
              p.mb-0 Recopila información inicial para conocer variables de interés.
      .col-lg.col-md-9.mb-3(data-aos="zoom-in")
        .bg-color-1.p-4.h-100(style="background-color:#FEF0EA;border-radius:15px;box-shadow:0px 4px 8px rgba(0,0,0,.11);")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/11.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.fw-bold Descriptiva
              p.mb-0 Presenta métricas específicas sobre las variables estudiadas.
      .col-lg.col-md-9.mb-3(data-aos="zoom-in")
        .bg-color-1.p-4.h-100(style="background-color:#FEF0EA;border-radius:15px;box-shadow:0px 4px 8px rgba(0,0,0,.11);")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.fw-bold Causal
              p.mb-0 Busca identificar relaciones de causa y efecto entre variables.

    p(data-aos="fade-right") El estudio de mercado es especialmente crucial para productos novedosos, donde las preferencias del consumidor son inciertas. Según Malhotra (2008), este proceso debe ser objetivo, sistemático y orientado a mejorar decisiones sobre problemas y oportunidades de marketing. Al aplicar este enfoque, se pueden establecer bases sólidas para el éxito comercial del proyecto.

    Separador 

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_4 3.4 Análisis de la oferta
    
    .row.mb-5
      .col-lg-4.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/14.png").mb-4.mb-lg-0
      .col-lg-8.order-lg-1(data-aos="fade-right")
        p La oferta se refiere a la cantidad de productos que los productores están dispuestos a ofrecer a los consumidores a un precio determinado. Diversos factores influyen en su variación, como la disponibilidad y el costo de insumos y materias primas, el nivel tecnológico del sector, la existencia de productos alternativos, la facilidad de entrada para nuevos competidores, la intensidad de la competencia, la cantidad de proveedores y compradores, los incentivos gubernamentales, las normativas fiscales, los planes de expansión y la ubicación de los competidores, entre otros.
        .bg-color-1.p-4.mt-4(style="background-color:#FEF8E7;").mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Michael Porter (2008), considerado el padre de la estrategia empresarial, plantea el análisis de cinco fuerzas como una herramienta fundamental para evaluar la oferta y establecer estrategias que permitan ingresar o mantenerse en un sector específico. Esta metodología se ilustra en el esquema siguiente.

    .mb-4
      .titulo-figura.mb-2(data-aos="fade-right")
        h5 Figura 4. 
        span Modelo de las 5 fuerzas de Porter
      .bg-color-3.p-4.p-xl-5.mt-4
        .col-lg-10.m-auto
          figure(data-aos="fade-up")
            img(src='@/assets/curso/tema3/15.svg', alt='').mb-2

    p(data-aos="fade-right") La oferta está determinada por diversos factores clave que conforman el modelo de las cinco fuerzas de Porter, el cual ayuda a analizar la competitividad en el mercado. Aunque todas las fuerzas son importantes, la competencia ocupa el centro del análisis por su impacto directo en la posición y desempeño de las empresas. Las cinco fuerzas competitivas son:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              h5 Competencia
              p Representa el grado de rivalidad entre las empresas del sector. Una alta competencia dificulta mantener ventajas sostenibles, ya que cualquier característica puede ser replicada y mejorada.
            .col-lg-5.col-md-8.m-auto
              figure
                img(src="@/assets/curso/tema3/16.png")
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              h5 Poder de los compradores
              p Mide la capacidad de los consumidores para influir en precios y condiciones. Cuando su poder es alto, las empresas deben competir más intensamente en términos de precio y calidad.
            .col-lg-5.col-md-8.m-auto
              figure
                img(src="@/assets/curso/tema3/17.png")
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              h5 Poder de los proveedores
              p Evalúa la influencia de los proveedores sobre los costos y la disponibilidad de insumos. Proveedores fuertes pueden imponer condiciones restrictivas en precios y acceso a recursos.
            .col-lg-5.col-md-8.m-auto
              figure
                img(src="@/assets/curso/tema3/18.png")
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              h5 Productos sustitutos
              p Indica la amenaza que representan alternativas más atractivas en precio o características, las cuales pueden desplazar a los productos actuales.
            .col-lg-5.col-md-8.m-auto
              figure
                img(src="@/assets/curso/tema3/19.png")
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              h5 Nuevos competidores
              p Analiza el impacto de nuevos actores en el mercado, quienes generan más opciones para los consumidores y aumentan la competencia, obligando a innovar y ajustar estrategias.
            .col-lg-5.col-md-8.m-auto
              figure
                img(src="@/assets/curso/tema3/20.png")
    
    p.mb-5(data-aos="fade-right") Estas fuerzas, en conjunto, configuran el entorno competitivo de una empresa, destacando la importancia de prever cambios en la oferta y adaptar estrategias para mantenerse relevante en el mercado.

    h3 Estructuras de mercado
    p El análisis de la #[strong estructura del sector] es igualmente relevante, ya que determina cómo está organizado un mercado específico. Esto incluye el número de participantes, la naturaleza de la competencia y las barreras de entrada y salida. Las principales estructuras de mercado son:

    .row.align-items-center.mb-5.mt-4
      .col-lg-4.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema3/21.svg", alt="").mt-4.mt-lg-0
      .col-lg-8
        LineaTiempoD.color-secundario.large
          p(numero="1" titulo="Competencia perfecta") Numerosas empresas ofrecen productos homogéneos sin control sobre los precios.
          p(numero="2" titulo="Monopolio") Una sola empresa domina el mercado, controlando tanto la oferta como los precios.
          p(numero="3" titulo="Competencia monopolística") Muchas empresas ofrecen productos diferenciados, teniendo cierto grado de control sobre los precios.
          p(numero="4" titulo="Oligopolio") Un pequeño número de empresas domina el mercado, con productos homogéneos o diferenciados y con barreras significativas de entrada.

    p(data-aos="fade-right") Conocer la estructura de mercado permite a las empresas anticiparse a cambios en la oferta y demanda, diseñar estrategias adecuadas y competir eficazmente en un entorno en constante transformación. Este análisis es crucial para tomar decisiones informadas y sostenibles.

    Separador 
    
    .cont_3_1.pt-5

      .titulo-segundo(data-aos="flip-up")
        h2#t_3_5 3.5 Comercialización
      
      p(data-aos="fade-right") La planificación para la comercialización de un producto o servicio requiere analizar diversos elementos clave, diseñando estrategias que permitan una entrada efectiva en el mercado y el logro de los objetivos comerciales. A continuación, se destacan las principales estrategias:

      .row.justify-content-center.align-items-center.mb-5.mt-4(data-aos="fade-up")
        .col-lg-10
          .bg-color-white.shadow-soft.py-4.px-lg-5
            .row.justify-content-around.align-items-center
              .col-md-auto
                img(src="@/assets/template/bg-icono-video.svg", style="width: 90px;")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1 ¿Cómo hacer un Estudio de Mercado?
                    p Para conocer a fondo como se realiza un estudio de mercado, los invito a ver el siguiente video. 
                  .col-sm-auto
                    a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/OAzL1YMOcnM?si=6SCDVXl8EnGmeMbK" target="_blank")
                      span Descargar
                      i.fas.fa-arrow-right

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_6 3.6 Gestión de recursos 
    
    p(data-aos="fade-right") La fase de identificación de recursos en un proyecto busca definir y organizar los elementos esenciales necesarios para su ejecución. A continuación, se detallan los principales tipos de recursos a considerar:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              h5 Recursos humanos
              p Identificación del personal requerido, considerando habilidades y competencias específicas. Roles clave incluyen ingenieros, arquitectos, trabajadores, gerentes de proyecto y especialistas.
            .col-lg-5.col-md-8.m-auto
              figure
                img(src="@/assets/curso/tema3/23.png")
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              h5 Recursos físicos
              p Activos esenciales como terrenos, edificaciones, maquinaria, herramientas y equipos necesarios para las actividades del proyecto.
            .col-lg-5.col-md-8.m-auto
              figure
                img(src="@/assets/curso/tema3/24.png")
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              h5 Recursos financieros
              p Presupuesto para materiales, contratación de personal, gastos operativos y fondos de contingencia. Una planificación adecuada asegura la sostenibilidad financiera del proyecto.
            .col-lg-5.col-md-8.m-auto
              figure
                img(src="@/assets/curso/tema3/25.png")
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              h5 Recursos materiales
              p Insumos como cemento, acero, madera o vidrio, identificando cantidades requeridas y asegurando la calidad y disponibilidad mediante proveedores confiables.
            .col-lg-5.col-md-8.m-auto
              figure
                img(src="@/assets/curso/tema3/26.png")
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-4.mb-lg-0
              h5 Recursos tecnológicos
              p Herramientas tecnológicas para facilitar la ejecución, como software de gestión de proyectos, sistemas de control de calidad y herramientas de diseño asistido por computadora.
            .col-lg-5.col-md-8.m-auto
              figure
                img(src="@/assets/curso/tema3/27.png")

    .bg-full-width.bg-color-4.pt-4
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/28.png', alt='')
          .col-lg-7
            h2.mb-4(data-aos="flip-up") Cronogramas y diagramas de Gantt
            p.mb-4(data-aos="fade-right") Se describen los beneficios y herramientas para organizar proyectos, destacando el uso del diagrama de Gantt. Este recurso visual permite planificar, asignar recursos, controlar avances y ajustar tareas en tiempo real, asegurando una gestión eficiente y el cumplimiento de plazos. 
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Cronogramas y diagramas de Gantt

    
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
