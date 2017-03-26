<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>图片上传</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="content-title">支持拖拽</div>
        <el-upload
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            mutiple
            :thumbnail-mode="true"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-error="handleError"
        >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>

        <div class="content-title">带图片显示的照片墙</div>
        <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
        >
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog v-model="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false
            }
        },
        methods: {
            handlePreview (file) {
                console.log(file)
            },
            handleRemove (file, fileList) {
                console.log(file, fileList)
            },
            handleError () {
                this.$notify.error({
                    title: '上传失败',
                    message: '文件上传失败了，可能是因为服务器累了。'
                })
            },
            handlePictureCardPreview (file) {
                console.log(file)
                this.dialogImageUrl = file.url
                this.dialogVisible = true
            }
        }
    }

</script>

<style scoped>
    .content-title{
        font-weight: 400;
        line-height: 50px;
        margin: 8px 0;
        font-size: 24px;
        color: #1f2f3d;
    }

</style>