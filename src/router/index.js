import Vue from 'vue'
import VueRouter from 'vue-router'

import centerRouter from './routes/center'
import cinemaRouter from './routes/cinema'
import filmRouter from './routes/film'
import detailRouter from './routes/detail'

Vue.use(VueRouter)

//定制路由规则
const routes = [

  {
    path: '/',
    redirect: '/film'
  },
  centerRouter,
  cinemaRouter,
  filmRouter,
  detailRouter,
]

const router = new VueRouter({
  mode: 'history',

  base: process.env.BASE_URL,
  
  routes
})

export default router
