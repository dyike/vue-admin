// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'    // 默认主题
import VueQuillEditor from 'vue-quill-editor'
import VueSimplemde from 'vue-simplemde'

// Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueQuillEditor)
Vue.use(VueSimplemde)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
