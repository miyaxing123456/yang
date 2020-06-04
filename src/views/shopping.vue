<template>
  <div>
    <header class="header">
      <back class="back"></back>购物车
    </header>
    <div class="blank" v-if="!(getShoppingCar.length)">
      <div class="pic">
        <img :src="tabS" />
      </div>
      <p>购物车还是空的快去逛逛吧~</p>
    </div>
    <div class="product">
        <div class="pro-item" v-for="(item,index) in getShoppingCar" :key="index" @touchmove="touch">
            <div class="title">
                <img :src="store" />
                <span>杭州保税区仓</span>
            </div>
            <div class="main">
                <div class="check" v-show="!editShow" @click="sele(index,!item.select)">
                    <img :src="item.select?yes:no" />
                </div>
                <div class="pic">
                    <img :src="item.pic" />
                </div>
                <div class="info">
                    <p class="name">{{item.name}}<span>{{item["大小"]}}</span></p>
                    <div class="number">
                        <span @click="down(index)">-</span><input v-model="item.number" ><span @click="up(index)">+</span>
                    </div>
                </div>
                <div class="price">￥{{item.price | filterPrice}}</div>
                <div class="delete" v-show="editShow" @click="dele(index)">删除</div>
            </div>
        </div>
    </div>
    <footer class="footer">
            <div class="all">
                <img :src="allselect?yes:no" @click="allsele"/>
                全选
            </div>
            <div class="edit" @click="Edit">
                <img :src="edit" />
                编辑
            </div>
            <div class="total">
                <p>合计：{{total | filterPrice}}</p>
                <p>不含运费</P>
            </div>
            <div class="buy">去结算</div>
    </footer>
    <tab></tab>
  </div>
</template>
<script>
import tabS from "../assets/img/tab_shopping_nor.png";
import yes from "../assets/img/yes.png";
import no from "../assets/img/no.png";
import edit from "../assets/img/editor_nor.png";
import editH from "../assets/img/editor_hig.png";
import store from "../assets/img/store.png";
import sls from "../assets/img/sls.jpg";
import { mapGetters , mapActions} from "vuex";

export default {
  name: "shopping",
  data() {
    return {
      tabS,
      yes,
      no,
      edit,
      editH,
      store,
      sls,
      editShow:false,
      getShoppingCar:[]
    };
  },
  methods: {
      up(index){
        let obj={...this.getShoppingCar[index]}
        obj.number=Number(this.getShoppingCar[index].number)+1;
        this.getShoppingCar.splice(index,1,obj);
          let arr=[]
          arr.push(index);arr.push(Number(this.getShoppingCar[index].number));
          this.$store.dispatch("addnumber",arr)
    },
    down(index){
        let obj={...this.getShoppingCar[index]}
        obj.number=Number(this.getShoppingCar[index].number)-1;
        if(obj.number<1){obj.number=1}
        this.getShoppingCar.splice(index,1,obj);
          let arr=[]
          arr.push(index);arr.push(Number(this.getShoppingCar[index].number));
          this.$store.dispatch("addnumber",arr)
    },
    ShoppingCar(){
        return this.$store.getters.getShoppingCar;
    },
    sele(index,boo){
        console.log(1)
        
        // let obj=this.getShoppingCar[index]
        // this.getShoppingCar.splice(index,1,obj);
        let arr=[index,boo]
        console.log(arr)
        this.$store.dispatch("selectActions",arr)
        this.$forceUpdate()
        console.log(this.getShoppingCar)
        // let obj=this.getShoppingCar[index]
        // console.log(obj)
        // obj.select=!(this.getShoppingCar[index].select)
        // console.log(obj,this.getShoppingCar[index].select,obj.select,!(this.getShoppingCar[index].select))
        // console.log(obj)
        // this.$set(this.getShoppingCar,index,obj)
        // this.getShoppingCar.splice(index,1,obj);
        // let arr=[]
        //   arr.push(index);arr.push(!(this.getShoppingCar[index].select));
        //   console.log(arr)
        //   this.$store.dispatch("addSelect",arr)
        // console.log(this.getShoppingCar)
        // this.$store.dispatch("addSelect",index)
        // // this.getShoppingCar=this.ShoppingCar()
        // // console.log()
        // let obj={}
        // obj=this.ShoppingCar()
        // this.getShoppingCar.splice(index,1,obj);
    },
    allsele(){
        let boo=!this.allselect
        for(let i = 0;i<this.getShoppingCar.length;i++ ){
            this.sele(i,boo)
        }
        return boo
    },
    Edit(){
        this.editShow=!this.editShow
    },
    touch(ev){
        console.log(ev)
        console.log(1)
    },
    dele(index){
        this.getShoppingCar.splice(index,1);
    }
    
  },
  computed: {
      total(){
          let num=0
          let getShoppingCar=this.getShoppingCar;
          getShoppingCar.forEach((item,index) => {
              console.log(item)
              if(item.select){
                  num += item.price*item.number
              }
          });
          return num
      },
      allselect(){
          let boo=true
          let getShoppingCar=this.getShoppingCar;
          getShoppingCar.forEach((item,index) => {
              if(!item.select){
                  boo = false
              }
          });
          return boo
      }
  },
//   beforeMount(){this.getShoppingCar=this.ShoppingCar();console.log(3)},
  mounted(){
    //   this.getShoppingCar=this.ShoppingCar()
    //   .forEach((item)=>{
    //       item.select=true
    //   })
    let arr=this.ShoppingCar()
    console.log(arr);
    // arr.forEach((item)=>{
    //     item.select=true
    // })
    this.getShoppingCar=arr;
      console.log(4,this.getShoppingCar)
  },
//   updated(){console.log(6)},
//   beforeCreate(){console.log(1)},
//   created(){console.log(2)},
//   beforeUpdate(){console.log(5)}

};
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 0.95rem;
  background-color: #ff9900;
  line-height: 0.95rem;
  position: fixed;
  top: 0;
  z-index: 3;
  font-size: 0.42rem;
  text-align: center;
  color: #fff;
  .back {
    position: absolute;
    left: 0.3rem;
  }
}
.blank {
  margin-top: 5rem;
  .pic {
    width: 0.83rem;
    height: 0.88rem;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  p {
    width: 2.5rem;
    padding-top:0.3rem;
    font-size: 0.33rem;
    line-height: 0.5rem;
    letter-spacing: 0px;
    color: #333333;
    text-align: center;
    margin: 0 auto;
  }
}
.tab {
  position: fixed;
  bottom: 0;
  left: 0;
}
.footer{
    position:fixed;
    bottom:1.03rem;
    width:100%;
    height:1.15rem;
    display:flex;
    justify-content: space-between;
    background-color: #fff;
    align-items: center;
    border:1px solid #ccc;
    .all,.edit,.total{
        display:flex;
        flex-direction: column;
        // justify-content: center;
        align-items: center;
        position: relative;
        left:0.4rem;
    }
    .all img,.edit img{
        width:0.42rem;
        height:0.42rem;
        margin-bottom:0.1rem;
    }
    .all,.edit{
        font-size:0.28rem;
        color:#666;
    }
    .total{
        font-size:0.23rem;
        color:#999;
        text-align: center;
    }
    .buy{
        width: 2.33rem;
        height: 1.15rem;
        font-size:0.38rem;
        background-color: #ff5500;
        text-align:center;
        line-height: 1.15rem;
        color:#fff;
    }
}
.product{
    width:100%;
    margin-bottom:2.07rem;
    .pro-item:first-of-type{
        margin-top:1.11rem;
    }
    .pro-item{
        width:100%;
        height:3.17rem;
        .title{
            padding:0.2rem;
            img{
                width:0.36rem;
                height:0.36rem;
                margin-right:0.1rem;
            }
            span{
                font-size: 0.28rem;
                color: #999999;
                line-height: 0.18rem;
            }
        }
        .main{
            display:flex;
            justify-content: space-between;
            align-items: center;
            padding-left:0.2rem;
            .check img{
                width:0.42rem;
                height:0.42rem;
            }
            .pic{
                width:1.57rem;
                height:1.57rem;
                img{
                    width:100%;
                    height:100%;
                }
            }
            .info{
                width:2.8rem;
                display:flex;
                flex-direction: column;
                justify-content: center;
                .name{
                    font-size: 0.33rem;
                    line-height: 0.5rem;
                    color: #333333;
                    margin-bottom:0.4rem;
                    span{
                        font-size: 0.28rem;
                        line-height: 0.30rem;
                        color:#999;
                    }
                }
                .number{
                    width:2.36rem;
                    height:0.48rem;
                    line-height:0.48rem;
                    border:1px solid #ccc;
                    display:flex;
                    justify-content: space-around;
                    text-align:center;
                    font-size:0.4rem ;
                    input{
                        width:0.82rem;
                        border-left:1px solid #ccc;
                        border-right:1px solid #ccc;
                        text-align: center;
                        font-size:0.4rem;
                    }
                }
            }
            .price{
                    font-size: 0.33rem;
	                font-weight: bold;
	                line-height: 0.18rem;
	                letter-spacing: 0px;
	                color: #000000;
                }
            .delete{
                    width: 0.99rem; 
                    background-color: #ff9900; 
                    font-size: 0.33rem;
                    line-height: 2.12rem;  
                    text-align: center;
                    color: #ffffff;
                    height:2.12rem;
                }
        }
    }
}
</style>