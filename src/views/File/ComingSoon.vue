<template>
  <div>
      <!-- 父传子绑定一个属性 -->
      <!-- :key="'film'+list.length"  这个是为了页面的渲染问题  与虚拟算法有关系  
      就是解决地址来回调的时候 加载不出来的情况
      key值尽量为1  其中的film  是随便写的
       -->
      <filmList :list ='list' :type='type' :key="'film'+list.length"/>
  </div>
</template>

<script>
//先导入
import { comingPlayingListData } from "@/api/api";

import filmList from '@/components/filmList'

export default {
  //注意用这个的话是有pageNum这个参数的
  data() {
    return {
      pageNum: 1,
      //用list存储获取的数据
      list: [],
      type:1,
    };
  },
  //页面挂在完毕之后发送请求  就用到了钩子函数
  //要注意这个函数是异步的
  async mounted() {
    let ret = await comingPlayingListData(this.pageNum);
    //想拿到这个请求的数据  要用data  ret.data
    // console.log(ret.data.data.films);
    this.list = ret.data.data.films;
  },
  //因为引用的是组件所以要注册
components:{
    filmList,
}
};
</script>