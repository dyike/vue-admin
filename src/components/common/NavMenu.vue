<template>
  <el-menu default-active="2" id="nav-menu" theme="dark">
      <el-submenu index="1">
        <template slot="title">导航一</template>
        <el-menu-item-group title="分组一">
          <el-menu-item index="1-1"><router-link to="/page1" class="nav-link">选项1</router-link></el-menu-item>
          <el-menu-item index="1-2"><router-link to="/page2" class="nav-link">选项2</router-link></el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3"><router-link to="/page3" class="nav-link">选项3</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2"><router-link to="/system" class="nav-link">系统配置</router-link></el-menu-item>
  </el-menu>
</template>
