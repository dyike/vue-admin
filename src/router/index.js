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
      component: resovle => require(['../components/page/Login.vue'], resovle)
    },
    {
      path: '/admin',
      component: resovle => require(['../components/common/Home.vue'], resovle),
      children: [
        {
          path: '/readme',
          component: resovle => require(['../components/page/About.vue'], reslove)
        },
        {
          path: '/baseform',
          component: resovle => require(['../components/page/BaseForm.vue'], resovle)
        }
      ]
    }
  ]
})
