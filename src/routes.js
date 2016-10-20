import Home from './components/home/home.vue'
import Page1 from './components/page/page1.vue'
import Page2 from './components/page2/page2.vue'
import System from './components/system/system.vue'

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/page1',
    component: Page1
  },
  {
    path: '/page2',
    component: Page2
  },
  {
    path: '/system',
    component: System
  }
]
