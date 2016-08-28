<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3 user-center">
                <alert
                    :show.sync="showError"
                    :duration="3000"
                    type="danger"
                    width="360px"
                    placement="top"
                    dismissable>
                    <span class="icon-info-circled alert-icon-float-left"></span>
                    <p>{{ errorMsg }}</p>
                </alert>

                <ul class="nav nav-tabs">
                    <li class="active"><a href="#login" data-tolog="tab">用户登陆</a></li>
                    <li><a href="#register" data-tolog="tab">注册</a></li>
                </ul>

                <div class="well tab-content">
                    <div class="user-content tab-pane fade in active" id="login">
                        <form class="form-horizontal" action="">
                            <fieldset>
                                <div class="form-group">
                                    <label class="control-label col-md-3" for="username">用户名</label>
                                    <div class="col-md-9">
                                        <input type="text" class="form-control" v-model="username">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="control-label col-md-3" for="password">密码</label>
                                    <div class="col-md-9">
                                        <input type="password" class="form-control" v-model="password">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-md-10 clo-md-offset-3">
                                        <button v-on:click="login" class="btn btn-raised btn-primary">登录</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>


                    <div class="user-content tab-pane fade" id="register">
                        <form class="form-horizontal" action="">
                            <fieldset>
                                <div class="form-group">
                                    <label class="control-label col-md-3" for="username">用户名</label>
                                    <div class="col-md-9">
                                        <input type="text" class="form-control" v-model="registerName">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="control-label col-md-3" for="password">密码</label>
                                    <div class="col-md-9">
                                        <input type="password" class="form-control" v-model="registerPassword">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="control-label col-md-3" for="password">确认密码</label>
                                    <div class="col-md-9">
                                        <input type="password" class="form-control" v-model="registerRePassword">
                                    </div>
                                </div>

<!--                                 <div class="form-group">
                                    <label class="control-label col-md-3" for="mobile">手机号</label>
                                    <div class="col-md-9">
                                        <input type="text" class="form-control" v-model="mobile">
                                        <button v-on:click="sendSmsCode" class="btn btn-default">发送验证码</button>
                                    </div>
                                </div> -->

                                <div class="form-group">
                                    <label class="control-label col-md-3" for="smsCode">验证码</label>
                                    <div class="col-md-9">
                                        <input type="text" class="form-control" v-model="sms_code">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-md-9 clo-md-offset-3">
                                        <button v-on:click="register" class="btn btn-raised btn-primary">注册</button>
                                    </div>
                                </div>

                            </fieldset>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import AV from 'avoscloud-sdk'
    import { alert } from 'vue-strap'
    Av.initialize('EPiUIfWDO8LAdYhxAW4sx99A-gzGzoHsz', 'gXMylpwx51jAsCjxH1Yayqzg')

    export default {
        ready: function () {
            $(function () {
                $.material.init()
            })
        },
        data: function () {
            return {
                username: '',
                password: '',
                registerName: '',
                registerPassword: '',
                registerRePassword: '',
                mobile: '18012345678',
                showError: false,
                errorMsg: 'default error'
            }
        },
        components: {
            alert
        },
        methods: {
            login: function () {
                var data = this.$data
                var router = this.$route.router
                AV.User.login(this.name, this.password).then(function () {
                    //路由跳转
                    router.go({path: '/'})
                }, function (error) {
                    data.showError = true
                    data.errorMsg = error.message
                })
            },

            register: function () {
                var data = this.data
                if (this.registerPassword === this.registerRePassword) {
                    const user = new AV.User()
                    user.set('username', this.registerName)
                    user.set('password', this.registerPassword)
                    //注册
                    user.signUp().then(user => {
                        data.showError = true
                        data.errorMsg = '注册成功'
                    }, error => {
                        data.showError = true
                        data.errorMsg = error.message
                    })
                } else {
                    data.showError = true
                    data.errorMsg = '请输入相同的密码'
                }
            },
            sendSmsCode: function () {
                //发送手机验证码
                AV.Cloud.registerSmsCode({
                    mobilePhoneNumber: this.mobile
                }).then(() => {
                    console.log('发送成功')
                }, error => {
                    console.log(error)
                })
            }
        }
    }
</script>

<style>
    .user-center {
        margin-top: 100px;
    }
    .user-content {
        margin-top: 20px;
    }
    .well {
        margin-top: 15px;
    }
</style>












