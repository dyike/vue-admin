<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid nopadding">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
              <a class="navbar-brand" href="#">后台管理系统</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse">
              <ul class="nav navbar-nav navbar-right">
                <li><a class="logout" v-on:click="logout">欢迎你{{ username }}, 退出</a></li>
              </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
    import AV from 'avoscloud-sdk'
    AV.initialize('EPiUIfWDO8LAdYhxAW4sx99A-gzGzoHsz', 'gXMylpwx51jAsCjxH1Yayqzg')
    export default {
        data: function () {
            return {
                username: AV.User.current().get('username')
            }
        },
        ready () {
        },
        methods: {
            'logout': function () {
                AV.User.logout()
                this.$route.router.go({path: '/login'})
            }
        }
    }
</script>

<style>
    nav.navbar {
        padding-left: 15px;
        margin-bottom: 0px;
    }
    a.logout {
        cursor: pointer;
    }
</style>