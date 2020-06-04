<template>
  <div>
    <header class="header">
      <back class="back"></back>
      <span>登录</span>
      <span class="regr" @click="regr">注册</span>
    </header>
    <div class="phone">
      <span>手机号：</span>
      <input type="number" v-model="tel" />
    </div>
    <div class="password">
      <span>密码：</span>
      <input type="password" v-model="password" />
    </div>
    <div class="forget">
      <span>忘记密码</span>
    </div>
    <div class="button" @click="login">登录</div>
  </div>
</template>
<script>
import { requestLogin } from "../util/request"
export default {
  data() {
    return {
      tel:'',
      password: ""
    };
  },
  methods: {
    regr() {
      this.$router.push("/regr");
    },
    login(){
      const regTel = /^1[3456789]\d{9}$/gu;
      if(regTel.test(this.tel)&&this.password!=""){
        requestLogin(this.tel,this.password).then(res=>{
          if(res.data.msg==="密码不正确"){
            alert("密码不正确")
          }else if(res.data.status===0&&res.status===200){
            alert("请先注册")
            this.$router.push("/regr");
          }else if(res.data.status===1&&res.status===200){
              this.$store.dispatch("isLoginAction",true)
              this.$router.push("/index");
          }
        })
      }else{
        alert("请输入正确手机号和密码")
      }
      
    }
  }
};
</script>
<style lang="less" scoped>
input{
  font-size: 0.37rem;
}
.header {
  width: 100%;
  height: 0.95rem;
  background-color: #ff9900;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 0.37rem;
  color: #fff;
  .back {
    position: relative;
    left: -0.5rem;
  }
  .regr {
    position: relative;
    right: -0.3rem;
  }
}
.phone,
.password,
.forget,
.button {
  margin: 0 auto;
  width: 6rem;
  font-size: 0.32rem;
  color: #333;
}
.phone {
  margin-top: 2.5rem;
  height: 0.75rem;
  border-bottom: 2px solid #666;
}
.password {
  margin-top: 0.6rem;
  height: 0.75rem;
  border-bottom: 2px solid #666;
}
.forget {
  margin-top: 0.4rem;
  margin-bottom: 0.3rem;
  text-align: right;
}
.button {
  height: 1.01rem;
  background-color: #ff9900;
  border-radius: 0.1rem;
  color: #fff;
  text-align: center;
  line-height: 1.01rem;
  font-size: 0.37rem;
}
</style>