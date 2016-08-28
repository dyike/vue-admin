<template>
    <div class="sidebar">
        <div class="sidebar-item" v-for="menu in menus">
            <span class="glyphicon" v-bind:class="menu.icon" aria-hidden="true"></span>
            <a v-link="menu.href">{{menu.name}}</a>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data () {
            return {
                menus: [
                {
                    icon: 'glyphicon-th',
                    name: '系统管理',
                    href: '/manager'
                },
                {
                    icon: 'glyphicon-th',
                    name: '我要发布',
                    href: '/menu'
                },
                {
                    icon: 'glyphicon-th',
                    name: '书评文摘',
                    href: '/document'
                },
                {
                    icon: 'glyphicon-object-align-left',
                    name: '关于我们',
                    href: '/about'
                }
                ]
            }
        }
    }
</script>

<style>
    div.sidebar {
        background-color: #F8F8F8;
        height: 600px;
        width: 100%;
        padding-top: 20px;
    }

    div.sidebar-item {
        width: 100%;
        height: 40px;
        padding-left: 40px;
        line-height: 40px;
    }
</style>