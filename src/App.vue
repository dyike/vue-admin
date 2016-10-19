<template>
<<<<<<< HEAD
  <div id="app">
    <TopBar></TopBar>
    <el-row type="flex">
      <NavMenu></NavMenu>
      <Container></Container>
    </el-row>
  </div>
</template>

<script>
import './components/common/style.scss'
import TopBar from './components/common/TopBar.vue'
import NavMenu from './components/common/NavMenu.vue'
import Container from './components/common/Container.vue'

export default {
  components: {
    TopBar, NavMenu, Container
  }
}
</script>
=======
  <router-view></router-view>
</template>
<style>
  * {
    font-family: 'Hiragino Sans GB', 'Microsoft Yahei', SimSun;
  }
</style>
>>>>>>> 6acfd24917cff792dfc4cf5556bff16d48bd0ba2
