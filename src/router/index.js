import Vue from 'vue'
import Router from 'vue-router'
import AdminLayout from '@/components/AdminLayout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        layout: AdminLayout,
        content: () => import('@/views/Home.vue')
      }
    }
  ]
})
