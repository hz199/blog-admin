<template>
  <div class="Article">
    <Form :label-width="80">
      <FormItem label="文章标题">
        <Input v-model="postData.title" placeholder="请输入文章标题"></Input>
      </FormItem>
      <FormItem label="描述">
        <Input v-model="postData.describe" type="textarea" placeholder="请输入描述"></Input>
      </FormItem>
      <FormItem label="文章标签">
        <Select v-model="postData.tags" multiple>
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
import * as aticleServices from '@/services/article'

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
      this.postData.articleContent = payload.markdownValue
      this.postData.articleContentHtml = payload.htmlValue
    },
    submit () {
      aticleServices.createArticle(this.postData).then(res => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    },
    getArticle () {
      aticleServices.getArticles().then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.getArticle()
  }
}
</script>
<style lang="less" scoped>
</style>
