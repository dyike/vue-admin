import Vue from 'vue'
import Counter from './page2.vue'
import store from './page2_store'

new Vue({
    el: '#app',
    store,
    render: h => h(Counter)
})
