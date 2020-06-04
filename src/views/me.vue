<template>
  <div>
    <header>
      <setting class="setting"></setting>
      <span>个人中心</span>
      <mes class="mes"></mes>
    </header>
    <div class="avator">
      <div class="pic">
        <img :src="sls" />
      </div>
      <p>{{name}}</p>
    </div>
    <div class="collect">
      <div class="pic">
        <img :src="keep" />
      </div>
      <span>我的收藏（{{collectN}}）</span>
    </div>
    <div class="blank"></div>
    <div class="order">
      <div class="my">
        <p>我的订单</p>
        <p>查看全部订单</p>
      </div>
      <div class="list">
        <div class="list-item">
          <div class="pic">
            <img :src="boli" />
          </div>
          <p>待付款</p>
          <div class="number" v-show="!(number.length===0)">{{number}}</div>
        </div>
        <div class="list-item">
          <div class="pic">
            <img :src="per" />
          </div>
          <p>待发货</p>
          <div class="number" v-show="!(number.length===0)">{{number}}</div>
        </div>
        <div class="list-item">
          <div class="pic">
            <img :src="con" />
          </div>
          <p>待收货</p>
          <div class="number" v-show="!(number.length===0)">{{number}}</div>
        </div>
        <div class="list-item">
          <div class="pic">
            <img :src="eva" />
          </div>
          <p>待评价</p>
          <div class="number" v-show="!(number.length===0)">{{number}}</div>
        </div>
        <div class="list-item">
          <div class="pic">
            <img :src="ref" />
          </div>
          <p>退款/评价</p>
          <div class="number" v-show="!(number.length===0)">{{number}}</div>
        </div>
      </div>
    </div>
    <div class="blank"></div>
    <div class="address">
        收货地址管理
    </div>
    <tab class="tab"></tab>
  </div>
</template>
<script>
import sls from "../assets/img/sls.jpg";
import keep from "../assets/img/keep.png";
import boli from "../assets/img/icon_boligation.png";
import con from "../assets/img/icon_consignee.png";
import eva from "../assets/img/icon_evaluate.png";
import ref from "../assets/img/icon_refund.png";
import per from "../assets/img/prepare.png";
export default {
  data() {
    return {
      sls,
      keep,
      boli,
      con,
      eva,
      ref,
      per,
      name: "小不点儿",
      collectN: 5,
      number: "9+"
    };
  }
};
</script>
<style lang="less" scoped>
header {
  width: 100%;
  height: 0.99rem;
  background-color: #ff9900;
  font-size: 0.42rem;
  color: #fefefe;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .setting {
    position: relative;
    left: -0.3rem;
  }
  .mes {
    position: relative;
    right: -0.3rem;
  }
}
.avator {
  width: 100%;
  height: 2.31rem;
  background-color: #ff9900;
  position: relative;
  .pic {
    width: 2rem;
    height: 2rem;
    border: 0.09rem solid #fff;
    border-radius: 50%;
    overflow: hidden;
    transform: translateX(-50%);
    position: absolute;
    left: 50%;
    bottom: -0.6rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  p {
    transform: translateX(-50%);
    position: absolute;
    left: 50%;
    bottom: -1rem;
    margin: 0 auto;
    font-size: 0.33rem;

    color: #333333;
  }
}
.collect {
  margin-top: 1.6rem;
  margin-bottom: 0.6rem;
  padding-left: 0.3rem;
  display: flex;
  align-items: center;
  .pic {
    width: 0.5rem;
    height: 0.5rem;
    margin-right: 0.3rem;
    img {
      width: 95%;
      height: 95%;
    }
  }
  span {
    font-size: 0.33rem;
    color: #333333;
  }
}
.blank {
  width: 100%;
  height: 0.15rem;
  background-color: #edecec;
}
.order {
  .my {
    padding: 0.1rem 0.3rem;
    height: 1.24rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.33rem;
    color: #333333;
    border-bottom: 1px solid #ccc;
    p:nth-child(2) {
      color: #999999;
    }
  }
  .list {
    padding: 0.45rem 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .list-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      .pic {
        width: 0.56rem;
        height: 0.47rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      p {
        font-size: 0.23rem;
        color: #666666;
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
        top: -0.15rem;
        right: -0.12rem;
        font-size: 0.19rem;
      }
    }
  }
}
.address{
    font-size: 0.33rem;
    color: #999999;
    height:1.3rem;
    line-height:1.3rem;
    padding-left:0.3rem;
}
.tab{
    position: fixed;
    bottom:0;
    left:0;
}
</style>