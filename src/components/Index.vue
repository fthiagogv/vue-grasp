<template lang="jade">
  div#home.full-width
    div.row.gutter
      div.col-12
        HelperFile
      div
        FileInput(@graspReturn="graspReturn")

    div.row.gutter
      DrawGrasp(:grasp="grasp")
</template>

<script>
  import HelperFile from './HelperFile'
  import FileInput from './FileInput'
  import DrawGrasp from './DrawGrasp'
  export default {
    components: {HelperFile, FileInput, DrawGrasp},
    data () {
      return {
        grasp: ''
      }
    },
    methods: {
      graspReturn (data) {
        this.grasp = data
      }
    }
  }
</script>

<style lang="stylus">

</style>
