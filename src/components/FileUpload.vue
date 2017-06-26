<template lang="jade">
  div#FileUpload
    el-upload(
      class="upload-demo",
      action="#",
      ref="upload",
      :show-file-list="false",
      :before-upload="teste",
      :on-preview="handlePreview",
      :on-remove="handleRemove",
      :file-list="fileList"
    )
      el-button Escolha o Arquivo

</template>

<script>
export default {
  name: 'FileUpload',
  data () {
    return {
      fileList: [],
      text: ''
    }
  },
  methods: {
    handleRemove (file, fileList) {
    },
    handlePreview (file) {
      this.fileList.push(file)
    },
    teste (file) {
      var reader = new FileReader()
      reader.onload = (file, t) => {
        this.wraperRead(file.target.result)
      }

      reader.readAsText(file)
      this.$refs.upload.abort(file)
    },
    wraperRead (t) {
      this.text = t
      this.$emit('readFile', this.text)
    }
  }
}
</script>

<style>
</style>
