import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入rem.hs
import "./modules/rem"

Vue.config.productionTip = false
// 加载通用样式 all in js
import "./stylesheets/mian.scss"
// 引入swiper.css样式文件
import "swiper/dist/css/swiper.min.css"

import axios from "axios"
import { InfiniteScroll,IndexList, IndexSection} from 'mint-ui';
Vue.use(InfiniteScroll); 
Vue.component("mt-index-list", IndexList);
Vue.component("mt-index-section", IndexSection);


Vue.prototype.$http = axios 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
