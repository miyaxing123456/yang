<template>
  <div @click="back"><i class="iconfont icon-arrow-left-copy"></i></div>
</template>
<script>
export default {
  name:"back",
  methods:{
    back(){
      this.$router.go(-1);
    }
  }

};
</script>
<style lang="css" scoped>
i{
  width:0.24rem;
	height:0.42rem;
  color: #ffffff;
  font-size:0.42rem;
}
  
</style>