/**
 * Created by linfengluo@gmail.com on 2019/1/16.
 */

export default {
  methods: {
    handlePageChange(val){
      let query = Object.assign(this.$route.query, {
        page: val
      })
      this.$router.push({
        name: this.$route.name,
        query: query
      })
    }
  }
}
