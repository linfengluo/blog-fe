<!--
    Created by linfengluo@gmail.com on 2019/1/7.
-->
<template>
  <div :class="['toTop', {
    'isShow': scrollerTop > 300
  }]" @click.stop="backTop">
    <i class="icon iconfont icon-fanhuidingbu"></i>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    methods: {
      backTop () {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop
        if (currentScroll > 0) {
          window.scrollTo (0, currentScroll - (currentScroll / 5));
          window.requestAnimationFrame ? window.requestAnimationFrame(this.backTop) : this.backTop()
        }
      }
    },
    computed: {
      ...mapState({
        scrollerTop: state =>state.pageConfig.scrollTop
      })
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../scss/var";
@import "../../scss/fun/px2rem";
@import "../../scss/mixin/theme";
.toTop{
  position: fixed;
  bottom: 7%;
  right: 5%;
  transform: scale(0);
  transition: all .2s;

  &.isShow{
    transform: scale(1);
  }

  .icon{
    font-size: pxToRem($fontSizeBase * 3);
    cursor: pointer;
    transition: all .2s;

    @include themify($themes) {
      color:  themed('toTopColor');
    }

    &:hover{
      @include themify($themes) {
        color:  themed('toTopHoverColor');
      }
    }
  }
}
</style>
