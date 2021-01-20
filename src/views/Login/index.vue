<template>
  <div class="loginPage">
    <div class="imgPic">
      <img src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png" alt="">
    </div>
    <div class="loginFrom">
      <input type="text" placeholder="用户名" v-model="userName"  class="userNameInput">
      <input type="password" placeholder="密码" v-model="passWord" class="passWordInput">
      <button @click="handleLogin" class="submitBtn">登录</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userName: '',
      passWord: ''
    }
  },
  methods : {
    // 判断用户是否登录、
    /**
     * 账号：admin
     * 密码：123
     */
    handleLogin() {
      if(this.userName === 'admin' && this.passWord === '123'){
        sessionStorage.setItem('nickName', this.userName);
        // 固定跳转
        // this.$router.push('/card')
        this.$router.replace({
          path : this.$route.query.redirect
        })
      } else{
        console.error('登陆错误')
      }
    }
  }
}
</script>
<style lang="less">
.loginPage {
  .imgPic {
      margin: 79px auto 40px;
      text-align: center;
      height: 60px;
      line-height: 60px;
      img {
        height: 60px;
      }
  }
  .loginFrom {
    .userNameInput,.passWordInput {
      width: 80%;
      height: 44px;
      border: none;
      margin: 10px 10% ;
      ::after{
        height: 1px;
        width: 1px;
        border-bottom: 1px solid #ff5f16;
      }
    }
    .submitBtn{
        line-height: 45px;
        width: 80%;
        font-size: 16px;
        margin:70px 10% 0;
        border-radius: 3px;
        text-align: center;
        background-color: #ff5f16;
        height: 44px;
        color: #fff;
        border: none;
    }
  }
}
</style>
