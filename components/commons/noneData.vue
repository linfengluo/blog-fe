<!--
    Created by linfengluo@gmail.com on 2019/1/10.
-->
<template>
  <div class="noneData">
    <div class="noneData__inner">
      <div class="noneData--icon">
        <i class="icon iconfont icon-none"></i>
      </div>
      {{ tips }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'None',
    props: {
      tips: {
        type: String,
        default: '暂无数据'
      }
    },
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
.noneData{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @include themify($themes) {
    color:  themed('tipsColor');
  }

  &__inner{
    text-align: center;
  }

  &--icon{
    .icon{
      font-size: pxToRem(120);
    }
  }
}
</style>
