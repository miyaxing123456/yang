<template>
  <div>
    <header class="header" :style="{backgroundColor:bgC}">
      <search class="search"></search>
    </header>
    <div class="ad">
      <img :src="adImg" />
    </div>
    <main>
      <article v-for="(item,index) in list" :key="index">
        <div class="title">
          <img :src="hot" />
          <span>{{item.name}}</span>
        </div>
        <div class="product">
          <div
            class="product-item"
            v-for="proItem in item.list"
            :key="proItem.id"
            @click="toDetail(proItem.id)"
          >
            <div class="pic">
              <img :src="proItem.thumbnail" />
            </div>
            <p class="price">
              <span class="new">￥{{proItem.reduct_price | filterPrice}}</span>
              <span class="old">￥{{proItem.original_price | filterPrice }}</span>
            </p>
            <p class="name">{{proItem.name}}</p>
          </div>
          <!-- <div class="product-item">
            <div class="pic">
              <img :src="adImg" />
            </div>
            <p class="price">
              <span class="new">￥88.00</span>
              <span class="old">￥88.00</span>
            </p>
            <p class="name">
              美国/SUPER MILD沐
              浴露500ml
            </p>
          </div>
          <div class="product-item">
            <div class="pic">
              <img :src="adImg" />
            </div>
            <p class="price">
              <span class="new">￥88.00</span>
              <span class="old">￥88.00</span>
            </p>
            <p class="name">
              美国/SUPER MILD沐
              浴露500ml
            </p>
          </div>-->
        </div>
      </article>
      <!-- <article>
        <div class="title">
          <img :src="hot" />
          <span>今日疯抢</span>
        </div>
        <div class="product">
          <div class="product-item">
            <div class="pic">
              <img :src="adImg" />
            </div>
            <p class="price">
              <span class="new">￥88.00</span>
              <span class="old">￥88.00</span>
            </p>
            <p class="name">
              美国/SUPER MILD沐
              浴露500ml
            </p>
          </div>
          <div class="product-item">
            <div class="pic">
              <img :src="adImg" />
            </div>
            <p class="price">
              <span class="new">￥88.00</span>
              <span class="old">￥88.00</span>
            </p>
            <p class="name">
              美国/SUPER MILD沐
              浴露500ml
            </p>
          </div>
          <div class="product-item">
            <div class="pic">
              <img :src="adImg" />
            </div>
            <p class="price">
              <span class="new">￥88.00</span>
              <span class="old">￥88.00</span>
            </p>
            <p class="name">
              美国/SUPER MILD沐
              浴露500ml
            </p>
          </div>
        </div>
      </article>
      <article>
        <div class="title">
          <img :src="hot" />
          <span>今日疯抢</span>
        </div>
        <div class="product">
          <div class="product-item">
            <div class="pic">
              <img :src="adImg" />
            </div>
            <p class="price">
              <span class="new">￥88.00</span>
              <span class="old">￥88.00</span>
            </p>
            <p class="name">
              美国/SUPER MILD沐
              浴露500ml
            </p>
          </div>
          <div class="product-item">
            <div class="pic">
              <img :src="adImg" />
            </div>
            <p class="price">
              <span class="new">￥88.00</span>
              <span class="old">￥88.00</span>
            </p>
            <p class="name">
              美国/SUPER MILD沐
              浴露500ml
            </p>
          </div>
          <div class="product-item">
            <div class="pic">
              <img :src="adImg" />
            </div>
            <p class="price">
              <span class="new">￥88.00</span>
              <span class="old">￥88.00</span>
            </p>
            <p class="name">
              美国/SUPER MILD沐
              浴露500ml
            </p>
          </div>
        </div>
      </article>-->
    </main>
    <tab class="tab"></tab>
  </div>
</template>
<script>
import adImg from "../assets/img/sls.jpg";
import hot from "../assets/img/hot.png";


export default {
  data() {
    return {
      adImg,
      hot,
      bgC: ""
    };
  },
  computed: {
    list() {
      return this.$store.getters.getIndex;
    }
  },
  methods: {
    handleScroll() {
      const top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      if (top > 200) {
        this.bgC = "#ff9900";
      } else {
        this.bgC = "";
      }
    },
    toDetail(id) {
      this.$router.push("/detail/" + id);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll),
      this.$store.dispatch("requestListAction");
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 3;
}
.ad {
  width: 100%;
  height: 4.75rem;
  img {
    width: 100%;
    height: 100%;
  }
}
main {
  article {
    margin-left: 0.15rem;
    margin-top: 0.15rem;
    height: 5.43rem;
    .title {
      margin-bottom: 0.15rem;
      img {
        width: 0.3rem;
        height: 0.4rem;
        margin-right: 0.15rem;
      }
      span {
        font-size: 0.28rem;
        line-height: 0.3rem;
        color: #333333;
      }
    }
    .product {
      display: flex;
      overflow: hidden;
      .product-item {
        width: 2.69rem;
        height: 4.1rem;
        background-color: #ffffff;
        border: solid 2px #eeeeee;
        padding: 0.3rem 0.4rem 0.2rem 0.2rem;
        margin-right: 0.3rem;
        .pic {
          width: 2.58rem;
          height: 2.63rem;
          margin: 0 auto;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .price {
          display: flex;
          justify-content: space-between;
          margin-top: 0.3rem;
          .new {
            font-size: 0.33rem;
            line-height: 0.3rem;
            color: #e60012;
          }
          .old {
            font-size: 0.28rem;
            line-height: 0.3rem;
            color: #666666;
            text-decoration: line-through;
          }
        }
        .name {
          margin-top: 0.2rem;
          width: 2.64rem;
          height: 0.65rem;
          font-size: 0.28rem;
          line-height: 0.3rem;
          color: #666666;
        }
      }
    }
  }
  article:last-of-type {
    margin-bottom: 1.04rem;
  }
}
.tab {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>