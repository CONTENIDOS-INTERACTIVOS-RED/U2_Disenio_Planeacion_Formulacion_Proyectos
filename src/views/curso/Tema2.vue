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
