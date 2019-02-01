<!--
    Created by linfengluo@gmail.com on 2019/1/4.
-->
<template>
  <footer class="footer">
    <div class="footer__inner">
      <p><span class="footer__inner--copy">Copyright &copy; 2019</span></p>
      <p><a href="mail:linfengluo@gmail.com">linfengluo@gmail.com</a></p>
      <p>All Rights Reserved</p>
      <p><span class="footer__inner--power">Powered by <a href="https://zh.nuxtjs.org/">Nuxt</a></span></p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'blogFooter',
    components: {},
    mixins: [],
    data() {
      return {}
    },
    computed: {},
    watch: {},
    created(){
    },
    mounted(){
    },
    methods: {}
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../scss/var";
@import "../../scss/fun/px2rem";
@import "../../scss/mixin/theme";

.footer{
  @include themify($themes) {
    color: themed('footerColor')
  }
  &__inner{
    text-align: center;

    &--copy{
    }
    a{
      @include themify($themes) {
        color: themed('footerColor')
      }
    }
  }
}
</style>
