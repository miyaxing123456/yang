<template>
  <div>
    <header class="header">
      <search></search>
    </header>
    <main class="main">
      <aside class="aside" @click="tabChange">
        <div
          v-for="(item,index) in classify"
          class="aside-item"
          :data-index="index"
          :key="item.id"
          :class="cur==index?'active':''"
        >{{item.name}}</div>
        <!-- <div class="aslde-item" data-index=1>美妆护肤</div>
        <div class="aslde-item" data-index=2>家居生活</div>
        <div class="aslde-item" data-index=3>食品营养</div>
        <div class="aslde-item" data-index=4>全球直邮</div>-->
      </aside>
      <article class="article">
        <div class="art-item" v-for="(item) in classify[cur].list" :key="item.id">
          <div>
            <div class="pic">
              <img :src="item.thumbnail" />
            </div>
            <p>{{item.name}}</p>
          </div>
        </div>
        <!-- <div class="art-item">
          <div>
            <div class="pic">
              <img :src="sls" />
            </div>
            <p>奶粉</p>
          </div>
        </div>
        <div class="art-item">
          <div>
            <div class="pic">
              <img :src="sls" />
            </div>
            <p>奶粉</p>
          </div>
        </div>
        <div class="art-item">
          <div>
            <div class="pic">
              <img :src="sls" />
            </div>
            <p>奶粉</p>
          </div>
        </div>
        <div class="art-item">
          <div>
            <div class="pic">
              <img :src="sls" />
            </div>
            <p>奶粉</p>
          </div>
        </div>
        <div class="art-item">
          <div>
            <div class="pic">
              <img :src="sls" />
            </div>
            <p>奶粉</p>
          </div>
        </div>
        <div class="art-item">
          <div>
            <div class="pic">
              <img :src="sls" />
            </div>
            <p>奶粉</p>
          </div>
        </div>
        <div class="art-item">
          <div>
            <div class="pic">
              <img :src="sls" />
            </div>
            <p>奶粉</p>
          </div>
        </div>
        <div class="art-item">
          <div>
            <div class="pic">
              <img :src="sls" />
            </div>
            <p>奶粉</p>
          </div>
        </div>
        <div class="art-item">
          <div>
            <div class="pic">
              <img :src="sls" />
            </div>
            <p>奶粉</p>
          </div>
        </div>
        <div class="art-item">
          <div>
            <div class="pic">
              <img :src="sls" />
            </div>
            <p>奶粉</p>
          </div>
        </div>
        <div class="art-item">
          <div>
            <div class="pic">
              <img :src="sls" />
            </div>
            <p>奶粉</p>
          </div>
        </div> -->
      </article>
    </main>
    <tab class="tab"></tab>
  </div>
</template>
<script>
import { requestSendCode, requestVerifyCode } from "../util/request";
import sls from "../assets/img/sls.jpg";

export default {
  data() {
    return {
      sls,
      cur: 0,
      asideItems: [
        { id: 0, text: "母婴专区" },
        { id: 1, text: "美妆护肤" },
        { id: 2, text: "家居生活" },
        { id: 3, text: "食品营养" },
        { id: 4, text: "全球直邮" }
      ]
    };
  },
  computed: {
    classify() {
      return this.$store.getters.getClassify;
    }
  },
  methods: {
    tabChange(ev){
      this.cur=ev.target.dataset.index;
      console.log(this.cur)
    }
  },
  mounted() {
      this.$store.dispatch("requestClassifyAction");
  },
};
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 0.95rem;
  display: flex;
  background-color: #ff9900;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 3;
}
.main {
  width: 100%;
  margin-top:0.95rem;
  margin-bottom: 1.04rem;
  display:flex;
  .aside {
    width: 2.33rem;
    .aside-item {
      height: 0.95rem;
      line-height: 0.95rem;
      text-align: center;
      color: #000;
      font-size: 0.28rem;
    }
    .aside-item.active {
      color: #ff9900;
      border-left: 2px solid #1d84a7;
    }
  }
  .article {
    width: 5.16rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    .art-item {
      width: 2.22rem;
      height: 2.35rem;
      background-color: #ffffff;
      border-radius: 5px;
      border: solid 2px #1d84a7;
      margin-right:0.1rem;
      margin-top:0.24rem;
      .pic {
        width: 1.7rem;
        height: 1.72rem;
        margin: 0 auto;
        margin-top: 0.14rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      p {
        width: 100%;
        height: 0.49rem;
        line-height: 0.49rem;
        font-size: 0.23rem;
        background-color: #1d84a7;
        text-align: center;
        color: #fff;
      }
    }
  }
}
.tab {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>