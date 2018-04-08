import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@c/login')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@c/home'),
      children: [
        {
          path: '/focus',
          component: () => import('@c/focus')
        },
        {
          path: '/homeDetail',
          component: () => import('@c/homeDetail')
        },
        {
          path: '/sort',
          component: () => import('@c/sort')
        },
        {
          path: '/articles',
          component: () => import('@c/articles')
        }
      ]
    }
  ]
})
