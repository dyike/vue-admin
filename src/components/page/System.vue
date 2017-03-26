<template>
    <div class="settings">
        <div class="crumbs">
            <el-breadcrumb separator="/about">
                <el-breadcrumb-item><i class="el-icon-setting"></i> 系统配置</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="tabs">
            <el-tabs v-model="activeName" @tab-click='handleClick'>
                <el-tab-pane label="基本设置" name="base">
                    <div style="margin: 20px;"></div>
                    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" ref="formLabelAlign">
                        <el-form-item label="名称">
                            <el-input v-model="formLabelAlign.name"></el-input>
                        </el-form-item>
                        <el-form-item label="活动区域">
                            <el-input v-model="formLabelAlign.region"></el-input>
                        </el-form-item>
                        <el-form-item label="活动形式">
                            <el-input v-model="formLabelAlign.type"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="saveForm('formLabelAlign')">保存</el-button>
                            <el-button @click="resetForm('formLabelAlign')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="其他设置" name="others">
                自行扩展
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                activeName: 'base',
                labelPosition: 'right',
                formLabelAlign: {
                    name: '',
                    region: '',
                    type: ''
                }
            }
        },
        methods: {
            handleClick(tab) {
                // console.log(this.activeName)
                // this.activeName = tab.name
                // console.log(this.activeName)
            },
            saveForm (formName) {

            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }

</script>

<style>

</style>
