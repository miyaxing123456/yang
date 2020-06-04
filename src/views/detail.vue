<template>
  <div>
    <header>
      <back class="back"></back>
      <div class="right">
        <div>
          <img :src="menu" />
        </div>
        <div>
          <img :src="shopping" />
        </div>
      </div>
    </header>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item,index) in detail.swiperImgArr" :key="index">
        <div class="pic">
          <img :src="item" />
        </div>
      </swiper-slide>
      <!-- <swiper-slide>
        <div class="pic">
          <img :src="sls" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="pic">
          <img :src="sls" />
        </div>
      </swiper-slide> -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="product">
      <div class="top">
        <p class="name">
          {{detail.name}}
        </p>
        <div class="collect">
          <div class="col-pic">
            <img :src="keep" />
          </div>收藏
        </div>
      </div>
      <div class="bottom">
        <div class="price">
          <p class="new">￥{{detail.reduct_price | filterPrice}}</p>
          <p class="old">￥{{detail.original_price | filterPrice}}</p>
        </div>
        <div class="intro">
          <div class="intro-top">
            <p>8.5折</p>
            <p v-show="detail.isFreeShip">包邮</p>
          </div>
          <div class="intro-bottom">
            <p v-for="(item,index) in detail.describe" :key="index">{{item}}</p>
            <!-- <p>一件代发</p>
            <p>全球直邮</p>
            <p>售后无忧</p> -->
          </div>
        </div>
      </div>
    </div>
    <div class="blank"></div>
    <div class="tabchange" @click="tabChange">
      <p :class="cur==0?'active':''" data-index="0">商品详情</p>
      <p :class="cur==1?'active':''" data-index="1">买家口碑</p>
    </div>
    <div :is='commodity' class="change" :detail="detail" v-show="cur==0?true:false"></div>
    <div :is="comment" class="change" :detail="detail" v-show="cur==0?false:true"></div>
    <div class="bott">
      <div class="all-price">
        总价：
        <span>￥0.00</span>
      </div>
      <div class="button">
        <div class="add" @click="add">加入购物车</div>
        <div class="buy">立即购买</div>
      </div>
    </div>
    <div class="mask" v-show="showPicker" @click="showPicker=false"></div>
    <picker class="picker" v-show="showPicker" :detail="detail" @close="showPicker=false" @select="send"></picker>
  </div>
</template>
<script>
import menu from "../assets/img/icon_menu.png";
import shopping from "../assets/img/icon_shopping.png";
import sls from "../assets/img/sls.jpg";
import keep from "../assets/img/keep.png";
import commodity from "../components/commodity";
import comment from "../components/comment";
import picker from "../components/picker";
import { requestDetail } from "../util/request.js";

export default {
  components: {
    commodity,
    comment,
    picker
  },
  data() {
    return {
      menu,
      shopping,
      sls,
      keep,
      cur: 0,
      commodity,
      comment,
      picker,
      detail: {},
      showPicker:false,
      shoppingCar:{},
      swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
        }
    };
  },
  computed:{
    isSelect(){
      let name=this.detail.name;
      let pic=this.detail.swiperImgArr[0];
      let price=this.detail.reduct_price;
      let obj={};
      let number=1;
      this.detail.buySelect.forEach(item=> {
        obj[item.name]=item.list[0]
      });
      return {name,pic,price,number,...obj}
    }
  },
  methods: {
    tabChange(ev) {
      if (ev.target.dataset.index) {
        this.cur = ev.target.dataset.index;
      } else {
        return;
      }
    },
    add(){
      if(this.showPicker){
        this.$store.dispatch("changeShoppingAction",this.shoppingCar)
        console.log(this.shoppingCar)
      }
      this.showPicker=!this.showPicker;
      this.showPicker?document.body.style.overflow="hidden":document.body.style.overflow=""
      
    },
    send(selectD,number){
      this.shoppingCar={...selectD}
      this.shoppingCar["number"]=number
      this.shoppingCar.price=this.detail.reduct_price
      this.shoppingCar.pic=this.detail.swiperImgArr[0]
      this.shoppingCar.name=this.detail.name
      this.shoppingCar.select=true
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    requestDetail(this.id)
      .then(res=>{this.detail = res.data.data;})
  }
};
</script>
<style lang="less" scoped>
header {
  padding: 0.5rem 0.3rem;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  height: 0.57rem;
  background-color: #ffffff00;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  .back {
    width: 0.57rem;
    height: 0.57rem;
    text-align: center;
    line-height: 0.57rem;
    background-color: #000000;
    opacity: 0.3;
    border-radius: 50%;
    overflow: hidden;
  }
  .right {
    width: 1.53rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      width: 0.52rem;
      height: 0.52rem;
      background-color: #000000;
      opacity: 0.3;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.pic {
  padding-top: 0.4rem;
  padding-bottom: 0.5rem;
  img {
    display: block;
    max-width: 5.74rem;
    max-height: 4.99rem;
    margin: 0 auto;
  }
}
.product {
  width: 100%;
  height: 1.81rem;
  box-sizing: border-box;
  border-top: 1px solid #ccc;
  padding: 0.1rem 0.3rem;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.2rem;
    .name {
      width: 5.69rem;
      height: 0.67rem;
      font-size: 0.3rem;
      line-height: 0.38rem;
      color: #333333;
    }
    .collect {
      font-size: 0.16rem;
      line-height: 0.38rem;
      color: #e71f19;
      .col-pic {
        width: 0.36rem;
        height: 0.36rem;
        margin: 0 auto;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .bottom {
    display: flex;
    .price {
      margin-right: 0.3rem;
      .new {
        width: 1.34rem;
        height: 0.26rem;
        font-size: 0.34rem;
        line-height: 0.38rem;
        margin-bottom: 0.2rem;
        color: #eb2222;
      }
      .old {
        width: 1.01rem;
        height: 0.18rem;
        font-size: 0.24rem;
        line-height: 0.38rem;
        color: #999999;
        text-decoration: line-through;
      }
    }
    .intro {
      .intro-top {
        display: flex;
        margin-bottom: 0.1rem;
        p {
          width: 0.7rem;
          height: 0.3rem;
          background-color: #ff9900;
          text-align: center;
          line-height: 0.3rem;
          font-size: 0.2rem;
          color: #fff;
          margin-right: 0.2rem;
        }
      }
      .intro-bottom {
        display: flex;
        p {
          width: 1.06rem;
          height: 0.31rem;
          text-align: center;
          border: 1px solid #ff9900;
          font-size: 0.2rem;
          line-height: 0.31rem;
          color: #ff9900;
          margin-right: 0.2rem;
        }
      }
    }
  }
}
.blank {
  margin-top: 0.3rem;
  width: 100%;
  height: 0.25rem;
  background-color: #edecec;
}
.tabchange {
  padding: 0.3rem;
  display: flex;
  justify-content: space-around;
  p {
    width: 1.5rem;
    height: 0.4rem;
    font-size: 0.26rem;
    text-align: center;
    color: #999;
  }
  p.active {
    color: #ff9900;
    border-bottom: 1px solid #ff9900;
  }
}
.change {
  margin-bottom: 1rem;
}
.bott {
  width: 100%;
  height: 1rem;
  position: fixed;
  bottom: 0;
  font-size: 0.3rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .all-price {
    position: relative;
    left: 0.4rem;
    font-size: 0.3rem;
    color: #666;
    span {
      color: #eb2222;
    }
  }
  .button {
    display: flex;
    .buy,
    .add {
      width: 2rem;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
      color: #fff;
    }
    .add {
      background-color: #ff9900;
    }
    .buy {
      background-color: #eb2222;
    }
  }
}
.mask {
  width: 100%;
  height: 100vh;
  background-color: #7f7f7f55;
  position: absolute;
  bottom: 1rem;
  z-index:3;
  left: 0;
}
.picker {
  position: fixed;
  bottom: 1rem;
  z-index:9;
}
</style>