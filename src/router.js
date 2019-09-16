import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'
import Layout from './components/Layout.vue'
import Login from './components/Login.vue'
import Tracking from './views/Tracking.vue'
import Status from './views/Status.vue'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      title: 'Home',
      meta: {
        requiresAuth: true
      },
      component: Layout, // base layout
      children: [
        {
          path: 'tracking',
          name: 'tracking',
          component: Tracking
        },
        {
          path: 'status',
          name: 'status',
          component: Status
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
