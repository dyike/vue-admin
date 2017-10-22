<template>
    <div class="header">
        <el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">{{collapsed?'':systemName}}</el-col>
        <el-col :span="10">
            <div class="tools" @click.prevent="collapse">
                <i class="el-icon-menu"></i>
            </div>
        </el-col>
        <el-col :span="10" class="userinfo">
            <el-dropdown>
                <span class="el-dropdown-link userinfo-inner">
                    <img class="user-avatar" :src="this.useravatar" />
                    {{username}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>设置</el-dropdown-item>
                    <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                systemName: '后台管理系统',
                collapsed: false,
                username: 'ityike',
                useravatar: '../../../static/img/img.jpg'
            }
        },
        computed: {
            username() {
                let username = localStorage.getItem('va_username')
                return username ? username : this.name
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

            // 折叠导航栏
            collapse: function() {
                this.collapsed = !this.collapsed
            }
        }
    }
</script>

<style scoped lang="scss">
    .header {
        position: absolute;
        // box-sizing: border-box;
        width: 100%;
        line-height: 70px;
        color: #fff;
        .logo {
            font-size: 22px;
            padding-left: 20px;
            padding-right: 20px;
            border-color: rgba(238,241,146,0.3);
            border-right-width: 1px;
            border-right-style: solid;
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
            line-height: 70px;
            cursor: pointer;
        }

        .userinfo {
            text-align: right;
            padding-right: 35px;
            float: right;
            .userinfo-inner {
                color: #fff;
                cursor: pointer;
                .user-avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 20px;
                    margin: 10px 0px 10px 10px;
                    float: right;
                }
            }
        }
    }
</style>
