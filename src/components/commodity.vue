<template>
  <div>
      <img :src="item"  v-for="(item,index) in detail.shopDes" :key="index"/>
  </div>
</template>
<script>
import xiang from "../assets/img/xiangqing.png"
export default {
  name:"commodity",
  props:{
    detail:Object
  },
  data(){
      return {
          xiang
      };
  },
  munted(){
    console.log(this.detail);
  }
};
</script>
<style lang="less" scoped>
   img{
       display: block;
       margin: 0 auto;
   }
  
</style>