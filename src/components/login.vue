<template>
  <div id="login">
    <transition leave-active-class="animated zoomOutDown" enter-active-class="animated zoomInDown">
      <div
        v-if="isLogin"
        id="log_in"
        style="height:auto; position:absolute; top:50%; left:50%; margin-top:-208px; margin-left:-478px;"
      >
        <h1>Log In</h1>
        <table>
          <tr>
            <td></td>
            <td>
              <input type="text" name="username" placeholder="Username" class="input">
            </td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="password" name="password" placeholder="Password" class="input">
            </td>
            <td>
              <span
                style="font-size:14px; color:#009ad6;line-height:40px; margin-left:10px; cursor:pointer;"
              >忘记密码</span>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <transition leave-active-class="animated hinge"  enter-active-class="animated zoomInUp"><input v-show="isShow" @click="isShow=!isShow" type="submit" value="log in" class="btn"></transition>
            </td>
            <td></td>
          </tr>
        </table>
        <p class="tips">Not registered?
          <span @click="isLogin=false">Create an account</span>
        </p>
        <!-- <span>用户名或密码不正确</span> -->
      </div>
    </transition>
    <transition leave-active-class="animated zoomOutDown" enter-active-class="animated zoomInDown">
      <div
        v-if="!isLogin"
        id="sign_up"
        style="height:auto; position:absolute; top:50%; left:50%; margin-top:-208px; margin-left:-478px;"
      >
        <h1>Sign Up</h1>
        <table>
          <tr>
            <td></td>
            <td>
              <input type="text" name="username" placeholder="Username" class="input">
            </td>
            <td>
              <img
                src="../assets/username_true.png"
                alt
                style="height:18px;width:18px; margin:auto 10px;"
              >
              <span
                style="margin:auto 10px; font-size:15px; line-height:40px; color:#d93a49;"
              >该用户名已被注册</span>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="password" name="password" placeholder="Password" class="input">
            </td>
            <td>
              <span
                style="color:#d93a49; line-height:40px; margin-left:10px; font-size:15px;"
              >密码不得小于6位</span>
            </td>
          </tr>
          <!-- <tr>
            <td></td>
            <td>
              <input type="password" name="confirmPwd" placeholder="Confirm Password" class="input">
            </td>
            <td>
              <span style="color:#d93a49; line-height:40px; margin-left:10px; font-size:15px;">密码不一致</span>
            </td>
          </tr> -->
          <tr>
            <td></td>
            <td>
              <input type="submit" value="sign up" class="btn">
            </td>
            <td></td>
          </tr>
        </table>
        <p class="tips">
          Already registered?
          <span @click="isLogin=true">Log In</span>
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "login",
  data: () => {
    return {
      isLogin: true,
      isShow:true
    };
  },
  methods: {
  }
};
</script>

<style scoped>
#login {
  height: -webkit-fill-available;
  width: auto;
  display: flex;
  flex-flow: column;
  margin: auto;
  align-content: center;
  background: #092756;
  background-image: linear-gradient(to bottom right, #5e3597, #167ba3);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3E1D6D', endColorstr='#092756',GradientType=1 );
}
#log_in,
#sign_up {
  height: auto;
  width: auto;
  display: flex;
  flex-flow: column;
  margin: auto;
  align-content: center;
}
#log_in > h1,
#sign_up > h1 {
  font-size: 30px;
  font-weight: bold;
  margin: 30px auto;
  text-align: center;
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  letter-spacing: 5px;
}
#log_in > p,
#sign_up > p {
  font-size: 15px;
  text-align: center;
  margin-top: 10px;
  color: #50b7c1;
}
#log_in > span,
#sign_up > span {
  font-size: 15px;
  font-weight: bold;
  width: auto;
  max-width: 80%;
  word-wrap: break-word;
  color: #d93a49;
  text-align: center;
  margin: 10px auto;
}
#log_in > table,
#sign_up > table {
  border: none;
  width: auto;
  height: auto;
  margin: auto;
}
#log_in > table > tr,
#sign_up > table > tr {
  width: auto;
  height: auto;
  padding: 18px;
  display: flex;
}
#log_in > table td,
#sign_up > table td {
  width: 300px;
  height: auto;
  align-content: center;
  display: flex;
  flex-flow: row;
}
.input {
  width: 100%;
  height: 35px;
  padding-left: 20px;
  font-size: 16px;
  line-height: 35px;
  letter-spacing: 1px;
  background-color: azure;
  border-radius: 100px;
  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2),
    0 1px 1px rgba(255, 255, 255, 0.2);
  outline: none;
}
.btn {
  width: 180px;
  height: 40px;
  margin: auto;
  font-size: 18px;
  line-height: 40px;
  cursor: pointer;
  font-weight: bold;
  color: white;
  background-color: #64a5dc;
  border-radius: 100px;
  outline: none;
  font-family: -webkit-body;
  letter-spacing: 3px;
}
.tips > span {
  color: #afdfe4;
  cursor: pointer;
}
</style>
