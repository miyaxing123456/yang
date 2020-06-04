import Vue from 'vue'
import Vuex from 'vuex'
import { requestIndex,requestClassify } from "../util/request"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    index: [],
    classify:[],
    shoppingCar:[]
  },
  mutations: {
    changeIsLogin(state, status) {
      state.isLogin = status;
    },
    changeIndex(state, list) {
      state.index = list
    },
    changeClassify(state,list){
      state.classify=list
    },
    changeShopping(state,obj){
      state.shoppingCar.push(obj)
    },
    changenumber(state,arr){
      console.log(arr)
      let id=arr[0];
      let number=arr[1];
      state.shoppingCar[id].number=number
      console.log(state)
    },
    changeselect(state,arr){
      console.log(arr)
      let id=arr[0];
      let boo=arr[1];
      state.shoppingCar[id].select=boo
      console.log(state.shoppingCar[id].select)
      console.log(state)
    }
  },
  actions: {
    isLoginAction(context, status) {
      context.commit("changeIsLogin", status)
    },
    requestListAction(context) {
      if (context.state.index.length> 0) {
        return;
      }
      requestIndex().then(res => {
        context.commit("changeIndex", res.data.data)
      })
    },
    requestClassifyAction(context) {
      if (context.state.classify.length> 0) {
        return;
      }
      requestClassify().then(res => {
        context.commit("changeClassify", res.data.data)
      })
    },
    changeShoppingAction(context,obj){
      context.commit("changeShopping",obj)
    },
    addnumber(context,arr){
      console.log(2,arr)
      context.commit("changenumber",arr)
    },
    selectActions(context,arr){
      console.log(2,arr)
      context.commit("changeselect",arr)
    }
  },
  modules: {
  },
  getters: {
    getIsLogin(state) {
      return state.isLogin
    },
    getIndex(state) {
      return state.index
    },
    getClassify(state){
      return state.classify
    },
    getShoppingCar(state){
      return state.shoppingCar
    }
  }
})
