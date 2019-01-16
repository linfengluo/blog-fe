<!--
    Created by linfengluo@gmail.com on 2019/1/16.
-->
<template>
  <div class="error">
    <div class="error__container">
      <div>
        <img src="../static/errr.png" alt="">
        <nuxt-link to="/" class="error__container--link">返回首页</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['error'],
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../scss/var";
  @import "../scss/mixin/theme";
  @import "../scss/fun/px2rem";
  .error {
    margin: pxToRem($largeSpace) 0;

    &__container{
      padding: pxToRem($largeSpace) pxToRem($largeSpace * 2) pxToRem($middleSpace);
      transition: all .2s;
      display: flex;
      justify-content: center;
      @include themify($themes) {
        background-color: themed('innerBg');
      }

      &>div{
        flex: 1;
        text-align: center;
      }

      img{
        max-width: 100%;
      }

      @media screen and (max-width: 640px) {
        padding: pxToRem($largeSpace) pxToRem($middleSpace) pxToRem($middleSpace);
      }

      &--link{
        margin: pxToRem($largeSpace) auto;
        display: block;
        width: pxToRem(200);
        height: pxToRem(60);
        line-height: pxToRem(60);
        text-align: center;

        @include themify($themes) {
          background-color: themed('buttonHoverBg');
          color: themed('buttonHoverColor');
        }
      }
    }
  }
</style>
