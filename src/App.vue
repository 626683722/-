<template>
  <div id="app">
    <TopZhezao ></TopZhezao>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'
  import TopZhezao from './components/TopZhezao/TopZhezao'

  export default {
    components: {
      FooterGuide,
      TopZhezao
    }
  }
</script>

<style>
  #app {

  }
</style>
