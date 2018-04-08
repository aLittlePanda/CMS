<template>
  <div class="hello">
    <h1 style="margin-top:240px;">后台管理系统</h1>
    <ul class="login_box">
      <li><Input v-model="user" placeholder="账号" clearable style="width: 300px"/></li>
      <li><Input v-model="password" placeholder="密码" clearable style="width: 300px;padding-top:20px;"/></li>
      <li v-show="iCode" style="text-align:left;clear:both;margin-bottom:20px;" @click="disWarn">
        <Input v-model="code" placeholder="验证码" clearable style="width: 140px;padding-top:20px;"/>
        <img class="iCodeImg" @click="getICode" :src="IcodeImg" alt="验证码">
      </li>
      <li><Alert type="error" show-icon v-show="warn">请重新输入验证码</Alert></li>
      <!-- 登录 -->
      <Button type="primary" @click="Login" style="width: 300px;">登录</Button>
    </ul>
  </div>
</template>
<script>
// import axios from 'axios'

export default {
  name: 'login',
  data () {
    return {
      user: 'admin',
      password: 'admin',
      code: '',
      iCode: true,
      IcodeImg: '/cny/captcha.jpg',
      warn: false
    }
  },
  methods: {
    // 验证码
    getICode () {
      let time = new Date().getTime()
      this.IcodeImg = '/cny/captcha.jpg?t=' + time
    },
    // warn
    disWarn () {
      this.warn = false
    },
    // 登录
    Login () {
      let postData = {
        username: this.user,
        password: this.password,
        captcha: this.code
      }
      this.$ajax.post(
        '/sys/login',
        postData,
        {},
        (res) => {
          if (res.code === 0) {
            this.$ajax.setToken(res.token)
            this.$router.push({name: 'home'})
          }
        },
        function () {}
      )
      // axios.post('/cny/sys/login?username=admin&password=admin&captcha=1', postData).then((response) => {
      //   if (response.data.code === 500) {
      //     this.warn = true
      //     this.getICode()
      //   } else if (response.data.code === 0) {

      //   }
      // }).catch(function (error) {
      //   console.log(error)
      // })
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  display: inline-block;
  padding: 0;
}
li {
  margin: 0 10px;
  list-style: none;
}
a {
  color: #42b983;
}
.login_box{
  border: 1px solid #dddddd;
  border-radius: 2px;
  margin-top: 20px;
  padding: 60px;
}
.login_box:hover{
  box-shadow: 2px 2px 6px #dcdcdc;
  transition: ease-in-out 0.5s;
  cursor: pointer;
}
.iCodeImg{
  float: right;
  width: 134px;
  height: 30px;
  margin-top: 20px;
}
.hello{
  position: relative;
}
</style>
