<!--
    Created by linfengluo@gmail.com on 2019/1/3.
-->
<template>
  <div class="article">
    <h3 class="article--title">
      <a :href="link" :title="article.title">{{ article.title }}</a>
    </h3>
    <div class="myMarkdown" v-html="markData(article.desc)"></div>
    <div class="article__readMore">
      <a :href="link" title="查看全文" class="article__readMore--link">Read More</a>
    </div>
    <div class="article__info">
      <div class="article__info--left">
        <span class="article__info--item">
          <i class="icon iconfont icon-classify"></i>
          <a :href="`/article?classify=${article.classify._id}`">{{ article.classify.label }}</a>

        </span>
        <span class="article__info--item">
          <i class="icon iconfont icon-06tags"></i>
          <a v-for="(tag, index) in article.tabs"
             :key="index"
             :href="`/article?tag=${tag}`">#{{ tag }}
          </a>
        </span>
      </div>
      <div class="article__info--right">
        <i class="icon iconfont icon-date"></i>{{ formatDate(article.updatedAt, 'YYYY.MM.DD') }}
      </div>
    </div>
  </div>
</template>

<script>
  import DateMixin from '../../mixins/timeFormat'
  import MyButton from '../commons/button.vue'
  import MarkedMixins from '../../mixins/marked'
  export default {
    name: 'ArticleItem',
    props: {
      article: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    components: {
      MyButton
    },
    mixins: [DateMixin, MarkedMixins],
    data() {
      return {}
    },
    computed: {
      link(){
        return `/article/${this.article._id}`
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../scss/mixin/theme";
@import "../../scss/fun/px2rem";
@import "../../scss/var";
.article{
  padding: pxToRem($largeSpace);
  margin-bottom: pxToRem($middleSpace);
  background-color: #ffffff;
  box-shadow: 0 pxToRem(4) pxToRem(10) rgba(0,0,0,.1);
  border-bottom-left-radius: pxToRem($radius);
  border-bottom-right-radius: pxToRem($radius);
  transition: all .2s;

  @include themify($themes) {
    border-bottom: pxToRem($space) solid themed('articleBorder');
  }

  &:hover{
    @include themify($themes) {
      border-color: themed('articleHoverBorder');
    }
  }

  &--title{
    display: block;

    a{
      transition: all .2s;

      @include themify($themes) {
        color:  themed('fontColor');
      }

      &:hover{
        @include themify($themes) {
          color:  themed('linkHoverColor');
        }
      }
    }
  }

  &__readMore{
    &--link{
      display: block;
      padding: pxToRem($space) 0;
      width: pxToRem(200px);
      @include themify($themes) {
        color:  themed('fontColor');
      }

      &:hover{
        @include themify($themes) {
          color:  themed('linkHoverColor');
        }
      }
    }
  }

  &__info{
    padding-top: pxToRem($middleSpace) ;
    display: flex;
    justify-content: space-between;
    font-size: pxToRem($fontSizeSmall);

    @include themify($themes) {
      color:  themed('tipsColor');
      border-top: 1px solid themed('borderColor');
    }

    .icon{
      margin-right: pxToRem($space / 2);
      font-size: pxToRem($fontSizeSmall);
    }

    a {
      @include themify($themes) {
        color: themed('tipsColor');
      }

      &:hover{
        @include themify($themes) {
          color: themed('linkHoverColor');
        }
      }
    }

    &--item{
      margin-right: pxToRem($middleSpace);
    }
  }

  &__footer{
    padding-top: pxToRem($middleSpace);
    display: flex;
    justify-content: center;
  }
}
</style>
