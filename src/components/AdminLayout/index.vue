<style scoped>
  @import url('./style.css');
</style>
<template>
  <div class="layout">
    <Layout :style="{minHeight: '100vh'}">
      <!-- <Sider collapsible :collapsed-width="78" v-model="isCollapsed"> -->
      <Sider>
        <div style="height:50px;">22</div>
        <subMenu :menuitemClasses="menuitemClasses"/>
      </Sider>
      <Layout>
        <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
        <Content :style="{padding: '0 16px 16px'}">
          <Breadcrumb :style="{margin: '16px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Card style="min-height: 83vh">
            <slot/>
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import subMenu from './subMenu'
import { mapActions } from 'vuex'

export default {
  name: 'AdminLayout',
  data () {
    return {
      isCollapsed: false
    }
  },
  components: {
    subMenu
  },
  computed: {
    menuitemClasses: function() {
      return ['menu-item', this.isCollapsed ? 'collapsed-menu' : '']
    }
  },
  methods: {
    ...mapActions([
      'getUserInfo'
    ])
  },
  created () {
    this.getUserInfo({userName: 44444})
  }
}
</script>
