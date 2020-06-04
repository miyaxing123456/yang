<template>
  <div>
    <header class="header">
      <back class="back"></back>
      <span>注册</span>
      <span class="regr" @click="login">登录</span>
    </header>
    <div class="phone">
      <span>手机号：</span>
      <input type="number" v-model="tel" />
    </div>
    <div class="password">
      <span>密码：</span>
      <input type="password" v-model="password" />
    </div>
    <div class="capt">
      <span>验证码:</span>
      <input type="text" v-model="capt" />
      <span class="red">点击获取</span>
    </div>
    <div class="button" @click="next">下一步</div>
    <div class="argee">
      <img :src="argee?imgs.yes:imgs.no" @click="argee=!argee" />
      我已阅读并同意使用条款和隐私政策
    </div>
  </div>
</template>
<script>
import { requestRegi } from "../util/request";
import yes from "../assets/img/yes.png";
import no from "../assets/img/no.png";

export default {
  data() {
    return {
      tel: "",
      password: "",
      capt: "",
      argee: false,
      imgs: {
        yes,
        no
      }
    };
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    next() {
      // this.$router.push("/login");
      const regTel = /^1[3456789]\d{9}$/gu;
      if (this.argee) {
        if (regTel.test(this.tel) && this.password != "") {
          requestRegi(this.tel, this.password).then(res => {
            if (res.data.status === 1 && res.status === 200) {
              alert("注册成功");
              this.$router.push("/login");
            }else if(res.data.msg.indexOf("已注册")){
              alert("该手机号已经注册，请直接登录或者修改手机号")
            }
          });
        } else {
          alert("请输入正确手机号和密码");
        }
      }else{
        alert("请同意使用条款")
      }
    }
  }
};
</script>
<style lang="less" scoped>
input {
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
.capt,
.button,
.argee {
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
.password,
.capt {
  margin-top: 0.6rem;
  height: 0.75rem;
  border-bottom: 2px solid #666;
}
.capt {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.3rem;
  input {
    width: 50%;
  }
  .red {
    color: #fe0041;
  }
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
.argee {
  margin-top: 0.5rem;
  font-size: 0.28rem;
  color: #666666;
  img {
    width: 0.3rem;
    height: 0.3rem;
    margin-right: 0.1rem;
  }
}
</style>