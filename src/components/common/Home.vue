<template>
    <el-row class="wrapper">
        <el-col class="header">
            <el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
                {{collapsed?'':systemName}}
            </el-col>
            <el-col :span="10">
                <div class="tools" @click.prevent="collapse">
                    <i class="el-icon-menu"></i>
                </div>
            </el-col>
            <el-col :span="4" class="userinfo">
                <el-dropdown>
                    <span class="el-dropdown-link userinfo-inner">
                        <img :src="this.useravatar" />
                        {{username}}
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>设置</el-dropdown-item>
                        <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-col>

        <el-col :span="24" class="main">
            <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
                <!-- 导航菜单展开 -->
                <el-menu :default-active="$route.path" theme="dark" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect"
                     unique-opened router v-show="!collapsed">
                    <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
                        <el-submenu :index="index+''" v-if="!item.leaf">
                            <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
                            <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
                        </el-submenu>
                        <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
                    </template>
                </el-menu>
                <!--导航菜单-折叠后-->
                <ul class="el-menu el-menu-vertical-demo collapsed" v-show="collapsed" ref="menuCollapsed">
                    <li v-for="(item,index) in $router.options.routes" v-if="!item.hidden" class="el-submenu item" theme="dark">
                        <template v-if="!item.leaf">
                            <div class="el-submenu__title" style="padding-left: 20px;" @mouseover="showMenu(index, true)" @mouseout="showMenu(index, false)"><i :class="item.iconCls"></i></div>
                            <ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index, true)" @mouseout="showMenu(index, false)">
                                <li v-for="child in item.children" v-if="!child.hidden" :key="child.path" class="el-menu-item" style="padding-left: 40px;" :class="$route.path==child.path?'is-active':''" @click="$router.push(child.path)">{{child.name}}</li>
                            </ul>
                        </template>
                        <template v-else>
                            <li class="el-submenu">
                                <div class="el-submenu__title el-menu-item" style="padding-left: 20px;height: 56px;line-height: 56px;padding: 0 20px;" :class="$route.path==item.children[0].path?'is-active':''" @click="$router.push(item.children[0].path)"><i :class="item.iconCls"></i></div>
                            </li>
                        </template>
                    </li>
                </ul>
            </aside>

            <section class="content-container">
                <div class="grid-content bg-purple-light">
                    <el-col :span="24" class="content-wrapper">
                        <transition name="fade" mode="out-in">
                            <router-view></router-view>
                        </transition>
                    </el-col>
                </div>
            </section>

        </el-col>
    </el-row>

</template>

<script>
    export default {
        data() {
            return {
                systemName: '后台管理系统',
                collapsed: false,
                username: '',
                useravatar: '../../../static/img/img.jpg'
            }
        },
        mounted() {
            var user = sessionStorage.getItem('user');
            if (user) {
                user = JSON.parse(user)
                this.username = user.name || ''
                this.useravatar = user.avatar || ''
            }
        },
        methods: {
            logout: function() {
                var _this = this
                this.$confirm('确认退出吗?', '提示', {

                }).then(() => {
                    sessionStorage.removeItem('user')
                    _this.$router.push('/login')
                }).catch(() => {

                })
            },
            handleclose: function() {

            },
            handleopen: function() {

            },
            handleselect: function(a, b) {

            },
            showMenu(i, status) {
                this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
            },

            // 折叠导航栏
            collapse: function() {
                this.collapsed = !this.collapsed
            }
        }
    }
</script>

<style scoped lang="scss">
    .wrapper {
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 100%;
        .header {
            height: 70px;
            line-height: 70px;
            background: #2E363F;
            color: #fff;
            .userinfo {
                text-align: right;
                padding-right: 35px;
                float: right;
                .userinfo-inner {
                    color: #fff;
                    cursor: pointer;
                    img {
                        width: 40px;
                        height: 40px;
                        border-radius: 20px;
                        margin: 10px 0px 10px 10px;
                        float: right;
                    }
                }
            }
            .logo {
                font-size: 22px;
                padding-left: 20px;
                padding-right: 20px;
                border-color: rgba(238, 241, 146, 0.3);
                border-right-width: 1px;
                border-right-style: solid;
                img {
                    width: 40px;
                    float: left;
                    margin: 10px 10px 10px 18px;
                }
                .txt {
                    color: #fff;
                }
            }
            .logo-width {
                width: 250px;
            }
            .logo-collapse-width {
                width: 70px;
            }
            .tools {
                padding: 0px 23px;
                width: 14px;
                height: 70px;
                line-height: 70px;
                cursor: pointer;
            }
        }

        .main {
            display: flex;
            position: absolute;
            top: 70px;
            bottom: 0px;
            overflow: hidden;
            aside {
                flex: 0 0 250px;
                width: 250px;
                .el-menu {
                    height: 100%;
                }
                .collapsed {
                    width: 70px;
                    .item {
                        position: relative;
                    }
                    .submenu {
                        position: absolute;
                        top: 0px;
                        left: 70px;
                        z-index: 99999;
                        height: auto;
                        display: none;
                    }
                }
            }
            .menu-collapsed {
                flex:0 0 70px;
                width: 60px;
            }
            .menu-expanded {
                flex:0 0 250px;
                width: 250px;
            }

            .content-container {
                flex: 1;
                overflow-y: scroll;
                padding: 20px;

                .content-wrapper {
                    background-color: #fff;
                    box-sizing: border-box;
                }
            }
        }

    }
</style>
