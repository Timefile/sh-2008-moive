import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// import axios from 'axios'
// //由于请求的域名比较长  可以将公共的部分提取出来
// //这个在下方请求的时候会自动机你选哪个拼接
// axios.defaults.baseURL= 'https://m.maizuo.com/'

// //拦截器
// axios.interceptors.request.use(
//   function(config){
//     //因为头不止一个 所以要用对象
//     config.headers={
//       "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.0.4","e":"16022374572884620295077894","bc":"440300"}',
//       "X-Host": 'mall.film-ticket.film.list',
//     }

//     //返回配置
//   return config
// },
// function(err){
  
// })

// // 请求
// axios.get('gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=5008239')

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
