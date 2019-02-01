<!--
    Created by linfengluo@gmail.com on 2019/1/11.
-->
<template>
  <div class="myClassify">
    <ul class="myClassify__container">
      <ClassifyItem v-for="classify of classifys"
                    :classify="classify"
                    :key="classify._id"
      />
    </ul>
  </div>
</template>

<script>
  import ClassifyItem from '../components/classify/item.vue'
  export default {
    async asyncData({store, query}) {
      let data = await store.dispatch('getClassifys')
      return {
        classifys: data
      }
    },
    layout: 'twoColumns',
    head(){
      return {
        title: '分类 | 锋言疯语',
      }
    },
    components: {
      ClassifyItem
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../scss/var";
  @import "../scss/mixin/theme";
  @import "../scss/fun/px2rem";
  .myClassify{
    margin: pxToRem($largeSpace) 0;

    &__container{
      padding: pxToRem($largeSpace) pxToRem($largeSpace * 2) pxToRem($largeSpace);
      @include themify($themes) {
        background-color:  themed('innerBg');
      }

      @media screen and (min-width: 640px) {
        min-height: pxToRem(600);
      }

      @media screen and (max-width: 640px) {
        padding: pxToRem($largeSpace) pxToRem($middleSpace) pxToRem($middleSpace);
        min-height: pxToRem(200);
      }
    }
  }
</style>
