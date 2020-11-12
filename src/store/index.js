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
          },
          {
            name: '查询',
            path: 'query',
            component: 'content/query'
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
            component: 'charts/layout'
          },
          {
            name: '示例一',
            path: 'case1',
            component: 'charts/case1'
          },
          {
            name: '示例二',
            path: 'case2',
            component: 'charts/case2'
          },
          {
            name: '布局一',
            path: 'tpl1',
            component: 'charts/tpl1'
          },
          {
            name: '布局二',
            path: 'tpl2',
            component: 'charts/tpl2'
          },
          {
            name: '布局三',
            path: 'tpl3',
            component: 'charts/tpl3'
          },
          {
            name: '布局四',
            path: 'tpl4',
            component: 'charts/tpl4'
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
