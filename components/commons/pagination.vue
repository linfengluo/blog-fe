<!--
    Created by linfengluo@gmail.com on 2019/1/16.
-->
<template>
  <section class="myPagination">
    <ul class="myPagination__list">
      <li class="myPagination__list--item"
          v-show="!isFirst"
          @click="handlePanigation(1)"
      >
        1
      </li>
      <li class="myPagination__list--item"
          v-show="showPrevMore"
          @click="handlePrev"
      >
        <i class="icon iconfont icon-more"></i>
        <i class="icon iconfont icon-ai19-copy"></i>
      </li>
      <li :class="['myPagination__list--item', {
            'active': item === current
          }]"
          v-for="(item, index) in panigationList"
          :key="index"
          @click="handlePanigation(item)"
      >
        {{ item }}
      </li>
      <li class="myPagination__list--item"
          v-show="showNextMore"
          @click="handleNext"
      >
        <i class="icon iconfont icon-more"></i>
        <i class="icon iconfont icon-ai19"></i>
      </li>
      <li class="myPagination__list--item"
          v-show="!isEnd"
          @click="handlePanigation(totalPage)"
      >
        {{ totalPage }}
      </li>

    </ul>
  </section>
</template>

<script>
  export default {
    props: {
      current: {
        type: Number,
        default: 5
      },
      pageSize: {
        type: Number,
        default: 20
      },
      total: {
        type: Number,
        default: 240
      }
    },
    components: {},
    mixins: [],
    data() {
      return {}
    },
    computed: {
      totalPage(){
        return Math.ceil(this.total / this.pageSize)
      },

      isEnd(){
        return this.current + 2 >= this.totalPage
      },

      isFirst(){
        return this.current - 3 < 1
      },

      panigationList(){
        if (this.totalPage <= 5) {
          let panigation = []
          for (let i = 1; i <= this.totalPage; i++) {
            panigation.push(i)
          }
          return panigation
        }

        if (this.isEnd) {
          return [this.totalPage - 4, this.totalPage - 3, this.totalPage - 2, this.totalPage - 1, this.totalPage]
        }


        if (this.isFirst) {
          return [1, 2, 3, 4, 5]
        }

        return [this.current - 2, this.current - 1, this.current, this.current + 1, this.current + 2]
      },
      showPrevMore(){
        return this.panigationList[0] > 2
      },
      showNextMore(){
        return this.panigationList[this.panigationList.length - 1] < this.totalPage - 1
      }
    },
    watch: {},
    created(){
    },
    mounted(){
    },
    methods: {
      handlePanigation(val){
        this.$emit('change', val)
      },
      handlePrev(){
        const page = this.current - 5 > 1 ? this.current - 5 : Math.ceil((this.current - 1) / 2)
        this.$emit('change', page)
      },
      handleNext(){
        const page = this.current + 5 < this.totalPage ? this.current + 5 : Math.ceil((this.totalPage - this.current ) / 2 + this.current)
        this.$emit('change', page)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../scss/var";
  @import "../../scss/fun/px2rem";
  @import "../../scss/mixin/theme";
.myPagination{
  &__list{
    display: flex;
    list-style: none;
    padding: 0;

    &--item{
      padding: 0 pxToRem($space);
      margin: 0 pxToRem($space / 4);
      border-radius: pxToRem($radius / 2);
      transition: all .2s;
      cursor: pointer;

      .icon-ai19-copy, .icon-ai19{
        display: none;
      }

      &:hover{
        @include themify($themes) {
          background-color: themed('panigationHoverBg');
          color: themed('panigationHoverColor');
        }

        .icon-more{
          display: none;
        }

        .icon-ai19-copy, .icon-ai19{
          display: block;
        }
      }

      &.active{
        @include themify($themes) {
          background-color: themed('panigationActiveBg');
          color: themed('panigationActiveColor');
        }
      }
    }
  }
}
</style>
