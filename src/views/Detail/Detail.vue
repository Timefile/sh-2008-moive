<template>
  <div class="detail">
    <div class="img">
      <img :src="film.poster" />
    </div>
    <div class>
      <div>{{film.name}}</div>
      <div>{{film.category}}</div>
      <div>{{film.premiereAt | parsePremiereAt}}上映</div>
      <div>{{film.nation}} | {{film.runtime}} 分钟</div>
      <div>{{film.synopsis}}</div>
    </div>
  </div>
</template>

<script>
import { listDetailDeta } from "@/api/api";
import moment from 'moment'
export default {
  data() {
    return {
      //因为返回的这个数据是对象的形式
      film: {},
    };
  },
  async mounted() {
    const ret = await listDetailDeta(this.$route.params.filmId);
    // console.log(ret.data);
    this.film = ret.data.data.film;
  },
  //使用moment第三方依赖包和过滤器来进行时间的转换

  //但是moment 中的单位是秒
  
  filters:{
      parsePremiereAt:function(val){
          return moment(val*1000).format('YY-MM-DD')
      }
  }
};
</script>

<style lang="scss">
.detail {
  .img {
    width: 100%;
    height: 260px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>