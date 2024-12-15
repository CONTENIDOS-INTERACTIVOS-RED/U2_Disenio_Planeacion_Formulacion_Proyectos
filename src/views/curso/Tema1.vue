<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Definición de proyecto y tipos de proyectos'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    
    .row.mb-5
      .col-lg-5.order-lg-2
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-7.order-lg-1
        p Las metodologías de planeación de proyectos son enfoques estructurados que guían la organización, ejecución y control de proyectos. Estas metodologías describen un paso a paso para planificar, definiendo objetivos, recursos, tiempos y actividades, lo que facilita el seguimiento y la ejecución del proyecto desde su inicio hasta su cierre. Cada metodología tiene principios y herramientas que ayudan a los equipos de trabajo a coordinarse, anticipar riesgos, y asegurar que los objetivos del proyecto se cumplan en tiempo y forma.
        .bg-color-1.p-4(data-aos="fade-left" style="background-color:#D7E7F8;").mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las metodologías de planeación de proyectos permiten minimizar los riesgos, mejorar la coordinación entre los equipos, y optimizar el uso de recursos, ayudan a establecer una ruta clara de trabajo, alinear los esfuerzos con los objetivos organizacionales y mejorar la capacidad de respuesta ante imprevistos. Por tanto, elegir una metodología adecuada reduce la posibilidad de errores, establece criterios de éxito y facilita la toma de decisiones informadas, garantizando que el proyecto pueda avanzar de manera controlada y predecible.

    .titulo-figura.mb-2(data-aos="fade-right")
      h5 Figura 1. 
      span Características de los proyectos. 
    figure(data-aos="fade-up")
      img(src='@/assets/curso/tema1/3.svg', alt='').mb-2
      figcaption #[strong Nota]. Basada Cerezuela, B. & Ollé, C. (2018). Gestión de proyectos paso a paso: ( ed.) 

    Separador 

    .titulo-segundo(data-aos="flip-up")
      h2#t_1_1 1.1 Metodología del marco lógico
    
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
        .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema1/10.png")
        .col-lg-8(data-aos="zoom-in")
          SlyderF(columnas="col-lg-6 col-xl-6 p-4 pt-0")
            .custom-image-card-2
              img.custom-image-card__image.text-center(src="@/assets/curso/tema1/11.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center Proporcionar una terminología uniforme que facilita la comunicación y reduce la ambigüedad.
            .custom-image-card-2
              img.custom-image-card__image.text-center(src="@/assets/curso/tema1/12.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center Ofrecer un formato para definir de manera precisa los objetivos, metas y riesgos del proyecto, que puede ser compartido entre financiadores, prestatarios y ejecutores.
            .custom-image-card-2
              img.custom-image-card__image.text-center(src="@/assets/curso/tema1/13.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center Proporcionar un esquema analítico común que todos los involucrados pueden utilizar para el diseño y reporte del proyecto.
            .custom-image-card-2
              img.custom-image-card__image.text-center(src="@/assets/curso/tema1/14.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center Centrar el trabajo técnico en aspectos críticos y reducir la extensión de documentos de proyecto.
            .custom-image-card-2
              img.custom-image-card__image.text-center(src="@/assets/curso/tema1/15.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center Facilitar el monitoreo y evaluación del proyecto al suministrar la información necesaria.
            .custom-image-card-2
              img.custom-image-card__image.text-center(src="@/assets/curso/tema1/16.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center Resumir en un solo cuadro la información clave del proyecto, mejorando su comprensión integral.
            .custom-image-card-2
              img.custom-image-card__image.text-center(src="@/assets/curso/tema1/16.png" alt="")
              .custom-image-card__text.p-4
                p.mb-0.text-center Organizar de manera lógica el plan de ejecución, facilitando la planificación y estructura del proyecto.
    
    p.mt-4(data-aos="fade-right") La matriz del marco lógico es una herramienta fundamental para planificar, ejecutar y evaluar proyectos de desarrollo. Este enfoque permite estructurar y visualizar de manera clara los objetivos, actividades, indicadores y supuestos necesarios para el éxito del proyecto.



    


    
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
