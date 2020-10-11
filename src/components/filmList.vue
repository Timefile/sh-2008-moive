<template>
    <div class="list">
        <Loading v-if="loading"></Loading>
    <div class="item" v-else v-for="(item,index) in list" :key="index" @click="goDetail(item.filmId)">
    <div class="left">
        <img :src="item.poster"/>
    </div>
    <div class="middle">
        <div>{{item.name}}</div>
        <div>
            <span>观众评分 </span>
            <span class="gread">{{item.grade}}</span>
        </div>
        <!-- 因为这个演员的存储方式不是个字符串 所以可以用过滤器 
        实际上就是一个函数 将actors中的name拿出来
        -->
        <div>主演: {{item.actors | parseActors}}</div>
        <div>{{item.nation}} | {{item.runtime}}分钟</div>
    </div>
    <div class="right">
        <span v-if="type==1">购票</span>
        <span v-else>预售</span>
    </div>
</div>
    </div>
</template>

<script>
import Loading from '@/components/Loading'
export default {
    data() {
        return {
            loading:true
        }
    },
    //使用这个进行接收父级传输过来的数据
    props:['list','type'],
    components:{
        Loading,
    },
    created() {
        //判断是否有获取到数据
        if(this.list.length>0){
            this.loading = false
        }
        else{
            this.loading = true
        }
    },
    filters:{
        parseActors:function(val){
            let actors = ''
            val.forEach(element => {
              actors += element.name + ' '
            });
            return actors
        }
    },
    methods: {
        goDetail:function(filmId){
            //导航有两种方式   一种是声明式  一种是编程式
            //现在是编程式
            this.$router.push({name:'detail',params:{filmId}})

        }
    },
}
</script>

<style lang="scss">
   .list{
       margin-bottom: 50px;
        .item {
    margin-top: 15px;
    padding-bottom: 15px;
    display: flex;
    color: #797d82;
    font-size: 13px;
    border-bottom: 1px solid #ededed;

    .left {
        width: 77px;
        height: 100px;
        margin-left: 20px;
        img {
            width: 66px;
            height: 100%;
        }
    }

    .middle {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 55%;

        div:nth-of-type(1) {
            color: #191a1b;
            font-size: 16px;
        }

        div:nth-of-type(3) {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .gread{
            color: #ffb232;
            font-size: 18px;
        }
    }

    .right {
        width: 15%;
        display: flex;
        align-items: center;
        margin-right: 20px;

        span {
            border: 1px solid #ff5f16;
            background: white;
            color: #ff5f16;
            border-radius: 2px;
            height: 25px;
            line-height: 25px;
            font-size: 13px;
            width: 50px;
            text-align: center;
        }
    }
}
   } 
   
</style>