<template>
    <div class="home">
        <el-container class="home-main">
            <!-- 左边 信息  -->
            <el-aside class="main-left">Aside</el-aside>
            <!-- 右边 信息 -->
            <el-container class="main-right">
                <!-- 右边 上部信息 -->
                <el-header class="right-top">Header</el-header>
                <!-- 右边 下部信息 -->
                <el-main class="right-bottom">Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {

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
.home {
    width: 100%;
    height: 100%;
    .home-main {
        width: 100%;
        height: 100%;
        .main-left {
            width: 100%;
            height: 100%;
            background-color: orange;
        }
        .main-right {
            background-color: red;
            .right-top {
                background-color: greenyellow;
            }
            .right-bottom {
                background-color: purple;
            }
        }
    }
}
</style>
