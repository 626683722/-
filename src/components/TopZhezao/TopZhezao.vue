<template>
    <div class="top-zhezao" v-if="topShow" @click="handleClear">
      <i class="iconfont icon-anonymous-iconfont"></i>
      <div class="xuebi">
        <img src="../../commen/img/yanxuan.png" alt="">
        <div>
          <span>网易严选</span>
          <span>立即领取新人App1000元红包</span>
        </div>
      </div>
      <div class="open-app">打开App</div>
    </div>

</template>

<script>
  export default {
    data() {
      return {
        topShow: true,
        topClear: false
      }
    },
    mounted() {
      console.log(this.topShow);
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleClear() {
        this.topShow = false
        this.topClear = !this.topClear
      },
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop>1){
          this.topShow=false
        }else {
          if(!this.topClear){

            this.topShow=true
          }
        }
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .top-zhezao
    width: 100%
    background-color black
    height: 0.9rem
    position relative
    z-index 19
    overflow hidden
    .open-app
      float right
      background-color #b4282d
      width: 1.4rem
      height: 0.5rem
      margin-right 0.2rem
      margin-top 0.2rem
      color white
      text-align center
      line-height 0.5rem
    i
      font-size 0.35rem
      float left
      margin-top 0.3rem
      margin-left: 0.3rem
      color white
    .xuebi
      display inline-block
      margin-left 0.2rem
      div
        float left
        margin-left 0.2rem
        height: 0.9rem
        color white
        display flex
        flex-direction column
        margin-left 1rem
        margin-top 0.2rem

      img
        position absolute
        top -2.4rem
        width: 2rem
        height: 4rem


</style>
