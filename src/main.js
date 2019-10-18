import Vue from 'vue'
import App from './App.vue'

import store from './store'
// ElementUI: 1.引入element-ui
import ElementUI from  "element-ui";
// ElementUI: 2.element-ui样式导入
import 'element-ui/lib/theme-chalk/index.css';
// ElementUI: 3.全局注册插件
Vue.use(ElementUI);


//引入自定义icon
import './assets/icon/iconfont.css';

import './assets/css/v-cloak.css';


//解决点击 router-link 会造成报错的问题
import router from './router'
import Router from 'vue-router'


const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


// 全局引入echarts
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts


//三级联动引入




Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
