<template lang="jade">
  div#home.full-width
    div.toolbar.bg-teal-9
      q-toolbar-title(:padding="1")
        | A test to GRASP algorithm
      button.info(@click="$refs.basicModal.open()")
        i info_outline
        |  Struct of the test files

    q-modal(ref="basicModal", :position="position")
        HelperFile
        div.row.justify-center
          button.big(class="primary", @click="$refs.basicModal.close()") Close

    div.row.gutter
      div.col-12
        FileInput(@graspReturn="graspReturn")

    div.row.gutter
      Results(:dados="grasp")

</template>

<script>
  import HelperFile from './HelperFile'
  import FileInput from './FileInput'
  import Results from './Results'
  export default {
    components: {HelperFile, FileInput, Results},
    data () {
      return {
        grasp: '',
        position: 'right'
      }
    },
    methods: {
      graspReturn (data) {
        this.grasp = data.data
      }
    }
  }
</script>

<style lang="stylus">

</style>
