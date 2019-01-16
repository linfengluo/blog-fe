<!--
    Created by linfengluo@gmail.com on 2019/1/7.
-->
<template>
  <section class="articleList">
    <ul class="articleList__container" >
      <ArticleItem v-for="article of articles"
                   :key="article._id"
                   :article="article"
      ></ArticleItem>
      <NoneData v-if="articles.length <= 0"
                tips="这个人太懒了，竟然没有发布相关的文章！"
      ></NoneData>
    </ul>
    <div class="pagination__wrapper">
      <Pagination :current="pagination.current"
                  :pageSize="pagination.pageSize"
                  :total="pagination.total"
      ></Pagination>
    </div>
  </section>
</template>

<script>
import ArticleItem from '../../components/article/item.vue'
import NoneData from '../../components/commons/noneData.vue'
import Pagination from '../../components/commons/pagination.vue'
export default {
  async asyncData({store, query}) {
    let params = Object.assign({
      isHome: 1
    }, query)
    let data = await store.dispatch('getArticles', params)
    return {
      articles: data.results,
      pagination: {
        current: Number(data.current) || 1,
        pageSize: Number(data.pageSize) || 1,
        total: Number(data.total) || 0
      }
    }
  },
  head(){
    return {
      title: '归档 | 锋言疯语',
    }
  },
  components: {
    ArticleItem,
    NoneData,
    Pagination
  },
  watch: {
    '$route'(){
      this.resetData()
    }
  },
  methods: {
    resetData(){
      let params = Object.assign({
        isHome: 1
      }, this.$route.query)
      this.$store.dispatch('getArticles', params)
        .then(res => {
          this.articles = res.results
          this.pagination = {
            current: Number(res.current) || 1,
            pageSize: Number(res.pageSize) || 1,
            total: Number(res.total) || 0
          }
        })
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../scss/var";
  @import "../../scss/mixin/theme";
  @import "../../scss/fun/px2rem";
.articleList{
  margin: pxToRem($largeSpace) 0;

  &__container{
    padding: pxToRem($largeSpace) pxToRem($largeSpace * 2) pxToRem($largeSpace);
    @include themify($themes) {
      background-color:  themed('innerBg');
    }

    @media screen and (min-width: 640px) {
      min-height: pxToRem(600);
    }

    @media screen and (max-width: 640px) {
      padding: pxToRem($largeSpace) pxToRem($middleSpace) pxToRem($middleSpace);
      min-height: pxToRem(200);
    }
  }
}
</style>
