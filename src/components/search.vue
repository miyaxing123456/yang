<template>
  <div>
    <input type="text" placeholder="你搜搜" v-model="content"/>
    <i class="icon-sousu iconfont"></i>
  </div>
</template>
<script>
export default {
  name: "search",
  data(){
      return{
          content:""
      }
  },
  methods: {
    
  }
};
</script>
<style lang="css" scoped>
div{
   width: 5.56rem;
  height: 0.62rem; 
}
input {
  width: 5.16rem;
  height: 0.62rem;
  background-color: #ffffff;
  border-radius: 0.14rem;
  opacity: 0.71;
  padding:0 0.2rem;
  font-size:0.3rem;
}
i{
    position: absolute;
    right:1rem;
    top:0.35rem;
    font-size:0.3rem;
    color:rgba(0,0,0,0.7);
}
</style>