<!--
    Created by linfengluo@gmail.com on 2019/1/3.
-->
<template>
  <div class="article">
    <h3 class="article--title">
      <a :href="link" :title="article.title">{{ article.title }}</a>
    </h3>
    <div class="article__info">
      <span class="article__info--classify">分类：<span>{{ article.classify.label }}</span></span>
      <span class="article__info--tags">
        标签：<span v-for="(tag, index) in article.tabs" :key="index">{{ tag }}</span>
      </span>
      <span class="article__info--date">更新：<span>{{ formatDate(article.updatedAt, 'YYYY.MM.DD') }}</span></span>
    </div>
    <div class="myMarkdown" v-html="article.desc"></div>
    <div class="article__footer">
      <MyButton label="阅读全文" :route="link"/>
    </div>
  </div>
</template>

<script>
  import DateMixin from '../../mixins/timeFormat'
  import MyButton from '../commons/button.vue'
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
    mixins: [DateMixin],
    data() {
      return {}
    },
    computed: {
      link(){
        return `/article?id=${this.article._id}`
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../scss/mixin/theme";
@import "../../scss/fun/px2rem";
@import "../../scss/var";
.article{
  padding: pxToRem($middleSpace);
  margin-bottom: pxToRem($largeSpace);
  background-color: #ffffff;
  box-shadow: 0 4px 10px rgba(0,0,0,.1);
  border-radius: $radius;


  &--title{
    display: block;
    text-align: center;

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

  &__info{
    margin: $space / 2 0;
    text-align: center;
    @include themify($themes) {
      color:  themed('tipsColor');
    }

    &--tags{
      margin: 0 $space;

      span{
        display: inline-block;

        @include themify($themes) {
          color:  themed('prominentColor');
        }
      }
    }

    &--date, &--classify{
      span{
        @include themify($themes) {
          color:  themed('prominentColor');
        }
      }
    }
  }

  &__footer{
    padding-top: pxToRem($middleSpace);
    display: flex;
    justify-content: center;
  }
}
</style>
