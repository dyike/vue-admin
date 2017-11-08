import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let routes = [
    {
        path:'/',
        hidden: true,
        redirect: '/login'
    },
    {
        path: '/login',
        hidden: true,
        name: '',
        component: resolve => require(['../components/page/Login.vue'], resolve)
    },
    {
        path: '/admin',
        component: resolve => require(['../components/common/Home.vue'], resolve),
        name: '',
        iconCls: 'el-icon-information',
        leaf: true,    // 只有一个节点
        children: [
            { path: '/about', component: resolve => require(['../components/page/About.vue'], resolve), name: '介绍' }
        ]
    },
    {
        path: '/admin',
        component: resolve => require(['../components/common/Home.vue'], resolve),
        name: '表单',
        iconCls: 'el-icon-message',
        children: [
            { path: '/baseform', component: resolve => require(['../components/page/BaseForm.vue'], resolve), name: '基础表单' },
            { path: '/upload', component: resolve => require(['../components/page/Upload.vue'], resolve), name: '上传' },
            { path: '/editor', component: resolve => require(['../components/page/Editor.vue'], resolve), name: '编辑器' }
        ]
    },
    {
        path: '/admin',
        component: resolve => require(['../components/common/Home.vue'], resolve),
        name: '列表管理',
        iconCls: 'el-icon-message',
        children: [
            { path: '/list', component: resolve => require(['../components/page/List.vue'], resolve), name: '列表' },
            // { path: '/list/:id/edit', component: resolve => require(['../components/page/Edit.vue'], resolve), name: '编辑' }
        ]
    },
    {
        path: '/admin',
        component: resolve => require(['../components/common/Home.vue'], resolve),
        name: '图表管理',
        iconCls: 'el-icon-picture',
        children: [
            { path: '/chart/line', component: resolve => require(['../components/page/LineCharts.vue'], resolve), name: '折线图' },
            { path: '/chart/area', component: resolve => require(['../components/page/AreaCharts.vue'], resolve), name: '区块图' },
            { path: '/chart/pie', component: resolve => require(['../components/page/PieCharts.vue'], resolve), name: '饼形图' },
            { path: '/chart/column', component: resolve => require(['../components/page/ColumnCharts.vue'], resolve), name: '柱状图' }
        ]
    },
    {
        path: '/admin',
        component: resolve => resolve(['../components/common/Home.vue'], resolve),
        name: '白板拖拽',
        iconCls: 'el-icon-menu',
        children: [
            { path: '/drag', component: resolve => require(['../components/page/Drag.vue'], resolve), name: '拖拽' }
        ]
    },
    {
        path: '/admin',
        component: resolve => require(['../components/common/Home.vue'], resolve),
        name: '配置',
        iconCls: 'el-icon-setting',
        children: [
            { path: '/system', component: resolve => require(['../components/page/System.vue'], resolve), name: '系统配置' }
        ]
    }
]


const router = new Router({
    routes: routes
})
export default router
