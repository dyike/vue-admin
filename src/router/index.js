import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: resolve => require(['../components/page/Login.vue'], resolve)
    },
    {
      path: '/admin',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      children: [
        {
          path: '/about',
          component: resolve => require(['../components/page/About.vue'], resolve)
        },
        {
          path: '/baseform',
          component: resolve => require(['../components/page/BaseForm.vue'], resolve)
        },
        {
          path: '/list',
          component: resolve => require(['../components/page/List.vue'], resolve)
        },
        {
          path: '/list/edit',
          component: resolve => require(['../components/page/Edit.vue'], resolve)
        },
        {
          path: '/chart/1',
          component: resolve => require(['../components/page/Charts1.vue'], resolve)
        }

      ]
    }
  ]
})
