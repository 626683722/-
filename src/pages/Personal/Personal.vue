<template>
    <div class="personal">
      <header>
        <div id="shang"></div>
        <i class="iconfont icon-iconmonstr-home-thin" @click="$router.push('/msite')"></i>
        <img src="../../commen/img/wangyi.png" alt="">
        <span>
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-gouwuche1"></i>
      </span>
      </header>
      <div class="loginWrap">
        <div class="bgYanxuan"></div>
        <div class="btnWrap">
          <div class="telLogin">
            <i class="iconfont icon-shouji"></i>
            <span>手机号码登录</span>
          </div>
          <div class="mailLogin">
            <i class="iconfont icon-youxiang"></i>
            <span>邮箱账号登录</span>
          </div>
          <div class="register">
            <span>手机号快捷注册</span>
            <i class="iconfont icon-anonymous-iconfont"></i>
          </div>

        </div>
        <div class="chat">
          <div class="weixin">
            <i class="iconfont icon-weixin"></i>
            <span>微信</span>
          </div>
          <div class="koukou">
            <i class="iconfont icon-QQ"></i>
            <span>QQ</span>
          </div>
          <div class="weibo">
            <i class="iconfont icon-weibo"></i>
            <span>微博</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

  export default {
    name: "personal"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .personal
    header
      bottom-border-1px(#f5f5f5)
      width: 100%
      height: 0.7rem
      position fixed
      padding-bottom 0.2rem

      z-index 10
      display flex
      justify-content space-around
      align-items center
      background-color #f9f9f9
      > i
        font-size 0.47rem
        transform translateX(-1.2rem)
      img
        width 1.5rem
        height: 0.5rem
        vertical-align middle
      span
        transform translateX(0.4rem)
        i
          font-size 0.47rem
          margin-left 0.2rem
    .loginWrap
      width: 100%
      height: 100%
      background-color #F2F5F4
      .bgYanxuan
        width: 100%
        height: 5.3rem
        background url("../../commen/img/001.png") no-repeat
        background-size 37% 17%
        background-position 50% 50%
      .btnWrap
        width: 100%
        .telLogin
          width: 90%
          height: 1rem
          background-color #b4282d
          margin-left 0.35rem
          text-align center
          color white
          line-height 1rem
        .mailLogin
          width: 90%
          height: 1rem
          border 1px solid #b4282d
          box-sizing border-box
          margin-left 0.35rem
          text-align center
          color #b4282d
          line-height 1rem
          margin-top 0.3rem
        .register
          width: 90%
          margin-left 0.35rem
          text-align center
          color black
          line-height 1rem


      .chat
        width 100%
        display flex
        justify-content center
        position absolute
        bottom 1rem
        color #5f5f5f
        .koukou
          padding-left  0.6rem
          padding-right: 0.6rem

          box-sizing border-box


</style>
