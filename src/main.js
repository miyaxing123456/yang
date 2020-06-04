import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import VueAwesomeSwiper from 'vue-awesome-swiper'
//import 'swiper/css/swiper.css'
import "./assets/css/reset.css"
import "./assets/js/rem"
import "./assets/font/iconfont.css"
import "./assets/font2/iconfont.css"

import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.config.productionTip = false
//Vue.use(VueAwesomeSwiper)

//处理全局组件
import commonComponent from "./components"
for(var i in commonComponent){
  Vue.component(i,commonComponent[i])
}

//处理过滤器
import filters from "./filter"
for(var i in filters){
  Vue.filter(i,filters[i])
}

router.beforeEach((to, from, next) => {
  if(to.path==="/login"){
    next();
    return;
  }
  var isLogin=store.state.isLogin;
  if(isLogin){
    next();
    return;
  }
  next("/login")
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
