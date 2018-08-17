<template>
    <div class="shopcar">
      <header>
        <h1>购物车</h1>
        <span>领卷</span>
      </header>
      <div class="self">
        <div>
          <i class="iconfont icon-anonymous-iconfont"></i>
          <span>网易自营品牌</span>
        </div>
        <div>
          <i class="iconfont icon-anonymous-iconfont"></i>
          <span>30天无忧退货</span>
        </div>
        <div>
          <i class="iconfont icon-anonymous-iconfont"></i>
          <span>48小时快速退款</span>
        </div>
      </div>
      <div class="container">
        <div class="add">去添加点什么吧</div>
        <div class="login" @click="$router.push('/personal')">登录</div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "shop-car"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../commen/stylus/mixins.styl"
  .shopcar
    header
      bottom-border-1px(#f5f5f5)
      width: 100%
      height 1rem
      position fixed
      top 0
      background-color white
      z-index 18
      h1
        font-size 0.4rem
        text-align center
        line-height 1rem
      span
        position absolute
        right: 0.4rem
        color #B4282D
        top: 50%
        transform translateY(-50%)
        font-size 0.3rem

    .self
      display flex
      justify-content space-around
      margin-top 1.2rem
    .container
      width: 100%
      height: 12rem
      background url("../../commen/img/bg111.png") no-repeat
      background-size 30% 20%
      background-position 50% 40%
      position relative
      .add
        font-size 0.3rem
        position absolute
        left: 50%
        transform translateX(-50%)
        top 50%
        color #999
      .login
        position absolute
        left: 50%
        transform translateX(-50%)
        top 58%
        font-size 0.35rem
        color white
        background-color #b4282d
        width: 65%
        height: 0.9rem
        text-align center
        line-height 0.9rem


</style>
