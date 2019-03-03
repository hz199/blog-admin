<template>
  <div class="Article">
    <MarkDown :autoSave="false" @on-save="markSave" theme="OneDark"></MarkDown>
  </div>
</template>
<script>
import MarkDown from 'vue-meditor'

export default {
  name: 'Article',
  components:{
    MarkDown
  },
  methods: {
    markSave (payload) {
      console.log(payload)
    }
  }
}
</script>
<style lang="less" scoped>
</style>
