<template>
  <div class="picker">
    <div class="info">
      <div class="pic">
        <img :src="detail.swiperImgArr[0]" />
      </div>
      <div class="info-info">
        <p class="price">￥{{detail.reduct_price | filterPrice}}</p>
        <p>库存{{detail.total}}件</p>
        <p>请选择商品属性</p>
      </div>
      <div class="close" @click="cancel">
        <i class="iconfont icon-guanbi"></i>
      </div>
    </div>
    <div class="number">
      <p class="text">购买数量</p>
      <div class="control">
        <p @click="down">-</p>
        <input type="number" v-model="number" />
        <p @click="up">+</p>
      </div>
    </div>
    <div class="other" v-for="(items,index) in detail.buySelect" :key="index">
      <div class="other-title">{{items.name}}</div>
      <div class="other-list">
        <span v-for="(item,index) in items.list" :key="index" :class="select[items.name]===item?'active':''" @click="selectChange(item,items.name)">{{item}}</span>
        <!-- <span>2L</span>
        <span>3L</span>
        <span>4L</span> -->
      </div>
    </div>
    <!-- <div class="other">
      <div class="other-title">年龄</div>
      <div class="other-list">
        <span>5岁以下</span>
        <span>3岁以下</span>
      </div>
    </div> -->
  </div>
</template>
<script>
import sls from "../assets/img/sls.jpg";
export default {
  name: "commodity",
  props:{detail:Object},
  data() {
    return {
      sls,
      number: 1,
      select:{大小:"1L",年龄:"5岁以下"}
      // // select:{}
      // selectOne:{}
    };
  },
  // watch:{
  //   select(){
      
  //   }
  // },
  computed:{
    // select(){
    //   let obj={};
    //   // this.selectOne.forEach((key,value)=>{
    //   //   obj[key]=value;
    //   // });
    //   for(let key in this.selectOne){
    //     obj[key]=this.selectOne[key]
    //   }
    //   return obj
    // }
  },
  methods:{
    cancel(){
      this.$emit("close");
    },
    up(){
      this.number += 1
      this.$emit("select",this.select,this.number)
    },
    down(){
      if(this.number<=1){
        this.number=0
      }else {
        this.number -= 1
      }
      this.$emit("select",this.select,this.number)
    },
    selectChange(item,name){
      this.select[name]=item
      this.$emit("select",this.select,this.number)
    }
  },
  // beforeUpdate(){
  //   console.log(1);
  //   this.detail.buySelect.forEach(item => {
  //       this.selectOne[item.name]=item.list[0]
  //       // this.$set(select,item.name,item.list[0])
  //     });
  //   console.log(this.select)
  // }
  
};
</script>
<style lang="less" scoped>
.picker {
  padding: 0.3rem 0.2rem 0 0.2rem;
  box-sizing: border-box;
  width:100%;
  background-color:#fff;
  .info {
    position: relative;
    display: flex;
    .pic {
      width: 2.02rem;
      height: 2.02rem;
      margin-right:0.3rem;
      border: solid 0.07rem #dddddd;
      position: relative;
         top: -0.7rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .info-info {
      p {
        font-size: 0.25rem;
        color: #333;
      }
      .price {
        font-size: 0.3rem;
        color: #eb2222;
      }
    }
    .close {
      width: 0.56rem;
      height: 0.56rem;
      position: absolute;
      top: -0.2rem;
      right: -0.1rem;
      .iconfont{
          font-size: 0.5rem;
      }
    }
  }
  .number {
    padding: 0.3rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text {
      font-size: 0.3rem;
      color: #333;
    }
    .control {
      width: 3rem;
      height: 0.5rem;
      display: flex;
      justify-content: flex-end;
      p {
        width: 0.5rem;
        height: 0.5rem;
        background-color: #999;
        font-size: 0.4rem;
        text-align: center;
        line-height: 0.5rem;
        color: #fff;
      }
      input {
          width:1.5rem;
          border-top:1px solid #ccc;
          border-bottom:1px solid #ccc;
        text-align: center;
        line-height: 0.5rem;
      }
    }
  }
  .other {
    padding: 0.2rem 0;
    .other-title {
      font-size: 0.3rem;
      color: #333;
      padding-bottom: 0.2rem;
    }
    .other-list {
      display: flex;
      span {
        width: 1.2rem;
        height: 0.45rem;
        background-color: #ddd;
        color:#999;
        border-radius: 0.12rem;
        margin-right: 0.2rem;
        text-align: center;
        line-height: 0.45rem;
      }
      span.active{
        background-color: #ff9900;
        color:#fff;
      }
    }
  }
}
</style>