<template>
    <div id="login">
        <div id="log_in">
            <h1>Log In</h1>
            <table>
                <tr>
                    <td></td>
                    <td><input type="text" name="username" placeholder="Username"></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="text" name="password" placeholder="Password"></td>
                    <td><span>忘记密码</span></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="submit" value="log in"></td>
                    <td></td>
                </tr>
            </table>
            <p>Not registered? <span>Create an account</span></p>
            <span>用户名或密码不正确</span>
        </div>
        <div id="sign_up">
            <h1>Sign Up</h1>
            <table>
                <tr>
                    <td></td>
                    <td><input type="text" name="username" placeholder="Username"></td>
                    <td><span>该用户名已被注册</span></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="text" name="password" placeholder="Password"></td>
                    <td><span>密码不得小于6位</span></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="text" name="confirmPwd" placeholder="Confirm Password"></td>
                    <td><span>密码不一致</span></td>
                </tr>
                <tr>
                    <td></td>
                    <td><input type="submit" value="sign up"></td>
                    <td></td>
                </tr>
            </table>
            <p>Already registered? <span>Log In</span></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login'
}
</script>

<style scoped>

</style>
