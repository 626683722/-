<template>
  <div class="classify">
    <header>
      <div class="int">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品,共11955款商品</span>
      </div>
    </header>
    <div class="pix"></div>
    <div class="commodity ">
      <div class="bettet-prt">
        <ul class="product">
          <li :class="{active:itemIndex===index}" v-for="(item,index) in nav.categoryL1List "
              @click="itemIndex=index" :key="index">{{item.name}}</li>
        </ul>
      </div>
      <div class="right-list">
        <div class="bg" ></div>
        <div class="catelist" v-for="(item,index) in nav.categoryL1List" :key="index" v-show="itemIndex===index">
          <div class="hd">
            <span></span>
            <span>{{item.name}}</span>
            <span></span>
          </div>
          <ul class="list">
            <li class="cateItem" v-for="(c,index) in item.subCateList" :key="index">
              <div class="cateImgWrapper">
                <img :src="c.bannerUrl" alt="">
              </div>
              <div class="name">{{c.name}}</div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  import {mapState} from 'vuex'
  export default {
    data(){
      return {
       itemIndex : 0
      }
    },
    mounted(){
      this.$store.dispatch('getNav',()=>{
        this.$nextTick(() => {
          new BScroll('.bettet-prt',{
            click:true,
            scrollY:true,
            bounce:false
          })
        })
      })
    },
    computed:{
      ...mapState(['nav'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  @import "../../commen/stylus/mixins.styl"
  .classify
    width: 100%
    height: 100%
    background-color white

    header
      bottom-border-1px(#f5f5f5)
      width: 100%
      height 1rem
      position fixed
      top 0
      background-color white
      z-index 18
      .int
        position absolute
        left 0
        right: 0
        top: 0
        bottom: 0
        margin auto
        width 90%
        background-color #f5f5f5
        height: 70%
        border-radius 7px
        text-align center
        line-height 0.7rem

    .commodity
      margin-top 1rem
      box-sizing border-box
      position relative
      .bettet-prt
        height: 10rem

        .product
          width: 24%
          height: 18rem
          display flex
          flex-direction column
          justify-content space-around
          li
            text-align center
            font-size 0.28rem
            &.active
              color red
              font-size 0.5rem



      .right-list
        width: 72%
        position absolute
        right: 0
        top: 0
        padding-right 0.25rem

        .bg
          width: 100%
          height: 1.8rem
          margin-top 0.3rem
          background url("../../commen/img/bg62.jpg") no-repeat
          background-size 100% 100%
        .catelist
          .hd
            text-align center
            height: 1rem
            line-height 1rem
            span
              &:first-child
                width: 0.4rem
                height: 1px
                display inline-block
                transform translateY(-0.1rem)
                background-color #d9d9d9
              &:last-child
                width: 0.4rem
                height: 1px
                display inline-block
                transform translateY(-0.1rem)
                background-color #d9d9d9

          .list
            clearFix()
            .cateItem
              float left
              width: 1.4rem
              margin-left 0.3rem
              text-align center
              .name
                width: 1.3rem
                height: 0.3rem
                white-space:normal;
                word-break:break-all;
                word-wrap:break-word

              .cateImgWrapper
                width: 1.4rem
                height: 1.4rem

                img
                  width: 100%
                  height: 100%
                  border-radius 50%

</style>
