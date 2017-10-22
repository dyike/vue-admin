// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'    // 默认主题
import 'simplemde/dist/simplemde.min.css'
import VueQuillEditor from 'vue-quill-editor'





// Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueQuillEditor)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
