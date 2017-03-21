<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <el-menu-item index="about">
                <i class="el-icon-information"></i>介绍
            </el-menu-item>

            <el-submenu index="2">

                <template slot="title"><i class="el-icon-message"></i>表单</template>

                <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="/baseform">基础表单</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>

                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>

                <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>

            </el-submenu>

            <el-submenu index="3">
                <template slot="title"><i class="el-icon-menu"></i>列表管理</template>
                <el-menu-item-group>
                    <template slot="title">列表</template>
                    <el-menu-item index="/list">列表管理</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

            <el-submenu index="4">
                <template slot="title"><i class="el-icon-picture"></i>图表统计</template>
                <el-menu-item-group>
                    <el-menu-item index="/chart/1">折线图</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

        </el-menu>
    </div>
</template>
<script>
    export default {
        computed: {
            onRoutes() {
                console.log(this.$route.path)
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

