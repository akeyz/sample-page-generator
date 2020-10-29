import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routes: [
      {
        name: '列表',
        path: '/list',
        component: 'List'
      },
      {
        name: '详情',
        path: '/detail',
        component: 'Detail'
      },
      {
        name: '新建',
        path: '/new',
        component: 'New'
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
