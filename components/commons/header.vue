<!--
    Created by linfengluo@gmail.com on 2019/1/3.
-->
<template>
  <header :class="['header', themeClass]">
    <div class="header__inner">
      <h2 class="header__inner--title">疯 子</h2>
      <p class="header__inner--desc">安之若素，淡然若水</p>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'blogHeader'
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../scss/mixin/theme";
@import "../../scss/var";
@import "../../scss/fun/px2rem";
.header{
  width: 100%;
  height: pxToRem(760);
  display: flex;
  align-items: center;
  justify-content: center;
  @include themify($themes) {
    color:  themed('headerColor');
  }
  background-image: url("../../static/header.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &__inner{
    text-align: center;

    &--title{
      margin-bottom: pxToRem(12);
      font-weight: bold;
    }

    &--desc{
      font-style: italic;
    }
  }
}
</style>
