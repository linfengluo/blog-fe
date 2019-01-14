<!--
    Created by linfengluo@gmail.com on 2019/1/4.
-->
<template>
  <section class="article" ref="article">
    <div :class="['article__container', {
      left: hasDirectory
    }]">
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
      <div class="myMarkdown" v-html="markData(article.content)" ref="articleContent"></div>
    </div>
    <div :class="['article__comments', {
      left: hasDirectory
    }]">
      <div id="lv-container" data-id="city" data-uid="MTAyMC8yOTMwNS81ODcz"></div>
    </div>
    <Directory :directory="directory"
               :offsetTop="offsetTop"
               @transition="handleTranstion"
    />
  </section>
</template>

<script>
  import DateMixin from '../../mixins/timeFormat'
  import Marked from '../../mixins/marked'
  import Directory from '../../components/article/directory.vue'
  export default {
    async asyncData({store, params }) {
      let data = await store.dispatch('getArticle', params.id)
      return {
        article: data
      }
    },
    head(){
      return {
        title: `${this.article.title} | 锋言疯语`,
        meta: [
          { hid: 'description', name: 'description', content: this.article.desc }
        ]
      }
    },
    data() {
      return {
        directory: [],
        offsetTop: 0,
        hasDirectory: false
      }
    },
    components: {
      Directory
    },
    mixins: [DateMixin, Marked],
    mounted(){
      this.initComment()
      this.initDirectory()
    },
    methods: {
      handleTranstion(val = 200){
        this.hasDirectory = true
      },
      initComment(){
        const element = document.getElementsByTagName('script')[0];

        if (typeof LivereTower === 'function') {
          return
        }

        let sript = document.createElement('script');
        sript.src = 'https://cdn-city.livere.com/js/embed.dist.js';
        sript.async = true;
        element.parentNode.insertBefore(sript, element);
      },
      initDirectory(){
        this.offsetTop = this.$refs.article.offsetTop
        const doc = this.$refs.articleContent.querySelectorAll('h1, h2, h3, h4, h5')
        const that = this
        Array.prototype.map.call(doc, (item => {
          const tagIndex = Number(item.tagName.replace(/h/ig, ''))
          if (that.directory.length === 0) {
            that.directory.push({
              id: item.id,
              index: tagIndex,
              children: []
            })
          } else {
            that.setDirectory(that.directory, tagIndex, item.id)
          }
        }))
      },

      setDirectory(source, index, id) {
        const target = source.length - 1

        if (source[target].index === index) {
          source.push({
            id: id,
            index: index,
            children: []
          })
        } else if (source[target].index === index - 1) {
          source[target].children.push({
            id: id,
            index: index,
            children: []
          })
        } else {
          this.setDirectory(source[target].children, index, id)
        }
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../scss/var";
  @import "../../scss/mixin/theme";
  @import "../../scss/fun/px2rem";
.article{
  margin: pxToRem($largeSpace) 0;

  &__container, &__comments{
    padding: pxToRem($largeSpace) pxToRem($largeSpace * 2) pxToRem($middleSpace);
    transition: all .2s;
    @include themify($themes) {
      background-color:  themed('innerBg');
    }

    @media screen and (max-width: 640px) {
      padding: pxToRem($largeSpace) pxToRem($middleSpace) pxToRem($middleSpace);
    }

    &.left{
      @media screen and (min-width: 1280px) {
        transform: translateX(-126px);
      }
    }
  }

  &__comments{
    margin: pxToRem($largeSpace) 0;
  }

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
      margin: 0 pxToRem($space);

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
