<template>
    <div class="login rel">
        <div class="login-main abs borr10 bor1">
            <h1 class="t-a-c  f-t-z f-w-b t-m-3-tb ">X X X 后台登录系统</h1>
            <div class="login-form">
                <el-form :model="userInfo" status-icon :rules="rules" label-position="left" ref="ruleForm" label-width="75px">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="userInfo.username" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="userInfo.password" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div class="t-a-c">
                <el-button type="primary" @click="userLogin()">登录</el-button>
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
            userInfo: {
                username: "",
                password: ""
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 11, message: '长度在 3 到 11 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入用户密码', trigger: 'change' },
                    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
                ],
            }
        };
    },
    methods: {
        userLogin() {
            let { username, password } = this.userInfo
            if (username === "123456" && password === "123456") {
                this.$router.push("/index")
                // localStorage.setItem("userLoginInfo", JSON.stringify(username))
                this.userInfo = {}
                this.$message({
                    message: '登陆成功',
                    type: 'success'
                });
            } else {
                this.$message({
                    message: '填写错误，请重新填写信息。',
                    type: 'error'
                });
            }

        }
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
    background-color: greenyellow;
    .login-main {
        width: 500px;
        height: 350px;
        padding: 40px;
    }
}
</style>
