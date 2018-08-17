<template>

  <div class="msite">


    <transition name="fade">
      <div class="zhezao" v-show="firstView">
        <i class="iconfont icon-anonymous-iconfont" @click="handler"></i>
        <div class="gift">
          <div class="gift-new">
            <span>新人专享礼</span>
          </div>
          <div class="gift-use">感谢使用,已经为你准备一份大礼</div>
          <div class="gift-product">
            <img src="../../commen/img/18.jpg" alt="">
            <div class="gift-kuzi">
              <span>绅士休闲裤</span>
              <span>HOGO制造商</span>
              <div class="gift-price">
                <span>¥225</span>
                <span>¥115</span>
              </div>
            </div>
          </div>
          <div class="btn-price">领卷立减300</div>
          <div class="btn-product">查看更多商品</div>
        </div>

      </div>
    </transition>

    <header>
      <div class="search">
        <h2>网易严选</h2>
        <input type="text" placeholder="搜索商品,共1175款好物">
      </div>
      <i class="iconfont icon-sousuo"></i>
      <div class="wrapper">
        <ul class="nav">
          <li v-for="(name,index) in home.headCateList" :key="index">{{name.name}}</li>

        </ul>
      </div>
    </header>
    <mt-swipe :auto="4000" class="swp" :stopPropagation="true" :prevent="true">
      <mt-swipe-item v-for="(item,index) in home.cateList" :key="index"><img v-lazy='item.bannerUrl'></mt-swipe-item>

    </mt-swipe>
    <div class="wrap">
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
      <div class="gray"></div>
      <div class="productor">
        <span>品牌制造商直供</span>
        <i class="iconfont icon-anonymous-iconfont"></i>
        <i></i>
      </div>
      <ul class="productor-price">
        <li>
          <span>CK制造商</span>
          <span>25元起</span>
          <span>上新</span>
          <img src="../../commen/img/11.png" alt="">
        </li>
        <li>
          <span>Line West制造商</span>
          <span>209元起</span>
          <span>上新</span>
          <img src="../../commen/img/12.png" alt="">
        </li>
        <li>
          <span>海外制造商</span>
          <span>9.9元起</span>
          <span>上新</span>
          <img src="../../commen/img/13.png" alt="">
        </li>
        <li>
          <span>Ralph制造商</span>
          <span>19元起</span>
          <img src="../../commen/img/14.png" alt="">
        </li>
      </ul>
    </div>
    <div class="recommend">
      <div class="new-product">
        <div class="new-title">
          <span class="first">新品首发</span>
          <span class="all">
            <span>查看全部</span>
            <i class="iconfont icon-anonymous-iconfont"></i>
          </span>
        </div>
        <div class="new-scroll">
          <div class="scl">
            <div>
              <img src="../../commen/img/21.png" alt="">
              <span class="small-title">七夕推荐</span>
              <h3>红玫瑰</h3>
              <span class="descrip">玫瑰抒情</span>
              <span class="price">¥88</span>
            </div>
            <div>
              <img src="../../commen/img/22.png" alt="">
              <span class="small-title">七夕推荐</span>
              <h3>红玫瑰</h3>
              <span class="descrip">玫瑰抒情</span>
              <span class="price">¥88</span>
            </div>
            <div>
              <img src="../../commen/img/23.png" alt="">
              <span class="small-title">七夕推荐</span>
              <h3>红玫瑰</h3>
              <span class="descrip">玫瑰抒情</span>
              <span class="price">¥88</span>
            </div>
            <div>
              <img src="../../commen/img/24.png" alt="">
              <span class="small-title">七夕推荐</span>
              <h3>红玫瑰</h3>
              <span class="descrip">玫瑰抒情</span>
              <span class="price">¥88</span>
            </div>
            <div>
              <img src="../../commen/img/25.png" alt="">
              <span class="small-title">七夕推荐</span>
              <h3>红玫瑰</h3>
              <span class="descrip">玫瑰抒情</span>
              <span class="price">¥88</span>
            </div>
            <div class="look-all">
              <span>查看全部</span>
            </div>
          </div>

        </div>
      </div>
      <div class="popularity">
        <div class="new-title new-popularity">
          <span class="first">人气推荐</span>
          <span class="all">
            <span>查看全部</span>
            <i class="iconfont icon-anonymous-iconfont"></i>
          </span>
        </div>
        <div class="new-scroll old-scroll">
          <div class="scl">
            <div>
              <img src="../../commen/img/21.png" alt="">
              <span class="small-title">七夕推荐</span>
              <h3>红玫瑰</h3>
              <span class="descrip">玫瑰抒情</span>
              <span class="price">¥88</span>
            </div>
            <div>
              <img src="../../commen/img/22.png" alt="">
              <span class="small-title">七夕推荐</span>
              <h3>红玫瑰</h3>
              <span class="descrip">玫瑰抒情</span>
              <span class="price">¥88</span>
            </div>
            <div>
              <img src="../../commen/img/23.png" alt="">
              <span class="small-title">七夕推荐</span>
              <h3>红玫瑰</h3>
              <span class="descrip">玫瑰抒情</span>
              <span class="price">¥88</span>
            </div>
            <div>
              <img src="../../commen/img/24.png" alt="">
              <span class="small-title">七夕推荐</span>
              <h3>红玫瑰</h3>
              <span class="descrip">玫瑰抒情</span>
              <span class="price">¥88</span>
            </div>
            <div>
              <img src="../../commen/img/25.png" alt="">
              <span class="small-title">七夕推荐</span>
              <h3>红玫瑰</h3>
              <span class="descrip">玫瑰抒情</span>
              <span class="price">¥88</span>
            </div>
            <div class="look-all">
              <span>查看全部</span>
            </div>
          </div>

        </div>
      </div>
    </div>
    <Split></Split>
    <div class="time-price">
      <div class="time">
        <span>严 选 限 时 购</span>


        <div class="settime">
          <span id="shi">24</span>:
          <span id="fen">60</span>:
          <span id="miao">60</span>
        </div>
        <span class="willtime">下一场 14.00 开始</span>
      </div>
      <div class="price">
        <img src="../../commen/img/bg3.png" alt="">
        <div class="price-num">
          <span>¥56</span>
          <span>¥62</span>
        </div>
      </div>
    </div>
    <Split></Split>
    <div class="discounts"></div>
    <Split></Split>
    <div class="special">
      <div class="special-words">
        <span>专题精选</span>
        <i class="iconfont icon-anonymous-iconfont"></i>
      </div>
      <div class="special-pics">
        <div class="special-ul">
          <div class="special-pic">
            <img src="../../commen/img/31.jpg" alt="">
            <div class="tlt">
              <span>青汁兑蜂蜜,好喝</span>
              <span>129元起</span>
            </div>
            <span>每天来杯蜂蜜水,好喝又美容</span>
          </div>
          <div class="special-pic special-pic2">
            <img src="../../commen/img/32.jpg" alt="">
            <div class="tlt">
              <span>青汁兑蜂蜜,好喝</span>
              <span>129元起</span>
            </div>
            <span>每天来杯蜂蜜水,好喝又美容</span>
          </div>
        </div>

      </div>

    </div>
    <Split></Split>
    <div class="content">
      <div class="content-lists">
        <h3>居家好物</h3>
        <div class="content-list">
          <div class="content-list-small">
            <div>
              <img src="../../commen/img/41.png" alt="">
              <span class="advantage">硬度偏好者精选</span>
            </div>
            <div><span>居家特惠</span></div>
            <div>冬夏两用...</div>
            <span>¥1889.1</span>
          </div>
          <div class="content-list-small">
            <div>
              <img src="../../commen/img/41.png" alt="">
              <span class="advantage">硬度偏好者精选</span>
            </div>
            <div><span>居家特惠</span></div>
            <div>冬夏两用...</div>
            <span>¥1889.1</span>
          </div>
          <div class="content-list-small">
            <div>
              <img src="../../commen/img/41.png" alt="">
              <span class="advantage">硬度偏好者精选</span>
            </div>
            <div><span>居家特惠</span></div>
            <div>冬夏两用...</div>
            <span>¥1889.1</span>
          </div>
          <div class="more-better">
            <div>更多居家好物</div>
            <i class="iconfont icon-anonymous-iconfont"></i>
          </div>


        </div>
      </div>
      <Split></Split>
    </div>

  </div>

</template>

<script>
  import BScroll from 'better-scroll'

  import Split from '../../components/Split/Split'

  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        firstView: true,

      }
    },
    components: {
      Split
    },
    computed: {
      ...mapState(['home'])

    },
    mounted() {

      this.$store.dispatch('getHome', () => {
        this.$nextTick(() => {
          this._initBScroll('.wrapper');
          this._initBScroll('.new-scroll')
          this._initBScroll('.special-pics')
          this._initBScroll('.old-scroll')
        })
      });

      this.daoJiShi();

    },
    methods: {

      _initBScroll(clas) {
        new BScroll(clas, {
          click: true,
          scrollX: true,
          scrollY: false,
          eventPassthrough: 'vertical'
        })
      },
      handler() {
        this.firstView = false
      },

      daoJiShi() {
        const miao = document.getElementById('miao')
        const fen = document.getElementById('fen')
        const shi = document.getElementById('shi')
        let tMiao = 60
        let tFen = 60
        let tShi = 24
        setInterval(()=>{
          tMiao--;
          miao.innerHTML = tMiao
          if(tMiao===0){
            tFen--;
            fen.innerHTML = tFen
            if(tFen===0){
              tShi--;
              shi.innerHTML = tShi
              tFen = 60
            }
            tMiao = 60
          }

        },1000)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../commen/stylus/mixins.styl"
  .msite

    .zhezao
      width: 100%
      height: 13.5rem
      background-color rgba(0, 0, 0, .5)
      position fixed
      z-index 20
      i
        font-size 0.57rem
        position absolute
        right: 0.35rem
        top: 0.4rem
      .gift
        width: 6rem
        height: 7rem
        background-color white
        position absolute
        left: 0
        right: 0
        top: 0
        bottom: 0
        margin auto
        border-radius 8px
        .gift-new
          text-align center
          font-size 0.36rem
          margin-top 0.3rem
          span
            font-weight bold

            &:before
              content ''
              width 0.4rem
              height: 2px
              background-color black
              display inline-block
              transform translateY(-0.1rem) translateX(-0.2rem)
            &:after
              content ''
              width 0.4rem
              height: 2px
              background-color black
              display inline-block
              transform translateY(-0.1rem) translateX(0.2rem)
        .gift-use
          text-align center
          font-size 0.25rem
          margin-top 0.2rem
        .gift-product
          width: 5.4rem
          height: 2.3rem
          margin-left 0.3rem
          position relative
          margin-top 0.3rem
          img
            width: 2.5rem
            height: 100%
          .gift-kuzi
            background-color #f5f5f5
            position absolute
            width: 2.9rem
            height: 100%
            top: 0
            right: 0
            display flex
            flex-direction column
            justify-content center
            span
              &:nth-child(2)
                margin-top 0.2rem
                margin-bottom 0.2rem
            .gift-price
              span
                &:last-child
                  text-decoration line-through

        .btn-price
          text-align center
          background-color deeppink
          width: 5.4rem
          height: 0.81rem
          margin-left 0.3rem
          line-height 0.8rem
          margin-top 0.3rem
          color white
          font-size 0.32rem
          box-sizing border-box
          border-radius 5px
        .btn-product
          text-align center
          background-color white
          width: 5.4rem
          height: 0.81rem
          margin-left 0.3rem
          line-height 0.8rem
          margin-top 0.3rem
          color black
          font-size 0.32rem
          box-sizing border-box
          border-radius 5px
          border 2px solid #f5f5f5

    overflow hidden
    background-color white
    margin-bottom 2rem

    header
      bottom-border-1px(#f5f5f5)
      width: 100%
      background-color white
      font-size 0.27rem
      position fixed
      padding-bottom 0.2rem
      z-index 10

      i
        position absolute
        left 2.5rem
        top 0.3rem
      .search
        display flex
        justify-content space-around
        h2
          font-style oblique
          font-size 0.35rem
          margin 0.2rem
        input
          background-color #f5f5f5
          top-border-1px(#f5f5f5)
          padding 0 0.9rem
          border-radius 4%
          margin-top 0.1rem
      .wrapper
        margin-top 0.2rem
        width: 100%
        .nav
          font-size 0.29rem
          display flex
          justify-content space-around
          width 200%
    .swp
      height: 4rem
      margin-top 0.5rem
    .wrap
      margin-top 0.2rem
      .self
        display flex
        justify-content space-around
        i
          color red
      .gray
        width: 100%
        height 0.2rem
        background-color #f5f5f5
        margin-top 0.2rem
      .productor
        text-align center
        font-size 0.35rem
        margin 0.4rem
      .productor-price
        font-size 0.27rem
        display flex
        flex-wrap wrap
        justify-content space-around

        li
          width: 48%
          height: 2.5rem
          display flex
          flex-direction column
          position relative
          background-color #f5f5f5
          margin-bottom 0.1rem
          padding-top 0.2rem
          padding-left 0.2rem
          box-sizing border-box
          span
            margin-bottom 0.2rem
          img
            position absolute
            width: 100%
            height: 100%
    .recommend
      .new-title
        font-size 0.38rem
        background url("../../commen/img/bg1.png")
        background-size 100% 100%
        height 2.7rem
        text-align center
        box-sizing border-box
        /*line-height 2.7rem*/
        padding-top 9%
        color #8BA0B6
        &.new-popularity
          background url("../../commen/img/bg2.png")
          background-size 100% 100%
        .first
          display block
          margin-bottom 0.2rem
        .all
          font-size 0.29rem
          display inline-block
          width: 30%
          background-color #D8E5F1
          height 0.5rem
          line-height 0.5rem

      .new-scroll
        margin 0.2rem

        .scl
          display flex
          width: 250%
          justify-content space-around
          .look-all
            width: 2.6rem
            height: 2.6rem
            border 3px solid #f5f5f5
            text-align center
            line-height 2.6rem

          img
            display inline-block
            width: 2.6rem
            height: 2.6rem
            background-color #f5f5f5
            margin-bottom 0.1rem
          .small-title
            color white
            background-color pink
            display inline-block
            margin-bottom 0.13rem
            margin-left 0.1rem
          h3
            margin-bottom 0.1rem
          .descrip
            display block
            margin-bottom 0.1rem
          .price
            color red

    .time-price
      display flex
      justify-content space-around
      .time
        font-size 0.4rem
        display flex
        flex-direction column
        justify-content center
        .settime
          margin 0.2rem
          margin-left 0
          font-size 0.32rem
          span
            display inline-block
            width: 0.5rem
            height: 0.5rem
            background-color black
            color white
            text-align center
            line-height 0.5rem
        .willtime
          font-size 0.25rem
      .price
        width: 3rem
        height: 3rem
        position relative
        img
          width: 100%
          height: 100%
        .price-num
          position absolute
          background-color orange
          width: 1rem
          height: 1rem
          border-radius 50%
          text-align center
          display flex
          flex-direction column
          justify-content space-around
          color white
          box-sizing border-box
          padding 0.2rem
          right 0
          bottom 0.4rem
    .discounts
      width: 100%
      height: 3rem
      background url(http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg)
      background-size 100% 100%
    .special
      margin-bottom 0.3rem
      .special-words
        font-size 0.33rem
        text-align center
        margin-top 0.35rem
        margin-bottom 0.35rem
      .special-pics
        .special-ul
          width: 150%
          display flex

          .special-pic
            margin-left 0.3rem
            /*width: 78%*/
            &.special-pic2
              margin-left -1rem

            img
              width: 80%
            .tlt
              clearFix()
              span
                float left
                margin-right 1.5rem
                font-size 0.26rem
                margin-top 0.23rem
                margin-bottom 0.15rem
                &:nth-child(2)
                  color red
            span
              &:last-child
                font-size 0.24rem
                color #7F7F7F

    .content
      margin-top 0.35rem
      //clearFix()
      h3
        font-size 0.3rem
        text-align center
        margin-bottom 0.3rem
      .content-list
        clearFix()
        .more-better
          width: 45%
          height: 3.77rem
          float left
          margin-left 0.2rem
          margin-top 0.1rem
          background-color #f5f5f5
          text-align center
          div
            font-size 0.35rem
            margin-top 0.8rem
            margin-bottom 0.4rem
          i
            font-size 0.7rem

        .content-list-small
          width: 45%
          float left
          margin-left 0.2rem
          margin-top 0.1rem
          div
            width: 100%

            &:first-child
              img
                width: 100%
                background-color #f5f5f5
              span
                background-color #F1ECE2
                display inline-block
                width: 100%
                height: 0.5rem
                line-height 0.4rem
                margin-top -0.1rem
                color #9F8A60
                box-sizing border-box
            /*margin-left 0.1rem*/
            &:nth-child(2)
              margin-bottom 0.2rem
              span
                display inline-block
                color white
                background-color orange
                padding: 0.06rem
                font-size 0.2rem
                margin-top 0.2rem
                margin-left 0.15rem
            &:nth-child(3)
              margin-bottom 0.1rem



  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }
</style>
