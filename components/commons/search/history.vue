<!--
    Created by linfengluo@gmail.com on 2019/1/10.
-->
<template>
  <div class="mySearch__history">
    <div class="mySearch__history--tips">搜索记录</div>
    <div class="mySearch__history--inner">
      <NoneData v-if="historyLength <= 0" tips="您还没有搜索过文章呢！"></NoneData>

      <div class="mySearch__history--item"
           v-for="(item, index) of historyList"
           :key="index"
      >
        <a :href="`/article?searchKey=${item}&page=1`" :title="item">{{ item }}</a>
        <i class="icon iconfont icon-close" @click.stop="handleRemove(index)"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import NoneData from '../noneData.vue'
  export default {
    props: {
      historyList:{
        type: Array,
        default(){
          return []
        }
      }
    },
    components: {
      NoneData
    },
    mixins: [],
    data() {
      return {}
    },
    computed: {
      historyLength(){
        return this.historyList.length
      }
    },
    watch: {},
    created(){
    },
    mounted(){
    },
    methods: {
      handleRemove(index){
        this.$emit('remove', index)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../../scss/_var";
  @import "../../../scss/fun/_px2rem";
  @import "../../../scss/mixin/_theme";
  .mySearch {
    &__history {
      padding-top: pxToRem($largeSpace);
      @media screen and (min-width: $pageSmallWidth){
        min-height: pxToRem(400px);
      }

      &--inner{
        display: flex;
        flex-wrap: wrap;
      }

      &--tips{
        padding-bottom: pxToRem($middleSpace);
        font-size: pxToRem($fontSizeSmall);
        @include themify($themes) {
          color: themed('tipsColor');
        }
      }

      &--item{
        padding: pxToRem($space / 2) pxToRem($middleSpace);
        margin-right: pxToRem($middleSpace);
        cursor: pointer;

        @include themify($themes) {
          color: themed('tipsColor');
          background-color: themed('bgColor');
        }

        a{
          @include themify($themes) {
            color: themed('tipsColor');
          }
        }

        &:hover a{
          @include themify($themes) {
            color: themed('linkHoverColor');
          }
        }

        .icon{
          margin-left: pxToRem($middleSpace);
        }
      }
    }
  }
</style>
