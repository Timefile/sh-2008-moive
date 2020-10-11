<template>
    <div>
        <FilmListTop :class="fixed ? 'fixed' : ''"></FilmListTop>
        <router-view/>
    </div>
</template>

<script>
import FilmListTop from '@/components/FilmlistTopNav'
export default {
    data() {
        return {
            fixed:false
        }
    },
    //注册组件
    components:{
       FilmListTop, 
    },
    mounted() {
        //由于是跟滚动条有关系  用原生js
        window.addEventListener('scroll',(e)=>{
            let top = document.documentElement.scrollTop
            console.log(top);
        if(top>120){
                this.fixed = true
            }else{
              this.fixed = false  
            }
        })
    },
}
</script>

<style lang="scss">
.fixed {
  position: fixed;
  top: 0;
  background: #ffffff;
}

</style>