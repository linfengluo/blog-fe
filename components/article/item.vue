<!--
    Created by linfengluo@gmail.com on 2019/1/8.
-->
<template>
  <li class="articleItem">
    <a :href="link"
       :title="article.title"
       class="articleItem__link"
    >
      <div>{{ article.title }} <span class="articleItem--desc">({{ article.classify.label }})</span></div>
      <div class="articleItem--desc">{{ formatDate(article.updatedAt, 'YYYY年MM月DD日 HH:mm') }}</div>
    </a>

  </li>
</template>

<script>
  import TimeMixins from '../../mixins/timeFormat'
  export default {
    props: {
      article: {
        props: Object,
        default(){
          return {}
        }
      }
    },
    components: {},
    mixins: [TimeMixins],
    data() {
      return {}
    },
    computed: {
      link(){
        return `/article/${this.article._id}`
      }
    },
    watch: {},
    created(){
    },
    mounted(){
    },
    methods: {
      handleClick(){

      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../scss/var";
  @import "../../scss/fun/px2rem";
  @import "../../scss/mixin/theme";
.articleItem{
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
    @include themify($themes) {
      color: themed('tipsColor');
    }
  }
}
</style>
