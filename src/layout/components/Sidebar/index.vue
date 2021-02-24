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
import { mapGetters } from 'vuex'
import sidebar_item from './SidebarItem'
import variables from '@/styles/variables.scss'
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

    },
    computed: {
        ...mapGetters([
            'sidebar'
        ]),
        routes() {
            return this.$router.options.routes
        },
        activeMenu() {
            const route = this.$route
            const { meta, path } = route

            if (meta.activeMenu) {
                return meta.activeMenu
            }
            return path
        },
        showLogo() {
            return this.$store.state.settings.sidebarLogo
        },
        variables() {
            return variables
        },
        isCollapse() {
            return !this.sidebar.opened
        }
    },
};
</script>


