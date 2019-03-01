import Vue from 'vue'
import Router from 'vue-router'
import AdminLayout from '@/components/AdminLayout'

Vue.use(Router)

const routes = [
  {
    path: '/auth/login',
    name: 'Login',
    component: () => import('../views/Auth/Login.vue'),
    meta: {
      title: '登录',
      rules: ['loginRequired']
    }
  },
  {
    path: '/',
    name: 'home',
    components: {
      layout: AdminLayout,
      content: () => import('@/views/Home.vue')
    },
    meta: {
      title: '首页',
      rules: ['loginRequired']
    }
  },
]

// 权限限制规则
const rules = {
  loginRequired () {
    return true
  }
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    console.log(to)
    next(`/404`)
  } else {
    next()
  }

  if (!to.meta.rules) return next()

  const middlewares = to.meta.rules.map(item => rules[item])

  for (let i = 0; i < middlewares.length; i += 1) {
    const result = middlewares[i](to)

    if (result !== true) {
      return next(`/403?message=${result}`)
    }
  }
  return next()
})

router.afterEach(to => {
  document.title = to.meta.title || 'H.Z 的博客后台'
})

export default router
