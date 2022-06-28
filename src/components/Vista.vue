<template>

  <section class="src-components-vista">
     <div v-if="ultimoProd  !=''" :style="{ background:colorDeFondo, color: colorDeTexto }">
      <p>ULTIMO PRODUCTO CARGADO: {{ultimoProd | pasarAMayuscula }}</p>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-vista',
    props: ['ultimoProd'],
    mounted () {

    },
    data () {
      return {
        colorDeFondo:'gray',
        colorDeTexto:'white'
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-vista {

  }
</style>
