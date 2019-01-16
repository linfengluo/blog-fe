<!--
    Created by linfengluo@gmail.com on 2019/1/8.
-->
<template>
  <li class="classifyItem">
    <a :href="link"
       :title="classify.label"
       class="classifyItem__link"
    >
      <div>{{ classify.label }}</div>
      <div class="classifyItem--desc">文章总数：{{ classify.count || 0 }}</div>
    </a>
  </li>
</template>

<script>
  import TimeMixins from '../../mixins/timeFormat'
  export default {
    props: {
      classify: {
        props: Object,
        default(){
          return {}
        }
      }
    },
    mixins: [TimeMixins],
    computed: {
      link(){
        return `/article?classify=${this.classify._id}&page=1`
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../scss/var";
  @import "../../scss/fun/px2rem";
  @import "../../scss/mixin/theme";
.classifyItem{
  list-style: none;
  &__link{
    position: relative;
    padding: pxToRem($space) 0;
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    @include themify($themes) {
      border-bottom: 1px dashed themed('borderColor');
      color: themed('fontColor');
    }

    &:before{
      position: absolute;
      left: pxToRem(-$fontSizeBase);
      top: 0;
      bottom: 0;
      margin: auto 0;
      content: ' ';
      width: pxToRem($fontSizeBase / 2);
      height: pxToRem($fontSizeBase / 2);
      border-radius: 50%;
      transition: all .2s;

      @include themify($themes) {
        background-color:  themed('iconColor');
      }
    }

    &:hover{
      @include themify($themes) {
        color: themed('linkHoverColor');
      }

      @at-root &:before{
        @include themify($themes) {
          background-color:  themed('iconHoverColor');
        }
      }
    }
  }

  &--desc {
    margin-left: pxToRem($space);
    font-size: pxToRem($fontSizeSmall);
    @include themify($themes) {
      color: themed('tipsColor');
    }
  }
}
</style>
