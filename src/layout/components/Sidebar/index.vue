<template>
    <div class="sidebar">
        <el-scrollbar>
            <el-menu :default-active="activeMenu" :collapse='isCollapse' :background-color="variables.menuBg" :text-color="variables.menuText" :unique-opened="false" :active-text-color="variables.menuActiveText" :collapse-transition="false" mode="vertical">
                <sidebar_item v-for="route in routes" :key="route.path" :item='route' :base-path="route.path"></sidebar_item>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
import sidebar_item from './SidebarItem'
export default {
    name: 'Sidebar',
    components: {
        sidebar_item,
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
        console.log(this.$router.option.routes)
    },
    computed: {

    },
};
</script>

<style scoped lang="scss">
</style>
