<template>
  <div>
      <img :src="set" />
  </div>
</template>
<script>
import set from "../assets/img/set.png"
export default {
  name:"setting",
  data(){
      return {
          set
      };
  }

};
</script>
<style lang="less" scoped>
    img{
        width:0.5rem;
        height:0.5rem;
    }
  
</style>