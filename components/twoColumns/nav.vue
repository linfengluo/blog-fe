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
  import { CHANGE_SEARCH_STATE } from '../../units/mutationsType'
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
            routeName: 'index'
          },
          {
            label: '归档',
            icon:'icon-guidang1',
            routeName: 'article'
          },
          {
            label: '分类',
            icon:'icon-classify',
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
            method: 'handleSearch'
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
        if (nav.routeName) {
          this.$router.push({
            name: nav.routeName
          })
        } else {
          nav.method && this[nav.method]()
        }
      },

      handleSearch(){
        this.$store.commit(CHANGE_SEARCH_STATE, true)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../scss/var";
@import "../../scss/mixin/theme";
@import "../../scss/fun/px2rem";
.nav{
  width: 100%;

  &__list{
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
    font-size: pxToRem($fontSizeLarge);
    @include themify($themes) {
      border-color:  themed('navBorder');
      color:  themed('navColor');
    }

    &--item{
      cursor: pointer;
      transition: all .2s;
      transition: all .3s;
      line-height: pxToRem($fontSizeLarge * 4);

      &:hover{
        font-size: pxToRem($fontSizeLarge);
        font-weight: bold;

      }
      &.active{
        font-size: pxToRem($fontSizeBase * 2);
        font-weight: bold;
        @include themify($themes) {
          color: themed('navHoverColor');
        }

        .icon{
          font-size: pxToRem($fontSizeBase * 2);
        }
      }

      span{
        margin-left: pxToRem($space);

      }
    }

  }
}
</style>
