import Vue from 'vue'
<<<<<<< HEAD
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import store from './store/store'
import routes from './routes'

Vue.use(Vuex)
Vue.use(Element)
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
=======
import App from './App'

//路由配置文件
import routerMap from './routers'
import VueRouter from 'vue-router'

//import VueResource fron 'vue-resource'
Vue.use(VueRouter)
// Vue.use(VueResource)

//配置路由
var vueRouter = new VueRouter()
routerMap(vueRouter)
vueRouter.start(App, '#app')
>>>>>>> 6acfd24917cff792dfc4cf5556bff16d48bd0ba2
