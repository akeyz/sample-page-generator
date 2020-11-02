import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routes: [
      {
        name: '首页',
        path: '/',
        component: 'home'
      },
      {
        name: '内容相关',
        path: '/content',
        children: [
          {
            name: '列表',
            path: 'list',
            component: 'content/list'
          },
          {
            name: '详情',
            path: 'detail',
            component: 'content/detail'
          },
          {
            name: '新建',
            path: 'new',
            component: 'content/new'
          },
          {
            name: '编辑',
            path: 'edit',
            component: 'content/edit'
          }
        ]
      },
      {
        name: '图表相关',
        path: '/charts',
        children: [
          {
            name: '可配置图表',
            path: 'config',
            component: 'charts/config'
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
