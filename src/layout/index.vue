<template>
    <div class="layout">
        <!-- 左边栏 -->
        <sidebar_page></sidebar_page>
    </div>
</template>

<script>
import sidebar_page from './components/Sidebar/index'
export default {
    name: 'Layout',
    components: {
        sidebar_page
    },
    data() {
        return {

        };
    },
    methods: {

    },
    created() {

    },
    mounted() {

    },
    computed: {

    },
};
</script>

<style scoped lang="scss">
.layout {
    width: 100%;
    height: 100%;
    background-color: orange;
}
</style>
