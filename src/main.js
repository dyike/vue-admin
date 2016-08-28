import Vue from 'vue'
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
