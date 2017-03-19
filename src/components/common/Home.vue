<template>
    <div class="wrapper">
        <va-head></va-head>
        <va-sidebar></va-sidebar>
        <div class="content">
            <transition name="move" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    import vaHead from './Header.vue'
    import vaSidebar from './Sidebar.vue'

    export default {
        components: {
            vaHead, vaSidebar
        }
    }
</script>
