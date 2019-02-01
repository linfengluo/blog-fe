<template>
  <div :class="['app', themeClass]">
    <div class="app__left">
      <PageAside />
    </div>
    <div class="app__right" @scroll="setScroller" ref="appContainer">
      <div class="app__inner">
        <nuxt />
      </div>
      <PageSearch />
      <ToTop @top="handleTop"/>
    </div>
  </div>
</template>

<script>
  import PageAside from '../components/twoColumns/aside.vue'
  import PageNav from '../components/commons/nav.vue'
  import PageFooter from '../components/commons/footer.vue'
  import ToTop from '../components/commons/toTop.vue'
  import PageSearch from '../components/commons/search/search.vue'
  import { CHANGE_SCROLLER_TOP, CHANGE_PAGE_CONFIG } from '../units/mutationsType'
  import {mapState} from 'vuex'
  export default {
    components: {
      PageAside,
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
      handleTop(){
        var currentScroll = this.$refs.appContainer.scrollTop
        if (currentScroll > 0) {
          this.$refs.appContainer.scrollTo (0, currentScroll - (currentScroll / 5));
          window.requestAnimationFrame ? window.requestAnimationFrame(this.handleTop) : this.handleTop()
        }
      },
      setScroller(){
        clearTimeout(this.scrollerTimer)
        this.scrollerTimer = setTimeout(() => {
          this.initScroll()
        }, 100)
      },
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
        const pageTop = this.$refs.appContainer.scrollTop
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
  height: 100%;
  display: flex;
  overflow: hidden;
  font-size: pxToRem($fontSizeBase);
  background-image: url('../static/wolf1.jpg');
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  @include themify($themes) {
    background-color: themed('bgColor');
  }

  &__inner{
    margin: 0 auto 0 pxToRem(100)  ;
    max-width: $pageWidth;

    @include themify($themes) {
      color:  themed('fontColor');
    }
  }

  &__left{
    flex: 0 0 30%;
    max-width: 500px;
  }

  &__right{
    flex: 1;
    overflow-y: auto;
  }
}
</style>
