<template>
  <div :class="['single', themeClass]">
    <div class="single">
      <nuxt />
    </div>
  </div>
</template>

<script>
  export default {
    mounted(){
      this.initFontSize()
      window.onresize = () => {
        clearTimeout(this.resizeTimer)
        this.resizeTimer = setTimeout(() => {
          this.initFontSize()
        }, 500)
      }
    },
    methods: {
      initFontSize(){
        let width = document.documentElement.clientWidth || document.body.clientWidth
        const rem = width < 640 ? Number(width / 18.75).toFixed(1) : 22
        document.querySelector('html').style.fontSize = `${rem}px`
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
@import "../scss/var";
@import "../scss/mixin/theme";
.single{
  width: 100%;
  height: 100%;
  background-image: url('../static/texture.png');
  @include themify($themes) {
     background-color: themed('bgColor');
     color:  themed('fontColor');
   }
}
</style>
