// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import "./javascripts/rem.js";
import "./stylesheets/main.scss";


import Vue from 'vue'   // es6
import App from './App'
import router from './router/index.js' //导入文件路由

// 引入mint-ui,无限滚动,提示
import { InfiniteScroll} from 'mint-ui';
Vue.use(InfiniteScroll);




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
// 入口的js文件