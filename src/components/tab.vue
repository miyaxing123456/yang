<template>
  <div class="tab">
    <div class="tab-item" @click="toindex">
      <div>
        <img :src="home" />
      </div>
      <p :style={color:homeC}>首页</p>
    </div>
    <div class="tab-item" @click="tomenu">
      <div>
        <img :src="menu" />
      </div>
      <p :style={color:menuC}>分类</p>
    </div>
    <div class="tab-item" @click="toshopping">
      <div>
        <img :src="shopping" />
      </div>
      <p :style={color:shoppingC}>购物车</p>
    </div>
    <div class="tab-item" @click="tome">
      <div>
        <img :src="me" />
      </div>
      <p :style={color:meC}>我</p>
    </div>
  </div>
</template>
<script>
import tabHH from "../assets/img/tab_home_hig.png";
import tabH from "../assets/img/tab_home_nor.png";
import tabMH from "../assets/img/tab_me_hig.png";
import tabM from "../assets/img/tab_me_nor.png";
import tabMeH from "../assets/img/tab_menu_hig.png";
import tabMe from "../assets/img/tab_menu_nor.png";
import tabSH from "../assets/img/tab_shopping_hig.png";
import tabS from "../assets/img/tab_shopping_nor.png";

export default {
  name: "tab",
  methods: {
      toindex(){
          this.$router.push("/index")
      },
      tomenu(){
          this.$router.push("/menu")
      },
      toshopping(){
          this.$router.push("/shopping")
      },
      tome(){
          this.$router.push("/me")
      }
  },
  computed: {
    home() {
      return this.$route.path === "/index" ? tabHH : tabH;
    },
    menu() {
      return this.$route.path === "/menu" ? tabMeH : tabMe;
    },
    shopping() {
      return this.$route.path === "/shopping" ? tabSH : tabS;
    },
    me() {
      return this.$route.path === "/me" ? tabMH : tabM;
    },
    homeC() {
      return this.$route.path === "/index" ? "#fb9b00" : "#000";
    },
    menuC() {
      return this.$route.path === "/menu" ? "#fb9b00" : "#000";
    },
    shoppingC() {
      return this.$route.path === "/shopping" ? "#fb9b00" : "#000";
    },
    meC() {
      return this.$route.path === "/me" ? "#fb9b00" : "#000";
    }
  }
};
</script>
<style lang="less" scoped>
.tab {
  width: 100%;
  height: 1.04rem;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .tab-item {
      div{
          text-align: center;
      }
    img {
      width: 0.43rem;
      height: 0.43rem;
    }
    p {
      font-size: 0.23rem;
      line-height: 0.30rem;
      text-align: center;
      margin-top:0.1rem;
    }
  }
}
</style>