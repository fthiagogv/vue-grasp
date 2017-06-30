<template lang="jade">
  div#results.full-width
    q-tabs(:refs="$refs", default-tab="sumary").teal.justified
      q-tab(name="sumary", icon="assessment") Sumary
      q-tab(name="draw", icon="perm_media") Illustration


    div(ref="sumary")
      table.q-table.responsive.bordered.striped.highlight.full-width
        thead
          tr
            th Number of instances
            th Minimun loss
            th Middle loss
            th Maximum loss
            th Percent of loss (Minimum)
            th Minimum time spent
            th Maximum time spent
        tbody
          tr
            td {{ amountResults }}
            td {{ tableContents.minLoss }}
            td {{ tableContents.midLoss }}
            td {{ tableContents.highLoss }}
            td {{ tableContents.lossPerc }}
            td {{ tableContents.minTime }} ms
            td {{ tableContents.maxTime }} ms
          tr
    div(ref="draw")
      q-tabs(:refs="$refs", default-tab="draw-1").teal.justified.inverted
        q-tab(name="draw-1") Result 1
        q-tab(name="draw-2") Result 2
        q-tab(name="draw-3") Result 3

      div(ref="draw-1")
        DrawGrasp(:drawData="drawResult1")
      div(ref="draw-2")
        DrawGrasp(:drawData="drawResult2")
      div(ref="draw-3")
        DrawGrasp(:drawData="drawResult3")
</template>

<script>
import DrawGrasp from './DrawGrasp'

export default {
  name: 'Results',
  components: {DrawGrasp},
  props: ['dados'],
  data () {
    return {
      resultGrasp: [],
      amountResults: 0,
      drawOption: 0,
      drawOptions: [],
      drawResult1: '',
      drawResult2: '',
      drawResult3: '',
      tableContents: {}
    }
  },
  watch: {
    dados () {
      this.updateGrasp()
    }
  },
  methods: {
    updateGrasp () {
      if (typeof (this.dados) !== 'undefined') {
        this.$nextTick(() => {
          this.resultGrasp = this.dados
          this.amountResults = this.dados.length
          this.drawResult1 = this.resultGrasp[0]
          this.drawResult2 = this.resultGrasp[1]
          this.drawResult3 = this.resultGrasp[2]
          this.updateTableContents()
        })
      }
    },
    updateTableContents () {
      var perdaSort = [this.drawResult1.perda, this.drawResult2.perda, this.drawResult3.perda].sort()
      var perdaPercSort = [this.drawResult1.perdaPerc, this.drawResult2.perdaPerc, this.drawResult3.perdaPerc].sort()
      var timeSort = [this.drawResult1.timespent, this.drawResult2.timespent, this.drawResult3.timespent].sort()
      this.tableContents['minLoss'] = perdaSort[0]
      this.tableContents['midLoss'] = perdaSort[1]
      this.tableContents['highLoss'] = perdaSort[2]
      this.tableContents['lossPerc'] = perdaPercSort[0]
      this.tableContents['minTime'] = timeSort[0]
      this.tableContents['maxTime'] = timeSort[2]
    }
  },
  mounted () {
    this.updateGrasp()
  }
}
</script>

<style>
</style>
