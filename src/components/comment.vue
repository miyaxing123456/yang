<template>
  <div class="main">
    <div class="sort" @click="tabChange">
      <div class="sort-item" data-index="0" :class="cur==0?'active':''">全部评价</div>
      <div class="sort-item" data-index="1" :class="cur==1?'active':''">好评</div>
      <div class="sort-item" data-index="2" :class="cur==2?'active':''">差评</div>
      <div class="sort-item" data-index="3" :class="cur==3?'active':''">晒单</div>
    </div>
    <div class="all" v-show="cur==0?true:false">
      <div class="list" v-for="(item,index) in detail.buyerReviews.all" :key="index">
        <div class="list-title">
          <span class="name">{{item.buyerName}}</span>
          <span class="time">{{item.createTime | filterTime}}</span>
        </div>
        <div class="pic">
          <img :src="item" v-for="(item,index) in item.postImg" :key="index" />
        </div>
        <p class="comm">{{item.postDescribe}}</p>
        <p class="reply">{{item.adminReviews}}</p>
      </div>
    </div>
    <div class="bad" v-show="cur==1?true:false">
      <div class="list" v-for="(item,index) in detail.buyerReviews.good" :key="index">
        <div class="list-title">
          <span class="name">{{item.buyerName}}</span>
          <span class="time">{{item.createTime | filterTime}}</span>
        </div>
        <div class="pic">
          <img :src="item" v-for="(item,index) in item.postImg" :key="index" />
        </div>
        <p class="comm">{{item.postDescribe}}</p>
        <p class="reply">{{item.adminReviews}}</p>
      </div>
    </div>
    <div class="good" v-show="cur==2?true:false">
      <div class="list" v-for="(item,index) in detail.buyerReviews.bad" :key="index">
        <div class="list-title">
          <span class="name">{{item.buyerName}}</span>
          <span class="time">{{item.createTime | filterTime}}</span>
        </div>
        <div class="pic">
          <img :src="item" v-for="(item,index) in item.postImg" :key="index" />
        </div>
        <p class="comm">{{item.postDescribe}}</p>
        <p class="reply">{{item.adminReviews}}</p>
      </div>
    </div>
    <div class="postForm" v-show="cur==3?true:false">
      <div class="list" v-for="(item,index) in detail.buyerReviews.postForm" :key="index">
        <div class="list-title">
          <span class="name">{{item.buyerName}}</span>
          <span class="time">{{item.createTime | filterTime}}</span>
        </div>
        <div class="pic">
          <img :src="item" v-for="(item,index) in item.postImg" :key="index" />
        </div>
        <p class="comm">{{item.postDescribe}}</p>
        <p class="reply">{{item.adminReviews}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import sls from "../assets/img/sls.jpg";
export default {
  name: "comment",
  props: {
    detail: Object
  },
  data() {
    return {
      cur: 0,
      sls
    };
  },
  methods: {
    tabChange(ev) {
      if (ev.target.dataset.index) {
        this.cur = ev.target.dataset.index;
      } else {
        return;
      }
    }
  },
  munted() {
    console.log(this.detail);
  }
};
</script>
<style lang="less" scoped>
.main {
  padding: 0.1rem 0.2rem;
  .sort {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.1rem;
    .sort-item {
      width: 1.36rem;
      height: 0.51rem;
      background-color: #999999;
      border-radius: 0.23rem;
      font-size: 0.24rem;
      line-height: 0.51rem;
      text-align: center;
      color: #fff;
    }
    .sort-item.active {
      background-color: #ff9900;
    }
  }
  .list {
    border-top: 1px solid #ccc;
    .list-title {
      display: flex;
      justify-content: space-between;
      margin: 0.1rem 0;
      .name {
        font-size: 0.24rem;
        line-height: 0.38rem;
        color: #ff9900;
      }
      .time {
        font-size: 0.18rem;
        color: #999;
      }
    }
    .pic {
      margin: 0.2rem 0;
      img {
        width: 1.51rem;
        height: 1.51rem;
        margin-right: 0.2rem;
      }
    }
    .comm {
      font-size: 0.2rem;
      line-height: 0.38rem;
      color: #999999;
    }
    .reply {
      width: 6.9rem;
      background-color: #dddddd;
      padding-top: 0.1rem;
      padding-bottom: 0.1rem;
      border-radius: 0.12rem;
      font-size: 0.18rem;
      line-height: 0.25rem;
      color: #666666;
    }
  }
}
</style>