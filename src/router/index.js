import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let routes = [
    {
        path: '/admin',
        component: resolve => require(['../components/common/Home.vue'], resolve),
        name: '介绍',
        iconCls: 'el-icon-information',
        isDropdown: false,
        children: [
            { path: '/about', component: resolve => require(['../components/page/About.vue'], resolve), name: '介绍', hidden: false }
        ]
    },
    {
        path: '/admin',
        component: resolve => require(['../components/common/Home.vue'], resolve),
        name: '表单',
        iconCls: 'el-icon-message',
        isDropdown: true,
        children: [
            { path: '/baseform', component: resolve => require(['../components/page/BaseForm.vue'], resolve), name: '基础表单', hidden: false },
            { path: '/upload', component: resolve => require(['../components/page/Upload.vue'], resolve), name: '上传', hidden: false },
            { path: '/editor', component: resolve => require(['../components/page/Editor.vue'], resolve), name: '编辑器', hidden: false }
        ]
    },
    {
        path: '/admin',
        component: resolve => require(['../components/common/Home.vue'], resolve),
        name: '列表管理',
        iconCls: 'el-icon-message',
        isDropdown: true,
        children: [
            { path: '/list', component: resolve => require(['../components/page/List.vue'], resolve), name: '列表', hidden: false },
            { path: '/list/:id/edit', component: resolve => require(['../components/page/Edit.vue'], resolve), name: '', hidden: true }
        ]
    },
    {
        path: '/admin',
        component: resolve => require(['../components/common/Home.vue'], resolve),
        name: '图表管理',
        iconCls: 'el-icon-picture',
        isDropdown: true,
        children: [
            { path: '/chart/line', component: resolve => require(['../components/page/LineCharts.vue'], resolve), name: '折线图', hidden: false },
            { path: '/chart/area', component: resolve => require(['../components/page/AreaCharts.vue'], resolve), name: '区块图', hidden: false },
            { path: '/chart/pie', component: resolve => require(['../components/page/PieCharts.vue'], resolve), name: '饼形图', hidden: false },
            { path: '/chart/column', component: resolve => require(['../components/page/ColumnCharts.vue'], resolve), name: '柱状图', hidden: false }
        ]
    },
    {
        path: '/admin',
        component: resolve => resolve(['../components/common/Home.vue'], resolve),
        name: '白板拖拽',
        iconCls: 'el-icon-menu',
        isDropdown: true,
        children: [
            { path: '/drag', component: resolve => require(['../components/page/Drag.vue'], resolve), name: '拖拽', hidden: false }
        ]
    },
    {
        path: '/admin',
        component: resolve => require(['../components/common/Home.vue'], resolve),
        name: '系统配置',
        iconCls: 'el-icon-setting',
        isDropdown: false,
        children: [
            { path: '/system', component: resolve => require(['../components/page/System.vue'], resolve), name: '系统配置' }
        ]
    },
    {
        path:'/',
        hidden: true,
        redirect: '/login'
    },
    {
        path: '/login',
        hidden: true,
        component: resolve => require(['../components/page/Login.vue'], resolve)
    }
]


const router = new Router({
    routes: routes
})
export default router
