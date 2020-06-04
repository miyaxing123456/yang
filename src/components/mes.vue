<template>
  <div class="mes">
    <img :src="mes" />
    <div class="number" v-show="!(number.length===0)">{{number}}</div>
  </div>
</template>
<script>
import mes from "../assets/img/news.png"
export default {
  name: "mes",
  data() {
    return {
        mes,
      number:"9+"
    };
  }
};
</script>
<style lang="less" scoped>
.mes {
  position: relative;
}
img {
  width: 0.53rem;
  height: 0.53rem;
}
.number {
  width: 0.34rem;
  height: 0.34rem;
  line-height: 0.34rem;
  border-radius: 50%;
  text-align: center;
  background-color: #ff0000;
  color: #fff;
  position: absolute;
  top:-0.15rem;
  right:-0.15rem;
  font-size:0.19rem;
}
</style>