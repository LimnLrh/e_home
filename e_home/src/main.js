// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from "./store/index"

Vue.config.productionTip = false
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import $axios from "./utils"
Vue.prototype.$axios = $axios


// router.beforeEach((to, from, next) => {
//   // console.log(to);
//   // console.log(from);
//   if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
//     if (localStorage.getItem('token')) { //判断本地是否存在token
//       next();
//     } else {
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath}
//       })
//     }
//   } else {
//     next();
//   }
//   /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
//   if (to.fullPath == "/login") {
//     if (localStorage.getItem('token')) {
//       next({
//         path: from.fullPath
//       });
//     } else {
//       next();
//     }
//   }
// });






/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
