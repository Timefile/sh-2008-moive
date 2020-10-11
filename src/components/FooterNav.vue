<template>
    <div class="nav">
    <ul>
        <!-- 如果想要点击的话  必须要使用vue的导航有两种方式   声明式导航  编程式导航 -->
        <!-- 声明式导航中  to 是跳转的地方 分别是电影页面、个人中心。。。。-->
        <!-- 还有一个属性  tag='li'  这样就是生成的是li标签  不写的话默认是a标签-->
        <!-- 固定属性  active-class='active' 这个是点击后的样式 -->
        <router-link to="/film" tag="li" active-class="active">
            <i class="iconfont icondianying"></i>
            <p>电影</p>
        </router-link>
        <router-link to="/cinema" tag="li" active-class="active">
            <i class="iconfont iconyingyuan"></i>
            <p>影院</p>
        </router-link>
        <router-link to="/center" tag="li" active-class="active">
            <i class="iconfont icongeren"></i>
            <p>我的</p>
        </router-link>
    </ul>
    </div>
</template>

<script>
//引入cssicon图标
import('@/assets/iconfont/iconfont.css')
export default {
    
}
</script>


<style lang="scss" scoped>
.nav {
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid #ccc;
    height: 50px;
    text-align: center;
    background: #fff;
    color: #7a7e83;
    width: 100%;

    ul {
        display: flex;
        align-items: center;
        li {
            margin-top: 5px;
            flex: 1;
            height: 43px;
            &.active {
                color: #fe5100;
            }
            p {
                margin-top: 2px;
            }
            i {
                font-size: 20px;
            }
        }
    }
}
</style>
