//调用封装进行具体的请求

//先导入请求地址  和封装好的axios

import http from '@/api/http'
//导入请求地址的时候一定要用两个参数  因为导出的时候的按需导出两个 要用两个参数进行接收
//注意这个导入的时候名字要导出的时候一致
import {nowPlayingListUrl,comingplayingListUrl,listDetailUrl} from '@/config/url'
//因为请求的时候要穿第一个参数  所以要写成函数的形式
export const nowPlayingListData = (pageNum)=>{
    http.defaults.headers.info = 'film'
  return http.get(nowPlayingListUrl+pageNum)
}
export const comingPlayingListData = (pageNum)=>{
   
//因为是函数需要导出  所以return不要忘记
  return http.get(comingplayingListUrl+pageNum)
}
//请求电影详情的数据
export const listDetailDeta = (filmId)=>{
    http.defaults.headers.info = 'info'
    return http.get(listDetailUrl+filmId)
}