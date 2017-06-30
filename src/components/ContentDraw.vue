<template lang="jade">
  div#Content
    div(v-bind:style="contentStyle" v-bind:class="classObject")
</template>

<script>
export default {
  props: ['contentItem'],
  name: 'ContentDraw',
  data () {
    return {
      contentWidth: '',
      contentHeigth: '',
      colorOptions: [
        'brown',
        'brown-1',
        'brown-2',
        'brown-3',
        'brown-4',
        'brown-5',
        'brown-6',
        'brown-7',
        'brown-8',
        'brown-9',
        'brown-10',
        'brown-11',
        'brown-12',
        'brown-13',
        'brown-14',
        'grey',
        'grey-1',
        'grey-2',
        'grey-3',
        'grey-4',
        'grey-5',
        'grey-6',
        'grey-7',
        'grey-8',
        'grey-9',
        'grey-10',
        'grey-11',
        'grey-12',
        'grey-13',
        'grey-14'
      ],
      classObject: {}
    }
  },
  mounted () {
    this.updateValues()
  },
  watch: {
    contentItem () {
      this.updateValues()
    }
  },
  methods: {
    updateValues () {
      if (typeof (this.contentItem) !== 'undefined') {
        // console.log(this.contentItem)
        this.$nextTick(() => {
          this.contentWidth = this.contentItem.widthBin + 'px'
          this.contentHeigth = this.contentItem.lengthBin + 'px'
        })
      }
    }
  },
  computed: {
    contentStyle: function () {
      this.updateValues()
      let i = Math.floor(Math.random() * (this.colorOptions.length - 0))
      let color = 'bg-' + this.colorOptions[i]
      this.classObject[color] = true
      return {
        width: this.contentWidth,
        height: this.contentHeigth
      }
    }
  }
}
</script>

<style>
</style>
