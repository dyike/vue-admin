<template>
    <div class="settings">
        <div class="crumbs">
            <el-breadcrumb separator="/about">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 系统配置</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="tabs">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="基本设置" name="base"></el-tab-pane>
                <el-tab-pane label="安全设置" name="securty"></el-tab-pane>
                <el-tab-pane label="其他设置" name="others"></el-tab-pane>
            </el-tabs>
            <div>
                <component :is='currentView1' keep-alive></component>
            </div>
        </div>

        <div class="tabs">
                <ul>
                    <li @click='tabToggle("tab01");'>Tab001</li>
                    <li @click='tabToggle("tab02");'>Tab002</li>
                </ul>
        </div>
        <div>
            <component :is='currentView' keep-alive></component>
        </div>


    </div>
</template>

<script>

    // import Form from "../settings/Form"
    // const BaseComponent = {
    //     template: Form
    // }
    // const SecurtyComponent = {
    //     template: Form
    // }
    // const OthersComponent = {
    //     template: Form
    // }

    var tab01 = {
            template: `<p>This is tab01</p>`
    }

    var tab02 = {
            template: `<p>This is tab02</p>`
    }

    export default {
        components: {
                tab01: tab01,
                tab02: tab02
        },
        data () {
            return {
                currentView: 'tab01',
                currentView1: 'tab01',
                activeName: 'base',
            }
        },
        methods: {
            tabToggle: function(tabText) {
                this.currentView = tabText
            },
            handleClick: function(tab) {
                console.log(tab.name)
                this.currentView1 = tab.name
            }
        }

    }


    // export default {
    //     components: {
    //         'base-component': BaseComponent,
    //         'securty-component': SecurtyComponent,
    //         'others-component': OthersComponent
    //     },

    //     data () {
    //         return {
    //             activeName: 'base',
    //             item: []
    //         }
    //     },
    //     methods: {
    //         handleClick(component) {
    //             //console.log(tab)
    //             this.item.push({
    //                 'component': component,
    //             })
    //             // this.$router.push('/system/' + tab.name)
    //         }
    //     }
    // }

</script>

<style>

</style>
