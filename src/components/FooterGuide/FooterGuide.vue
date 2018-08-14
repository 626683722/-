<template>
  <div class="footer">
    <div @click="goto('/msite')">
      <i class="iconfont icon-iconmonstr-home-thin" :class="{on:$route.path==='/msite'}"></i>
      <span :class="{on:$route.path==='/msite'}">首页</span>
    </div>
    <div @click="goto('/look')">
      <i class="iconfont icon-shangpin" :class="{on:$route.path==='/look'}"></i>
      <span :class="{on:$route.path==='/look'}">识物</span>
    </div>
    <div @click="goto('/classify')">
      <i class="iconfont icon-tabbar_icon_fenlei_d" :class="{on:$route.path==='/classify'}"></i>
      <span :class="{on:$route.path==='/classify'}">分类</span>
    </div>
    <div @click="goto('/shopcar')">
      <i class="iconfont icon-gouwuche1" :class="{on:$route.path==='/shopcar'}"></i>
      <span :class="{on:$route.path==='/shopcar'}">购物车</span>
    </div>
    <div @click="goto('/personal')">
      <i class="iconfont icon-renwu" :class="{on:$route.path==='/personal'}"></i>
      <span :class="{on:$route.path==='/personal'}">个人</span>
    </div>

  </div>
</template>

<script>
  export default {
    methods:{
      goto(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../commen/stylus/mixins.styl"
  .footer
    top-border-1px(#e4e4e4)
    width: 100%
    display flex
    position fixed
    bottom 0
    justify-content space-around
    background-color #fafafa
    padding-top 0.2rem

    div
      display flex
      flex-direction column
      justify-content center
      font-size 0.15rem
      span
        margin 0.1rem
        &.on
          color red
      i
        text-align center
        font-size 0.4rem
        &.on
          color red

</style>
