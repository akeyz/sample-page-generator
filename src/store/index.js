import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routes: [
      {
        name: '首页',
        path: '/',
        component: 'Home'
      },
      {
        name: '内容相关',
        path: '/content',
        component: 'Homw',
        children: [
          {
            name: '列表',
            path: 'list',
            component: 'List'
          },
          {
            name: '详情',
            path: 'detail',
            component: 'Detail'
          },
          {
            name: '新建',
            path: 'new',
            component: 'New'
          },
          {
            name: '编辑',
            path: 'edit',
            component: 'Edit'
          }
        ]
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
