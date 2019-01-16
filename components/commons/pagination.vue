<!--
    Created by linfengluo@gmail.com on 2019/1/16.
-->
<template>
  <ul class="myPagination myPagination__list">
    <li class="myPagination__list--item"
        v-show="!isFirst"
        key="pageFirst"
    >
      <nuxt-link :to="getLink(1)" class="myPagination__list--link">
        1
      </nuxt-link>
    </li>
    <li class="myPagination__list--item"
        v-show="showPrevMore"
        key="more"
    >
      <nuxt-link :to="getLink(null, 'prev')" class="myPagination__list--link">
        <i class="icon iconfont icon-more"></i>
        <i class="icon iconfont icon-ai19-copy"></i>
      </nuxt-link>
    </li>
    <li :class="['myPagination__list--item', {
          'active': page === current
        }]"
        v-for="page of panigationList"
        :key="page"
    >
      <nuxt-link :to="getLink(page)" class="myPagination__list--link">{{ page }}</nuxt-link>
    </li>
    <li class="myPagination__list--item"
        v-show="showNextMore"
        key="nextMore"
    >
      <nuxt-link :to="getLink(null, 'next')" class="myPagination__list--link">
        <i class="icon iconfont icon-more"></i>
        <i class="icon iconfont icon-ai19"></i>
      </nuxt-link>
    </li>
    <li class="myPagination__list--item"
        v-show="!isEnd"
        key="pageEnd"
    >
      <nuxt-link :to="getLink(totalPage)" class="myPagination__list--link">
        {{ totalPage }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      current: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 10
      },
      total: {
        type: Number,
        default: 0
      }
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
    methods: {
      getLink(page, special = false){
        let link = this.$route.path + '?'
        let query = this.$route.query

        if (special) {
          page = special === 'next'
            ? this.current + 5 < this.totalPage ? this.current + 5 : Math.ceil((this.totalPage - this.current ) / 2 + this.current)
            : this.current - 5 > 1 ? this.current - 5 : Math.ceil((this.current - 1) / 2)
        }
        if (!query.hasOwnProperty('page')) {
          query.page = page
        }

        for (let key in query) {
          link = `${link}${key}=${key === 'page' ? page : query[key]}&`
        }

        link = link.substr(0, link.length - 1)
        return link
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
    font-size: pxToRem($fontSizeBase);

    &--link{
      padding: 0 pxToRem($space);
      display: block;
      height: pxToRem(40);
      line-height: pxToRem(40);
      @include themify($themes) {
        color: themed('fontColor');
      }
    }

    &--item{
      box-sizing: border-box;
      margin: 0 pxToRem($space / 4);
      width: pxToRem(60);

      text-align: center;
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

        a{
          @include themify($themes) {
            color: themed('panigationHoverColor');
          }
        }
      }

      &.active{
        @include themify($themes) {
          background-color: themed('panigationActiveBg');
        }

        a{
          @include themify($themes) {
            color: themed('panigationActiveColor');
          }
        }
      }
    }
  }
}
</style>
