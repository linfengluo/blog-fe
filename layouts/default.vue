<template>
  <div :class="['app', themeClass]">
    <PageHeader />
    <PageNav />
    <div class="app__inner">
      <nuxt />
      <ToTop />
    </div>
    <PageFooter />
    <PageSearch />
  </div>
</template>

<script>
  import PageHeader from '../components/commons/header.vue'
  import PageNav from '../components/commons/nav.vue'
  import PageFooter from '../components/commons/footer.vue'
  import ToTop from '../components/commons/toTop.vue'
  import PageSearch from '../components/commons/search/search.vue'
  import { CHANGE_SCROLLER_TOP, CHANGE_PAGE_CONFIG } from '../units/mutationsType'
  import {mapState} from 'vuex'
  export default {
    components: {
      PageHeader,
      PageNav,
      PageFooter,
      ToTop,
      PageSearch
    },
    data(){
      return {
        resizeTimer: null,
        scrollerTimer: null
      }
    },
    mounted(){
      this.initFontSize()
      window.onresize = () => {
        clearTimeout(this.resizeTimer)
        this.resizeTimer = setTimeout(() => {
          this.initFontSize()
        }, 100)
      }

      window.onscroll = () => {
        clearTimeout(this.scrollerTimer)
        this.scrollerTimer = setTimeout(() => {
          this.initScroll()
        }, 100)
      }
    },
    computed: {
      ...mapState({
        theme: state => state.theme
      }),
      themeClass(){
        return `theme-${this.theme}`
      }
    },
    methods: {
      initFontSize(){
        let width = document.documentElement.clientWidth || document.body.clientWidth
        let height = document.documentElement.clientHeight || document.body.clientHeight

        this.$store.commit(CHANGE_PAGE_CONFIG, {
          width: width,
          height: height
        })
        const rem = width < 640 ? Number(width / 18.75).toFixed(1) : 22
        document.querySelector('html').style.fontSize = `${rem}px`
      },

      initScroll(){
        const pageTop = document.documentElement.scrollTop || document.body.scrollTop
        this.$store.commit(CHANGE_PAGE_CONFIG, {
          scrollTop: pageTop
        })
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
@import "../scss/var";
@import "../scss/mixin/theme";
@import "../scss/fun/px2rem";
.app{
  width: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  font-size: pxToRem($fontSizeBase);
  background-image: url('../static/texture.png');

  @include themify($themes) {
    background-color: themed('bgColor');
  }

  &__inner{
    margin: 0 auto;
    max-width: $pageWidth;

    @include themify($themes) {
      color:  themed('fontColor');
    }
  }
}
</style>
