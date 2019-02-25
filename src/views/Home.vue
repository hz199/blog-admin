<template>
  <div class="home">
    <Upload
      :on-success="successHandle"
      action="/api/upload">
        <Button icon="ios-cloud-upload-outline">Upload files</Button>
    </Upload>
    {{fileData}}
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      fileData: {}
    }
  },
  methods: {
    successHandle (res, file) {
      this.fileData = res.data
      console.log(res, file)
    }
  }
}
</script>
