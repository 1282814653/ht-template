import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// element ui 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 安装 normalize.css
import 'normalize.css/normalize.css'
// 全局 样式
import "@/styles/index.scss"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
