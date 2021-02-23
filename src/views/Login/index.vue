<template>
    <div class="login rel">
        <div class="login-main abs">
            <h1 class="title">登录页面</h1>
            <div class="login-form">
                <el-form :model="userInfo" status-icon ref="ruleForm" label-width="100px">
                    <el-form-item label="用户名" prop="pass">
                        <el-input v-model="userInfo.username" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="checkPass">
                        <el-input type="password" v-model="userInfo.password" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    components: {

    },
    data() {
        return {
            userInfo: {}
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
@import '@/styles/global.scss';
.login {
    width: 100%;
    height: 100%;
    .login-main {
        width: 500px;
        height: 400px;
        .title {
            width: 100%;
            text-align: center;
            font-size: 32px;
            margin: 30px;
        }
    }
}
</style>
