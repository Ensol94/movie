<template>
  <div>
    <input type="text" placeholder="用户名" v-model="userName" >
    <input type="password" placeholder="密码" v-model="passWord">
    <button @click="handleLogin">登录</button>
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
