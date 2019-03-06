<template>
  <div class="Articles">
    <div class="add-wrapper">
      <router-link to="/article/add">
        <Button type="primary"><Icon type="md-add"></Icon>&nbsp;新增文章</Button>
      </router-link>
    </div>

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
    const that = this

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
        },
        {
          title: '操作',
          align: 'center',
          render (h, { row }) {
            return (
              <div>
                <i-button type="error" size="small" onClick={() => {
                  that.deleteArticle(row.id)
                }}>删除</i-button>
                <router-link to={`/article/${row.id}`}>
                  <i-button style="margin-left: 5px" type="primary" size="small">编辑</i-button>
                </router-link>
              </div>
            )
          }
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
    },
    deleteArticle (id) {
      aticleServices.deleteArticle({ id }).then(() => {
        this.$Message.success('删除成功~')
        this.getArticle()
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
<style lang="scss" scoped>

</style>
