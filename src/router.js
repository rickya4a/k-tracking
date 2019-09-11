import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      title: 'Home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/tracking',
      name: 'tracking',
      component: () => import('./views/Tracking.vue')
    },
    {
      path: '/status',
      name: 'status',
      component: () => import('./views/Status.vue')
    }
  ]
});
