<!--
    Created by linfengluo@gmail.com on 2019/1/4.
-->
<template>
  <section class="article">
    <h3 class="article--title">
      {{ article.title }}
    </h3>
    <div class="article__info">
      <span class="article__info--classify">分类：<span>{{ article.classify.label }}</span></span>
      <span class="article__info--tags">
        标签：<span v-for="(tag, index) in article.tabs" :key="index">{{ tag }}</span>
      </span>
      <span class="article__info--date">更新：<span>{{ formatDate(article.updatedAt, 'YYYY.MM.DD') }}</span></span>
    </div>
    <div class="myMarkdown" v-html="article.content"></div>
  </section>
</template>

<script>
  import DateMixin from '../mixins/timeFormat'
  export default {
    async asyncData({store, query}) {
      let data = await store.dispatch('getArticle', query.id)
      return {
        article: data
      }
    },
    fetch () {
    },
    head: {},
    data() {
      return {}
    },
    components: {},
    mixins: [DateMixin],
    created(){
    },
    mounted(){
    },
    watch: {},
    computed: {},
    methods: {}
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../scss/var";
  @import "../scss/mixin/theme";
  @import "../scss/fun/px2rem";
.article{
  padding: pxToRem($largeSpace) pxToRem($middleSpace) pxToRem($middleSpace);

  &--title{
    margin: pxToRem($largeSpace) 0;
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
    margin-bottom: pxToRem($largeSpace);
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
}
</style>
