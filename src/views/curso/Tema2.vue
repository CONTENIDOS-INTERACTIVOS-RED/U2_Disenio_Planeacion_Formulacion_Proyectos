<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Marco lógico'")
  .container.tarjeta.tarjeta--blanca.px-4.pt-4.px-md-5.pt-md-5.pb-0.overflow-hidden
    
    .row.mb-5
      .col-lg-4.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/1.png").mb-4.mb-lg-0
      .col-lg-8.order-lg-1(data-aos="fade-right")
        .p-4.mb-4(style="background-color:#FEF8E7;")
          p.mb-0 El marco lógico de un proyecto es una herramienta que organiza y simplifica el proceso de planificación y seguimiento de un proyecto. Funciona como una especie de mapa o guía que desglosa los objetivos, actividades y resultados esperados, permitiendo que todos los involucrados entiendan fácilmente qué se quiere lograr y cómo se va a medir el éxito. Básicamente, el marco lógico establece una estructura clara donde se definen los problemas que el proyecto busca resolver, los recursos que se necesitarán y los indicadores que ayudarán a evaluar los avances y logros. Es una herramienta muy útil porque mantiene a todos enfocados en los objetivos y permite evaluar el impacto del proyecto de manera objetiva.
        p Teniendo en cuenta a Córdoba Padilla, M. (2011). En el siguiente diagrama se visualiza la estructura del marco lógico de un proyecto de inversión. 

    .mb-5
      .titulo-figura.mb-2(data-aos="fade-right")
        h5 Figura 2. 
        span Marco lógico 
      .bg-color-4.p-4.p-xl-5.mt-4
        .col-lg-10.m-auto
          figure(data-aos="fade-up")
            img(src='@/assets/curso/tema2/2.svg', alt='').mb-2
      figcaption.mt-3 #[strong Nota]. Córdoba Padilla, M. (2011)

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
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

<style lang="sass"></style>
