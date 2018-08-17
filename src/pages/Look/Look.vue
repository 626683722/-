<template>
  <div class="look">
    <a class="maodian" href="#">
      <i class="iconfont icon-anonymous-iconfont"></i>
    </a>
    <header>
      <div id="shang"></div>
      <i class="iconfont icon-iconmonstr-home-thin"></i>
      <img src="../../commen/img/wangyi.png" alt="">
      <span>
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-gouwuche1"></i>
      </span>
    </header>

    <div class="lbt">

      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../commen/img/shiwu1.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../commen/img/shiwu2.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../commen/img/shiwu3.jpg" alt=""></div>
          <div class="swiper-slide"><img src="../../commen/img/shiwu4.jpg" alt=""></div>
        </div>

      </div>
    </div>
    <div class="article">
      <ul class="articleul" ref="picul">
        <li v-for="(i,index) in detail.column" :key="index" ref="picli" >
          <div class="zhengfang">
            <span>{{i.articleCount}}</span>
          </div>
          <span>
           {{i.title}}
          </span>
        </li>
      </ul>
    </div>
    <Split></Split>
    <div class="recommend-wrap">
      <div class="yanxuan-recommend">
        <p>为你推荐</p>
        <div class="recommend-item">

          <RecommendPic></RecommendPic>
          <div class="recommend-price">
            <span>海边度假圣地</span>
            <span>19.9元起</span>
          </div>
          <div class="avatar-item">
            <div class="left">
              <div class="left-avatar">
                <img src="../../commen/img/avatar1.png" alt="">
                <span>配件组:羊羊</span>
              </div>
              <span>鞋柜里的舒适好鞋</span>
            </div>
            <div class="right">
              <div>挑款师推荐</div>
            </div>
          </div>
          <div class="avatar-item">
            <div class="left">
              <div class="left-avatar">
                <img src="../../commen/img/avatar1.png" alt="">
                <span>配件组:羊羊</span>
              </div>
              <span>鞋柜里的舒适好鞋</span>
            </div>
            <div class="right">
              <div>挑款师推荐</div>
            </div>
          </div>
        </div>
        <div class="recommend-item">
          <div class="recommend-pic">
            <div>严选推荐</div>
          </div>
          <div class="recommend-price">
            <span>海边度假圣地</span>
            <span>19.9元起</span>
          </div>
          <div class="avatar-item">
            <div class="left">
              <div class="left-avatar">
                <img src="../../commen/img/avatar1.png" alt="">
                <span>配件组:羊羊</span>
              </div>
              <span>鞋柜里的舒适好鞋</span>
            </div>
            <div class="right">
              <div>挑款师推荐</div>
            </div>
          </div>
          <div class="avatar-item">
            <div class="left">
              <div class="left-avatar">
                <img src="../../commen/img/avatar1.png" alt="">
                <span>配件组:羊羊</span>
              </div>
              <span>鞋柜里的舒适好鞋</span>
            </div>
            <div class="right">
              <div>挑款师推荐</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Split></Split>
    <div class="time-scroll">
      <p>十点一刻</p>
      <div class="topic-better">
        <div class="topic">
          <div class="topic-xiaojian">
            <div class="topic-today">
              <span></span>
              <span>今日话题</span>
              <span></span>
            </div>
            <div class="zufang">
              <p>你有哪些租房经历</p>
              <p>聊聊你用过的租房神奇</p>
            </div>

            <div class="avatars">
              <img src="../../commen/img/avatar1.png" alt="">
              <img src="../../commen/img/avatar1.png" alt="">
              <img src="../../commen/img/avatar1.png" alt="">
              <div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <span>475人参与讨论</span>
            </div>
          </div>
          <div class="all-topic">
            <span>查看全部话题</span>
            <i class="iconfont icon-anonymous-iconfont"></i>
          </div>
        </div>
      </div>
    </div>
    <Split></Split>
    <div class="best-product">
      <p>严选真品</p>
      <RecommendPic></RecommendPic>
      <div class="border-1px">
        <div class="tips">
          <span>日用品更替小贴士</span>
        </div>
        <div class="renew">
          <span>毛巾,袜子换新指南</span>
        </div>
      </div>
    </div>
    <div class="public">
      <div class="public-left">
        <p>出门旅行</p>
        <p>德国进口cp材质,好看轻巧</p>
      </div>
      <RecommendPic style="width: 3rem;height: 2.5rem;float: right"></RecommendPic>
    </div>
    <div class="public">
      <div class="public-left">
        <p>出门旅行</p>
        <p>德国进口cp材质,好看轻巧</p>
      </div>
      <RecommendPic style="width: 3rem;height: 2.5rem;float: right"></RecommendPic>
    </div>
    <Split></Split>
    <div class="yanxuanlook">
      <p>严选look</p>
      <div class="bigpic">
        <img src="../../commen/img/51.jpg" alt="">
      </div>
      <div class="avatarname">

        <span><img src="../../commen/img/avatar1.png" alt="">feel0332</span>
      </div>
      <p>美美哒,不时啃一啃</p>
    </div>
    <div class="more">
      <p>更多精彩</p>
      <ul>
        <li>
          <p>解开每一款秘密绝学</p>
          <Split></Split>
        </li>
        <li>
          <p>解开每一款秘密绝学</p>
          <Split></Split>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  import Split from '../../components/Split/Split'

  import RecommendPic from '../../components/Recommend-pic/Recommend-pic'

  import {mapState} from 'vuex'

  export default {
    components: {
      Split,
      RecommendPic
    },
    computed:{
      ...mapState(['detail'])
    },
    mounted() {

      this.$store.dispatch('getDetail',()=>{
        this.$nextTick(()=>{
          new Swiper('.swiper-container', {
            direction: 'horizontal',
            spaceBetween: 0,
            loop: true,
            slidesPerView: 1.15,
            centeredSlides: true
          });
          this._initBScroll2()
          this._initBScroll('.topic-better')
        })
      })


    },
    methods:{
      _initBScroll(clas){
        new BScroll(clas, {
          click: true,
          scrollX: true,
          scrollY: false,
          eventPassthrough: 'vertical'
        });
      },
      _initBScroll2(){
        const ul = this.$refs.picul
        const liWidth = 1.5
        const space = 0.3
        const size = this.detail.column.length
        ul.style.width = (liWidth+space)*size+'rem'
        new BScroll('.article',{
          click: true,
          scrollX: true,
          scrollY: false,
          eventPassthrough: 'vertical'
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../commen/stylus/mixins.styl"
  .look
    overflow hidden
    margin-bottom 2rem
    background-color white
    box-sizing border-box
    .maodian
      position fixed
      bottom 4rem
      right: 0.6rem
      width: 0.5rem
      height: 0.5rem
      z-index 100
      i
        font-size 0.8rem
        color black
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
      background-color #f4f4f4
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
    .lbt
      margin-top 1.15rem
      background-color white
      .swiper-container
        .swiper-wrapper
          .swiper-slide
            img
              width: 6.3rem
              height: 4rem
              border-radius 5px

    .article
      margin-top 0.6rem

      .articleul
        display flex
        justify-content space-around
        /*width: 180%*/
        li
          text-align center
          margin-bottom 0.35rem
          .zhengfang
            width: 1.5rem
            height: 1.5rem
            background-color #f5f5f5
            background url("../../commen/img/bg11.png")
            background-size 100% 100%
            position relative
            margin-bottom 0.2rem
            span
              color white
              position absolute
              top 0
              right 0


    .recommend-wrap
      width: 100%

      .yanxuan-recommend
        width: 93%
        margin-left 0.24rem
        > p
          font-size 0.35rem
          text-align center
          width: 100%
          height: 1.33rem
          line-height 1.33rem
        .recommend-item

          .recommend-price
            margin-top 0.25rem
            clearFix()
            margin-bottom 1.2rem
            span
              font-size 0.35rem
              &:first-child
                float left
                margin-left 0.2rem
              &:last-child
                float right
                margin-right 0.2rem

          .avatar-item
            width: 100%
            height: 2.8rem
            border 2px solid #f5f5f5
            margin-bottom 0.3rem
            border-radius 2px
            .left
              width: 62%
              height: 100%
              display flex
              flex-direction column
              justify-content center
              float left
              .left-avatar
                margin-bottom 0.3rem
                box-sizing border-box
                vertical-align middle
                img
                  width: 0.45rem
                  height: 0.45rem
                  border-radius 50%
                  margin-left 0.2rem
                span
                  font-size 0.2rem
              span
                margin-left 0.2rem
                font-size 0.3rem
            .right
              background url("../../commen/img/bg01.jpg")
              background-size 100% 100%
              height: 100%
              width: 38%
              float left
              div
                background-color white
                width: 1.4rem
                height: 0.3rem
                margin-left 0.1rem
                margin-top 0.1rem
                text-align center
                line-height 0.3rem
                border-radius 5px

    .time-scroll
      width: 93%
      margin-left 0.24rem
      > p
        width: 100%
        height: 1.33rem
        text-align center
        line-height 1.33rem
        font-size 0.35rem
      .topic-better
        .topic
          width: 150%
          display flex
          justify-content space-around
          .topic-xiaojian
            width: 5.5rem
            height: 4rem
            background url("../../commen/img/bgkuang.png")
            background-size 100% 100%
            text-align center
            box-sizing border-box
            .topic-today
              padding-top 0.4rem
              box-sizing border-box

              span
                &:first-child
                  display inline-block
                  width: 0.3rem
                  height: 1px
                  background-color #7f7f7f
                  transform translateY(-0.1rem)
                &:last-child
                  display inline-block
                  width: 0.3rem
                  height: 1px
                  background-color #7f7f7f
                  transform translateY(-0.1rem)

            .zufang
              p
                &:first-child
                  margin-top 0.35rem
                  font-size 0.4rem
                &:last-child
                  margin-top 0.2rem
                  font-size 0.25rem
            .avatars
              margin-top: 0.4rem;
              position relative
              img
                width: 0.3rem
                height: 0.3rem
                border-radius 5px
              > div
                position absolute
                background-color #d9d9d9
                width: 0.4rem
                height: 0.4rem
                left: 45%
                top: 0
                border-radius 50%
                display flex
                justify-content space-around
                align-items center

                div
                  width: 0.05rem
                  height: 0.05rem
                  border-radius 50%
                  background-color white
              span
                margin-left 1rem

          .all-topic
            width: 5.5rem
            height: 3.7rem
            text-align center
            line-height 4rem
            background-color #fafafa
            border 4px solid #e6e6e6
            box-sizing border-box
            margin-left 0.4rem
            font-size 0.35rem
            color #7f7f7f

    .best-product
      width: 93%
      margin-left 0.24rem
      > p
        width: 100%
        height: 1.33rem
        text-align center
        line-height 1.33rem
        font-size 0.35rem
      .border-1px
        height: 1.5rem
        bottom-border-1px(#f5f5f5)
        .tips
          font-size 0.4rem
          margin-top 0.3rem
          margin-left 0.2rem
        .renew
          margin-left 0.2rem
          font-size 0.3rem
          margin-top 0.2rem
          color #7f7f7f


    .public
      width: 93%
      margin-left 0.24rem
      border 1px solid #f5f5f5
      clearFix()
      margin-bottom 0.2rem

      .public-left
        display flex
        flex-direction column
        justify-content center
        float left
        height: 2.5rem
        border-left 1px solid #f5f5f5

        p
          margin-left 0.2rem
          &:first-child
            margin-bottom 0.2rem
            font-size 0.35rem
    .yanxuanlook
      width: 93%
      margin-left 0.24rem
      p
        &:last-child
          margin-left 0.3rem
          color #7f7f7f
          margin-bottom 0.3rem
        &:first-child
          text-align center
          font-size 0.37rem
          height: 1.33rem
          line-height 1.33rem
      .bigpic
        img
          width 100%
          height: 100%
      .avatarname
        margin-left 0.3rem
        margin-top 0.3rem
        margin-bottom 0.3rem
        img
          width: 0.35rem
          height: 0.35rem
          border-radius 50%
          vertical-align middle
          margin-right 0.1rem
        span
          display inline-block
          vertical-align middle



    .more
      background-color #f5f5f5
      p
        width: 100%
        height: 1.33rem
        text-align center
        line-height 1.33rem
        font-size 0.35rem
      ul
        width: 93%
        margin-left 0.24rem
        background-color white
        li
          width: 100%
          height: 5rem
          background url("../../commen/img/bg61.jpg") no-repeat
          background-size 94% 80%
          background-position center 30%
          position relative
          p
            text-align left
            line-height 2rem

            position absolute
            left 0.2rem
            bottom 0.1rem
            font-size 0.3rem


</style>
