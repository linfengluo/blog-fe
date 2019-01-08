<!--
    Created by linfengluo@gmail.com on 2019/1/3.
-->
<template>
  <section class="nav">
    <ul class="nav__list">
      <li v-for="(nav, index) in navList"
          :key="index"
          :class="['nav__list--item', {
            'active': $route.name === nav.routeName
          }]"
          @click.stop="handleClick(nav)"
      >
        <i :class="['icon iconfont', nav.icon]"></i><span>{{ nav.label }}</span>
      </li>
    </ul>
    <div ></div>
  </section>
</template>

<script>
  export default {
    name: 'blogNav',
    components: {},
    mixins: [],
    data() {
      return {
        navList: [
          {
            label: '首页',
            icon:'icon-home',
            routeName: 'home'
          },
          {
            label: '归档',
            icon:'icon-guidang1',
            routeName: 'article'
          },
          {
            label: '分类',
            icon:'icon-fenlei',
            routeName: 'classify'
          },
          {
            label: '关于',
            icon:'icon-svgabout',
            routeName: 'about'
          },
          {
            label: '搜索',
            icon:'icon-search',
            routeName: 'about'
          }
        ]
      }
    },
    computed: {

    },
    watch: {},
    created(){
    },
    mounted(){
    },
    methods: {
      handleClick(nav){
        this.$router.push({
          name: nav.routeName
        })
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../scss/var";
@import "../../scss/mixin/theme";
@import "../../scss/fun/px2rem";
.nav{
  @include themify($themes) {
    color:  themed('navColor');
    background-color:  themed('navBg');
  }
  &__list{
    margin: 0 auto;
    padding: 0;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid;
    list-style: none;

    @include themify($themes) {
      border-color:  themed('navBorder');
    }

    &--item{
      padding: pxToRem(36);
      cursor: pointer;
      transition: all .2s;

      &.active{
        @include themify($themes) {
          color:  themed('navHoverColor');
          background-color:  themed('navHoverBg');
        }
      }

      &:hover{
        @include themify($themes) {
          color:  themed('navHoverColor');
          background-color:  themed('navHoverBg');
          transform: scale(1.1);
        }
      }

      span{
        margin-left: pxToRem($space);
        @media screen and (max-width: 640px){
          display: none;
        }
      }
    }

  }
}
</style>
