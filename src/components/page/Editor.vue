<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>编辑器</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="plugins-tips">
            Vue Quill Editor：基于Quill、适用于Vue2的富文本编辑器，支持服务端渲染和单页应用。
            访问地址：<a href="https://github.com/surmon-china/vue-quill-editor" target="_blank">vue-quill-editor</a>
        </div>
        <quill-editor ref="textEditor" :value="content" :config="editorConfig"></quill-editor>
        <el-button class="editor-btn" type="primary" @click="submit1">提交</el-button>

        <div class="plugins-tips">
            Vue-SimpleMDE: 是一款适用于Vue1和Vue2的Markdown编辑器。
            访问地址：<a href="https://github.com/F-loat/vue-simplemde" target="_blank">Vue-SimpleMDE</a>
        </div>

        <markdown-editor ref="markdownEditor" :value="content" @input="handleInput" :configs="configs"></markdown-editor>

        <el-button class="editor-btn" type="primary" @click="submit2">提交</el-button>

    </div>
</template>

<script>
    import markdownEditor from 'vue-simplemde/src/markdown-editor'

    export default {
        components: {
            markdownEditor
        },
        data () {
            return {
                content: '<p>Hello Vue-Admin</p>',
                editorConfig: {

                },
                configs: {
                    spellChecker: false, // 禁用拼写检查
                    status: false, // 禁用底部状态栏
                    renderingConfig: {
                      codeSyntaxHighlighting: true, // 开启代码高亮
                      highlightingTheme: 'atom-one-light' // 自定义代码高亮主题，可选列表(https://github.com/isagalaev/highlight.js/tree/master/src/styles)
                    }
                }
            }
        },
        methods: {
            onEdiorChange ({ editor, html, text }) {
                this.content = html
            },
            submit1 () {
                this.$message.success('提交成功!')
            },
            submit2 () {
                this.$message.success('提交成功!')
            },
            handleInput () {
                console.log('处理输入')
            }
        },
        computed: {
            editor () {
                return this.$refs.myTextEditor.quillEditor;
            },
            simplemde () {
              return this.$refs.markdownEditor.simplemde
            }
        }
    }

</script>

<style scoped>
    .editor-btn{
        margin-top: 16px;
        margin-bottom: 16px;
    }
</style>
