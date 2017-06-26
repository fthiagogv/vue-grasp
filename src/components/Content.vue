<template lang="jade">
  div#Content
    div(v-bind:style="contentStyle")
</template>

<script>
export default {
  props: ['contentItem'],
  name: 'Content',
  data () {
    return {
      contentWidth: '',
      contentHeigth: ''
    }
  },
  mounted () {
    // console.log('mounted')
    // console.log(this.contentItem)
    this.updateValues()
  },
  watch: {
    contentItem () {
      this.updateValues()
    }
  },
  methods: {
    updateValues () {
      if (this.contentItem !== undefined) {
        this.$nextTick(() => {
          // console.log('here')
          this.contentWidth = this.contentItem.widthBin + 'px'
          this.contentHeigth = this.contentItem.lenghtBin + 'px'
          // console.log(this.contentWidth)
        })
      }
    }
  },
  computed: {
    contentStyle: function () {
      this.updateValues()
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
