<template>
  <section class="home">
    <ArticleItem v-for="item of articles"
                 :article="item"
                 :key="item._id" />
    <div class="pagination__wrapper">
      <Pagination :current="pagination.current"
                  :pageSize="pagination.pageSize"
                  :total="pagination.total"
      ></Pagination>
    </div>
  </section>
</template>

<script>
import ArticleItem from '../components/home/articleItem.vue'
import Pagination from '../components/commons/pagination.vue'
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
    ArticleItem,
    Pagination
  },
  watch: {
    '$route'(){
      this.initData()
    }
  },
  methods: {
    initData(){
      const params = this.$route.query
      this.$store.dispatch('getArticles', params)
        .then(data => {
          this.articles = data.results
          this.pagination = {
            current: Number(data.current) || 1,
            pageSize: Number(data.pageSize) || 1,
            total: Number(data.total) || 0
          }
        })
    }
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
