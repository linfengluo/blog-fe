<template>
  <section class="home">
    <div class="home__menu">
      <div :class="['home__menu--item', themeClass]"
           v-for="(menu, index) of menuList"
           :key="index"
           @click="handleClick(menu)"
      >
        <div>
          <i :class="['icon iconfont', menu.icon]"></i>
          <p>{{ menu.en }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'single',
  data(){
    return {
      menuList: [{
        en: 'Blog',
        route: '/home',
        color: '',
        icon: 'icon-blog'
      },{
        en: 'Demo',
        route: '',
        color: '',
        icon: 'icon-demo'
      },{
        en: 'Github',
        color: '',
        link: 'https://github.com/linfengluo',
        icon: 'icon-GitHub'
      },{
        en: 'About',
        route: '',
        color: '',
        icon: 'icon-svgabout'
      }]
    }
  },
  methods: {
    handleClick(menu){
      if (menu.link) {
        window.open(menu.link, '_blank')
      } else {
        this.$router.push(menu.route)
      }
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../scss/fun/px2rem";
  @import "../scss/mixin/theme";
  .home{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    &__menu{
      display: flex;
      flex-wrap: wrap;
      font-weight: bold;
      justify-content: center;

      &--item{
        margin: pxToRem(12);
        display: flex;
        align-items: center;
        justify-content: center;
        width: pxToRem(200);
        height: pxToRem(200);
        text-align: center;
        font-size: pxToRem(32);
        cursor: pointer;
        transition: all .5s;
        min-width: 8rem;

        &:hover{
          transform: scale(1.314);
          @include themify($themes) {
            color: themed('menuHover');
          }
        }

        .icon{
          font-size: pxToRem(60);
        }
      }
    }
  }
</style>
