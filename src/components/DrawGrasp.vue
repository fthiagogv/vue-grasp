<template lang="jade">
  div#drawGrasp.full-width
    div.row.justify-center
      div.col-xs-auto.text-center.spacing
        b Legends:
        | Red: Total of the Space || Green-teal colors: Slices of cuts || Brown-grey colors: objects

    div(v-bind:style="setupCSS", style="background: red;")
      div.row.full-width(v-for="(line, index) of lines")
        LineDraw(:line="line")



</template>

<script>
import LineDraw from './LineDraw'
export default {
  props: ['drawData'],
  name: 'DrawGrasp',
  components: {LineDraw},
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
    updateDraw () {
      if (this.drawData !== undefined && this.drawData !== '' && this.drawData !== ' ') {
        this.$nextTick(() => {
          this.setup = this.drawData.setup
          this.lines = this.drawData.slices
          this.itemsRemaining = this.drawData.itemsRemaining
          this.timespent = this.drawData.timespent
        })
      }
    }
  },
  watch: {
    drawData () {
      this.updateDraw()
    }
  },
  computed: {
    teste: function (a) {
      return a
    },
    changeCss: function (item, idColor) {
      // console.log(this.$refs.teste)
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
