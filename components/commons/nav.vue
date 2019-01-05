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
        {{ nav.label }}
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
            label: 'Home',
            routeName: 'home'
          },
          {
            label: 'Article',
            routeName: 'article'
          },
          {
            label: 'Classify',
            routeName: 'classify'
          },
          {
            label: 'About',
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
  }
  &__list{
    margin: 0 auto;
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
      transition: all .5s;

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
          transform: scale(1.2);
        }
      }
    }

  }
}
</style>
