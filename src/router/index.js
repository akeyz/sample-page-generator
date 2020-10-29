import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import store from '@/store/index'

let routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  }
]

store.state.routes.forEach(item => {
  routes.push({
    path: item.path,
    name: item.name,
    component: (resolve) => require([`@/views/${item.component}/index.vue`], resolve)
  });
})

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
