<template>
  <div class="Article">
    <Form :label-width="80">
      <FormItem label="文章标题">
        <Input v-model="postData.title" placeholder="请输入文章标题"></Input>
      </FormItem>
      <FormItem label="描述">
        <Input type="textarea" placeholder="请输入描述"></Input>
      </FormItem>
      <FormItem label="文章标签">
        <Select multiple>
          <Option v-for="item in tags" :value="item" :key="item">{{ item }}</Option>
        </Select>
      </FormItem>
    </Form>
    <MarkDown :autoSave="false" @on-save="markSave" theme="OneDark"></MarkDown>
    <div class="submit-wrapper clearfix">
      <div class="pull-right">
        <Button type="primary" @click="submit">提交</Button>
      </div>
    </div>
  </div>
</template>
<script>
import MarkDown from 'vue-meditor'
import tags from './tags'

export default {
  name: 'Article',
  data () {
    return {
      tags,
      postData: {}
    }
  },
  components:{
    MarkDown
  },
  methods: {
    markSave (payload) {
      console.log(payload)
    },
    submit () {

    }
  }
}
</script>
<style lang="less" scoped>
</style>
