import Vue from 'vue'
import App from './App.vue'
//导入路由模块
import VueRouter from 'vue-router'

//导入Mint-ui组件
// 引入全部组件
import Mint from 'mint-ui';
//样式
import '../node_modules/mint-ui/lib/style.css'
import './assets/lib/css/mui.css'
import './assets/lib/css/icons-extra.css'
import './assets/lib/fonts/mui-icons-extra.ttf' 
Vue.use(Mint);

// 整合axios 
import axios from 'axios'
// 设置基地址
axios.defaults.baseURL = 'https://autumnfish.cn';
// 把axios设置给Vue的原型
Vue.prototype.$axios = axios

//注册理由模块
Vue.use(VueRouter)
//引入路由模块
import router from './router'

Vue.config.productionTip = false  //不显示生产信息

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
