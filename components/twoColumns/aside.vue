<!--
    Created by linfengluo@gmail.com on 2019/1/31.
-->
<template>
  <div class="twoAside">
    <div class="twoAside__tabs">
      <div v-show="hasDictory">
        <div v-for="tab of tabList"
             :key="tab.val"
             :class="['twoAside__tabs--item', {
               'active': active == tab.val
             }]"
             @click="handleChanegTab(tab.val)"
        >
          {{ tab.label }}
        </div>
      </div>
    </div>
    <div class="twoAside__content">
      <PageNav v-show="active === 'nav'"/>
      <PageDictory v-show="hasDictory && active === 'menu'"/>
    </div>
    <div class="twoAside__footer">
      <PageFooter />
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import PageNav from './nav.vue'
  import PageFooter from './footer.vue'
  import PageDictory from './directory.vue'
  export default {
    components: {
      PageNav,
      PageFooter,
      PageDictory
    },
    mixins: [],
    data() {
      return {
        active: 'nav',
        tabList: [
          {
            label: '导航',
            val: 'nav'
          },
          {
            label: '目录',
            val: 'menu'
          }
        ]
      }
    },
    computed: {
      ...mapState({
        directory: state => state.articleDistory
      }),
      hasDictory(){
        return this.$route.name === 'article-id' && this.directory.length > 0
      }
    },
    watch: {
      '$route'(route){
        this.active = route.name === 'article-id' ? 'menu' : 'nav'
      }
    },
    created(){
      this.active = this.$route.name === 'article-id' ? 'menu' : 'nav'
    },
    mounted(){
    },
    methods: {
      handleChanegTab(val){
        this.active = val
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../scss/var";
  @import "../../scss/fun/px2rem";
  .twoAside{
    width: 100%;
    height: 100%;
    padding: pxToRem($largeSpace) 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__tabs{
      height: pxToRem(200px);
      line-height: pxToRem(200px);
      &>div{
        display: flex;
        text-align: center;
      }

      &--item{
        flex: 1;
        color: $white;
      }
    }

    &__content{
      flex: 1;
      display: flex;
      justify-content: center;
    }
  }

</style>
