<template>
    <div class="about">
        <div class="crumbs">
            <el-breadcrumb separator="/about">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 介绍</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="va-doc">
            <h3>README.md</h3>
            <article>
                <h1>vue-admin</h1>
                <p>基于Vue.js 2.x系列 + Element UI 搭建后台管理系统</p>
                <h2>前言</h2>
                <p>基于vue.js,使用vue-cli脚手架快速生成项目目录，使用Element UI组件库，方便开发快速简洁好看的组件。</p>
                <p>该方案作为一套多功能的后台框架模板，适用于绝大部分的后台管理系统开发。很灵活的扩展性。</p>
                <h2>功能</h2>
                <el-checkbox disabled checked>使用Element UI</el-checkbox>
                <br>
                <el-checkbox disabled checked>登录/退出</el-checkbox>
                <br>
                <el-checkbox disabled checked>列表显示(包括分页，搜索)</el-checkbox>
                <br>
                <el-checkbox disabled checked>表单</el-checkbox>
                <br>
                <el-checkbox disabled checked>图表(HighCharts[仅供学习])</el-checkbox>
                <br>
                <el-checkbox disabled checked>编辑器(富文本编辑，markdown编辑)</el-checkbox>
                <br>
                <el-checkbox disabled checked>图片拖拽上传/图片显示</el-checkbox>
                <br>
                <el-checkbox disabled checked>白板拖拽功能</el-checkbox>
                <br>
                <el-checkbox disabled checked>系统配置(tab页)</el-checkbox>
                <br>
                <h2>其他说明</h2>
                <p>本方案参考了Vue-Manage-System(https://github.com/lin-xin/vue-manage-system)</p>
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

<style scoped lang="scss">
//colors
$color_wild_sand_approx: #f5f5f5;
$color_iron_approx: #d8d8d8;
$white: #fff;
$color_alto_approx: #ddd;
$color_gallery_approx: #eee;

.va-doc {
    width: 100%;
    h3 {
        padding: 9px 10px 10px;
        margin: 0;
        font-size: 14px;
        line-height: 17px;
        background-color: $color_wild_sand_approx;
        border: 1px solid $color_iron_approx;
        border-bottom: 0;
        border-radius: 3px 3px 0 0;
    }
    article {
        padding: 45px;
        word-wrap: break-word;
        background-color: $white;
        border: 1px solid $color_alto_approx;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
        h1 {
            font-size: 32px;
            padding-bottom: 10px;
            margin-bottom: 15px;
            border-bottom: 1px solid $color_alto_approx;
        }
        h2 {
            margin: 24px 0 16px;
            font-weight: 600;
            line-height: 1.25;
            padding-bottom: 7px;
            font-size: 24px;
            border-bottom: 1px solid $color_gallery_approx;
        }
        p {
            margin-bottom: 15px;
            line-height: 1.5;
        }
        .el-checkbox {
            margin-bottom: 5px;
        }
    }
}
</style>
