<template lang="jade">
  div#lineDraw
    div(v-bind:style="contentStyle" v-bind:class="classObj")
      div(v-for="(item, index) of line.items", style="float: left;")
            ContentDraw(:contentItem="item")
</template>

<script>
import ContentDraw from './ContentDraw'

export default {
  props: ['line'],
  components: {ContentDraw},
  data () {
    return {
      contentWidth: '',
      contentHeigth: '',
      colorOption: [
        'teal',
        'teal-1',
        'teal-2',
        'teal-3',
        'teal-4',
        'teal-5',
        'teal-6',
        'teal-7',
        'teal-8',
        'teal-9',
        'teal-10',
        'teal-11',
        'teal-12',
        'teal-13',
        'teal-14',
        'green',
        'green-1',
        'green-2',
        'green-3',
        'green-4',
        'green-5',
        'green-6',
        'green-7',
        'green-8',
        'green-9',
        'green-10',
        'green-11',
        'green-12',
        'green-13',
        'green-14'
      ],
      classObj: {}
    }
  },
  watch: {
    line: function () {
      this.updateData()
    }
  },
  methods: {
    updateData () {
      if (typeof (this.line) !== 'undefined') {
        this.line = this.line
        this.$nextTick(() => {
          this.contentWidth = this.line.faixaCorte._width + 'px'
          this.contentHeigth = this.line.faixaCorte._length + 'px'
        })
      }
    }
  },
  computed: {
    contentStyle: function () {
      this.updateData()
      let i = Math.floor(Math.random() * (this.colorOption.length - 0))
      let color = 'bg-' + this.colorOption[i]
      this.classObj[color] = true
      return {
        width: this.contentWidth,
        height: this.contentHeigth,
        float: 'left',
        backgroundColor: color
      }
    }
  }
}
</script>

<style>
</style>
