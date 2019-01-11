<template>
  <section class="home">
    <ArticleItem v-for="item of articles"
                 :article="item"
                 :key="item._id" />
  </section>
</template>

<script>
import ArticleItem from '../components/home/articleItem.vue'
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
  components: {
    ArticleItem
  },
  data(){
    return {}
  },
  mounted(){
  },
  methods: {
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../scss/fun/px2rem";
  @import "../scss/mixin/theme";
  @import "../scss/var";
  .home{
    padding: pxToRem($largeSpace) pxToRem($middleSpace) pxToRem($middleSpace);
  }
</style>
