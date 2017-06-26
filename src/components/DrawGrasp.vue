<template lang="jade">
  div#drawGrasp.full-width
    div.row.justify-center
      div.col-xs-auto.text-center.spacing
        b Timespent: &nbsp;
        | {{ timespent }}
      div.col-xs-auto.text-center.spacing
        b Items Remaining which are not allocated: &nbsp;
        | {{ itemsRemaining }}

    div(v-bind:style="setupCSS", style="border: solid 1px red;")
      div.row.full-width(v-for="(line, index) of lines")
        div(v-for="(item, index) of line")
          ContentDraw(:contentItem="item" style="border: solid 1px black")


</template>

<script>
import ContentDraw from './ContentDraw'
export default {
  props: ['grasp'],
  name: 'DrawGrasp',
  components: {ContentDraw},
  data () {
    return {
      setup: '',
      lines: '',
      itemsRemaining: '',
      timespent: '',
      css: ''
    }
  },
  methods: {
    updateGrasp () {
      if (this.grasp !== undefined && this.grasp !== '' && this.grasp !== ' ') {
        this.$nextTick(() => {
          this.setup = this.grasp.data.setup
          this.lines = this.grasp.data.items
          this.itemsRemaining = this.grasp.data.itemsRemaining
          this.timespent = this.grasp.data.timespent
        })
      }
    }
  },
  watch: {
    grasp () {
      this.updateGrasp()
    }
  },
  computed: {
    teste: function (a) {
      return a
    },
    changeCss: function (item, idColor) {
      console.log(this.$refs.teste)
      return {
        width: '100x',
        height: '100px',
        borderRadius: 'solid 1px black'
      }
    },
    setupCSS: function (item, idColor) {
      if (this.setup !== undefined && this.setup !== '') {
        return {
          width: this.setup.widthBin + 'px',
          height: this.setup.lengthBin + 'px',
          borderRadius: 'solid 1px red'
        }
      }
    }
  }
}
</script>

<style>
.spacing {
  margin: 30px;
}
</style>
