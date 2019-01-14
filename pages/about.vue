<!--
    Created by linfengluo@gmail.com on 2019/1/11.
-->
<template>
  <div class="about">
    <div class="about__container myMarkdown" v-html="markData(about.content)"></div>
  </div>
</template>

<script>
  import MarkedMixins from '../mixins/marked'
  export default {
    async asyncData({store, params }) {
      let data = await store.dispatch('getAbout')
      return {
        about: data
      }
    },
    head(){
      return {
        title: '关于 | 锋言疯语',
      }
    },
    mixins: [MarkedMixins]
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../scss/var";
  @import "../scss/mixin/theme";
  @import "../scss/fun/px2rem";
  .about {
    margin: pxToRem($largeSpace) 0;

    &__container{
      padding: pxToRem($largeSpace) pxToRem($largeSpace * 2) pxToRem($middleSpace);
      transition: all .2s;
      @include themify($themes) {
        background-color: themed('innerBg');
      }

      @media screen and (max-width: 640px) {
        padding: pxToRem($largeSpace) pxToRem($middleSpace) pxToRem($middleSpace);
      }
    }
  }
</style>
