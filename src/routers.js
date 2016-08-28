'use strict'
import AV from 'avoscloud-sdk'
Av.initialize('EPiUIfWDO8LAdYhxAW4sx99A-gzGzoHsz', 'gXMylpwx51jAsCjxH1Yayqzg')

export default function (vueRouter) {
    vueRouter.map({
        '/': {
            name: 'home',
            component: require('./Dashboard'),
            subRoutes: {
                '/manager': {
                    component: require('./views/Manager'),
                    auth: true,
                    subRoutes: {
                        '/app': {
                            component: require('./views/manager/App')
                        },
                        '/basic': {
                            component: require('./views/manager/Basic')
                        },
                        '/server': {
                            component: require('./views/manager/Server')
                        }
                    }
                }
            }
        },
        '/login': {  //登陆界面
            component: require('./Login')
        }
    })
    vueRouter.redirect({
        '/': '/manager', //路由自动跳转页面
        '/manager': '/manager/app'
    })
    //验证当前页面是否可被用户访问，如果没有权限，则跳转登陆页面
    vueRouter.beforeEach(function (transition) {
        if (transition.to.auth === true) {
            var currentUser = AV.User.current()
            if (currentUser) {
                transition.next()
            } else {
                vueRouter.go({path: '/login'})
            }
        } else {
            transition.next()
        }
    })
}