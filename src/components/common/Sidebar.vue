<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <el-menu-item index="/about">
                <i class="el-icon-information"></i>介绍
            </el-menu-item>

            <el-submenu index="2">
                <template slot="title"><i class="el-icon-message"></i>表单</template>
                <el-menu-item index="/baseform">基本表单</el-menu-item>
                <el-menu-item index="/upload">上传文件</el-menu-item>
                <el-menu-item index="/editor">编辑器</el-menu-item>
            </el-submenu>

            <el-submenu index="3">
                <template slot="title"><i class="el-icon-minus"></i>列表管理</template>
                <el-menu-item index="/list">常用表格</el-menu-item>
            </el-submenu>

            <el-submenu index="4">
                <template slot="title"><i class="el-icon-picture"></i>图表统计</template>
                <el-menu-item index="/chart/line">折线图</el-menu-item>
                <el-menu-item index="/chart/area">区块图</el-menu-item>
                <el-menu-item index="/chart/pie">饼形图</el-menu-item>
                <el-menu-item index="/chart/column">柱状图</el-menu-item>
            </el-submenu>

            <el-menu-item index="/drag">
                <i class="el-icon-menu"></i>白板拖拽
            </el-menu-item>

            <el-menu-item index="/system">
                <i class="el-icon-setting"></i>系统配置
            </el-menu-item>

        </el-menu>
    </div>
</template>
<script>
    export default {
        computed: {
            onRoutes() {
                return this.$route.path.replace('/', '')
            }
        }
    }
</script>

<style scoped>
    .sidebar {
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 70px;
        bottom: 0;
        background: #2E363F;
    }
    .sidebar > ul {
        height: 100%;
    }
</style>

