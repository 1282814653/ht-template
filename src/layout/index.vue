<template>
    <div :class="classObj" class="layout">
        <!-- 左边栏 -->
        <sidebar class="sidebar-container"></sidebar>
        <div class="main-container">
            <div :class="{'fixed-header':fixedHeader}">
                <navbar />
            </div>
            <app-main />
        </div>
    </div>
</template>

<script>
import sidebar from './components/Sidebar/index'
import navbar from './components/Navbar/index'
import appMain from './components/AppMain/index'
import ResizeMixin from './mixin/ResizeHandler'
export default {
    name: 'Layout',
    components: {
        sidebar,
        navbar,
        appMain
    },
    mixins: [ResizeMixin],
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
        sidebar() {
            return this.$store.state.app.sidebar
        },
        device() {
            return this.$store.state.app.device
        },
        fixedHeader() {
            return this.$store.state.settings.fixedHeader
        },
        classObj() {
            return {
                hideSidebar: !this.sidebar.opened,
                openSidebar: this.sidebar.opened,
                withoutAnimation: this.sidebar.withoutAnimation,
                mobile: this.device === 'mobile'
            }
        }
    },
    methods: {
        handeClickOutside() {
            this.$store.dispatch("app/closeSideBar", { withoutAnimation: false })
        }
    }
};
</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';
@import '@/styles/variables.scss';
.layout {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar {
        position: fixed;
        top: 0;
    }
}
.drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
}

.fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
}

.hideSidebar .fixed-header {
    width: calc(100% - 54px);
}

.mobile .fixed-header {
    width: 100%;
}
</style>
