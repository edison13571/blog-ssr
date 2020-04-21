<template>
  <div>
    <HeaderT/>
    <nuxt />
    <!--<div class="temp"><div>博客开发中。。。敬请期待</div>当前页面：<nuxt /></div>-->
    <!--<div class="temp">-->
      <!--<nuxt />-->
    <!--</div>-->
    <Footer/>
  </div>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator';
  import HeaderT from '~/components/header'
  import Footer from '~/components/footer/footer'

  @Component({
    components: {
      HeaderT,
      Footer
    }
  })
  export default class Layout extends Vue {
    // 66
  }
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.temp{
  width: 100%;
  min-height: calc(100vh - 120px);
  @include flexJustify;
  flex-direction: column;
}
</style>
