import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import store from '@/store/index'

import Layout from '@/layout/index'

let routes = []

store.state.routes.forEach(item => {
  if (item.children && Array.isArray(item.children) && item.children.length > 0) {
    let router = {
      path: item.path,
      redirect: item.path + '/' + item.children[0].path,
      component: Layout,
      children: []
    };

    item.children.forEach(child => {
      router.children.push({
        path: child.path,
        name: child.name,
        component: (resolve) => require([`@/views/${child.component}/index.vue`], resolve)
      })
    });

    routes.push(router);
  } else {
    routes.push({
      path: item.path,
      name: item.name,
      component: (resolve) => require([`@/views/${item.component}/index.vue`], resolve)
    });
  }
})

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
