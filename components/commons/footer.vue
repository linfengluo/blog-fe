<!--
    Created by linfengluo@gmail.com on 2019/1/4.
-->
<template>
  <footer class="footer">
    <div class="footer__inner">
      <p>
        <span class="footer__inner--copy">Copyright &copy; 2019 <a href="mail:linfengluo@gmail.com">linfengluo@gmail.com</a> All Rights Reserved</span>
      </p>
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
  padding: pxToRem($middleSpace);
  @include themify($themes) {
    background-color:  themed('footerBg');
    color: themed('footerColor')
  }
  &__inner{
    text-align: center;

    &--copy{
      margin-right: pxToRem($middleSpace);
    }
    a{
      margin-left: pxToRem($space);
      @include themify($themes) {
        color: themed('footerColor')
      }
    }
  }
}
</style>
