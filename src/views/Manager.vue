<template>
    <div class="container-fluid manager-tab">
        <ul class="nav nav-tabs">
            <li v-bind:class="submenu.class" role="presentation" v-for="submenu in submenus">
                <a v-link="submenu.href" data-toggle="tab">{{submenu.name}}</a>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                submenus: [
                    {
                        name: '应用配置',
                        href: '/manager/app'
                    },
                    {
                        name: '服务器管理',
                        href: '/manager/server'
                    },
                    {
                        name: '基本信息',
                        href: '/manager/basic'
                    }
                ]
            }
        }
    }
</script>

<style>
    div.manager-tab {
        margin-top: 10px;
    }
</style>