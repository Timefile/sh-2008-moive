<template>
  <div id="app">
    <!-- 组建的使用用尖括号  支持双标签和单标签 -->
   <FooterNav/>
    <router-view/>
  </div>
</template>

<script>
//导入需要使用的组件
import FooterNav from '@/components/FooterNav'
export default {
  components:{
    FooterNav,
  }
}
</script>

<style lang="scss" >
// <style lang="scss" scoped>
    // scoped 表示css的作用范围 只适用于本页面  
    *{
        margin: 0;
        padding: 0;
    }
    li{
        list-style: none;
    }
    html,
    body{
        height: 100%;
        //因为这个网页是移动端  touch-action:none  可以禁止页面缩放
        touch-action: none;
    }
</style>
