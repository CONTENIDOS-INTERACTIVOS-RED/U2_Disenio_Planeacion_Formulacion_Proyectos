<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row
      .col-xl(data-aos="fade-right")
        p La planeación estratégica de proyectos es clave para organizar, ejecutar y supervisar iniciativas de manera efectiva. A través de metodologías estructuradas, se establecen objetivos claros, se optimizan recursos y se minimizan riesgos, asegurando un desarrollo ordenado desde el inicio hasta el cierre.
        .p-4(style="background-color:#FED6C4;")
          p.mb-0 Metodologías como el marco lógico, el estándar PMI y PRINCE2 facilitan la gestión estratégica de proyectos. Estas herramientas permiten estructurar actividades, definir indicadores y anticipar desafíos, adaptándose a proyectos de diferentes dimensiones y sectores.
      .col-xl-auto.d-none.d-xl-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/intro/1.svg")
    p.mt-4(data-aos="fade-up") Además, el análisis de mercado y la gestión eficiente de recursos complementan la planeación estratégica. Estos elementos aseguran la viabilidad del proyecto y su alineación con los objetivos organizacionales, maximizando las oportunidades de éxito.
  

</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
