<template>
    <div>
        <div class="about">
            <el-breadcrumb separator="/about">
                <el-breadcrumb-item><i class="el-icon-setting"></i>关于</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="va-doc">
            <h3>README.md</h3>
            <article>
                <h1>manage-system</h1>
                <p>基于Vue.js 2.x系列 + Element UI 的后台管理系统解决方案</p>
                <h2>前言</h2>
                <p>之前在公司用了Vue + Element组件库做了个后台管理系统，基本很多组件可以直接引用组件库的，但是也有一些需求无法满足。像图片裁剪上传、富文本编辑器、图表等这些在后台管理系统中很常见的功能，就需要引用其他的组件才能完成。从寻找组件，到使用组件的过程中，遇到了很多问题，也积累了宝贵的经验。所以我就把开发这个后台管理系统的经验，总结成这个后台管理系统解决方案。</p>
                <p>该方案作为一套多功能的后台框架模板，适用于绝大部分的后台管理系统（Web Management System）开发。基于vue.js,使用vue-cli脚手架快速生成项目目录，引用Element UI组件库，方便开发快速简洁好看的组件。分离颜色样式，支持手动切换主题色，而且很方便使用自定义主题色。</p>
                <h2>功能</h2>
                <el-checkbox disabled checked>Element UI</el-checkbox>
                <br>
                <el-checkbox disabled checked>登录/注销</el-checkbox>
                <br>
                <el-checkbox disabled checked>表格</el-checkbox>
                <br>
                <el-checkbox disabled checked>表单</el-checkbox>
                <br>
                <el-checkbox disabled checked>图表</el-checkbox>
                <br>
                <el-checkbox disabled checked>富文本编辑器</el-checkbox>
                <br>
                <el-checkbox disabled checked>markdown编辑器</el-checkbox>
                <br>
                <el-checkbox disabled checked>图片拖拽/裁剪上传</el-checkbox>
                <br>
                <el-checkbox disabled checked>支持切换主题色</el-checkbox>
                <br>
            </article>

        </div>
    </div>

</template>

<script>
    export default {
        data: function () {
            return {}
        }
    }
</script>

<style scoped>

</style>
