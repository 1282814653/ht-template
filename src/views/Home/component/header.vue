<template>
    <div class="header">
        <el-breadcrumb separator="/" class="header-main">
            <el-breadcrumb-item v-for="(item, sub) in menuListSub" :key="sub">
                <router-link :to="item.path">
                    {{ item.meta.title }}
                </router-link>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
export default {
    name: 'Header',
    components: {

    },
    data() {
        return {
            menuList: []
        };
    },
    methods: {

    },
    created() {
        //  
        this.menuList = this.$route.matched
        console.log('111', this.menuList)
        console.log('123...', this.menuListSub)
    },
    mounted() {

    },
    computed: {
        menuListSub() {
            return this.menuList.slice(1)
        }
    }
};
</script>
<style scoped lang="scss">
@import '@/styles/global.scss';
.header {
    .header-main {
        line-height: 60px;
    }
}
</style>