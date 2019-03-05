<template>
  <div class="Articles">
    <AdminTable :tableColumns="tableColumns"
      :pageOption="articleData.pages"
      :tableData="articleData.articleList"
      @onPageChange="handelPage"
      />
  </div>
</template>
<script>
import * as aticleServices from '@/services/article'

export default {
  name: 'Articles',
  data () {
    return {
      tableColumns: [
        {
          title: '文章标题',
          key: 'title',
          align: 'center'
        },
        {
          title: '描述',
          key: 'describe',
          align: 'center'
        },
        {
          title: '标签',
          key: 'tags',
          align: 'center',
          render (h, { row }) {
            return <span>{row.tags.join(',')}</span>
          }
        },
        {
          title: '创建时间',
          key: 'createAt',
          align: 'center'
        }
      ],
      articleData: {}
    }
  },
  methods: {
    getArticle (page) {
      aticleServices.getArticles(page).then(res => {
        this.articleData = res.result
      }).catch(err => {
        console.log(err)
      })
    },
    handelPage (page) {
      this.getArticle(page)
    }
  },
  created () {
    this.getArticle()
  }
}
</script>
<style lang="scss" scoped>

</style>
