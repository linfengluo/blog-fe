<!--
    Created by linfengluo@gmail.com on 2019/1/9.
-->
<template>
  <Modal :isShow="isShowSearch"
         @close="handleClose"
  >
    <div class="mySearch">
      <div>
        <h4 class="mySearch__header">
          搜索
        </h4>
        <div class="mySearch__info">
          <div class="mySearch__info--input">
            <input type="text"
                   placeholder="搜您所想"
                   name="searchKey"
                   v-model="searchKey"
                   @keyup.enter="handleSearch"
            >
          </div>
          <div class="mySearch__info--btn" @click="handleSearch">
            确定
          </div>
        </div>
        <div class="mySearch__close"
             @click.stop="handleClose">
          <i class="icon iconfont icon-close"></i>
        </div>
      </div>
      <div class="mySearch__history">
        <History :historyList="historyList"
                 @remove="handleDelete"
        />
      </div>
      <div class="mySearch--delete"
           v-show="historyList.length > 0"
           @click="reset">清空搜索记录
      </div>

    </div>
  </Modal>
</template>

<script>
  import Modal from '../modal.vue'
  import History from './history.vue'
  import LocalStore from '../../../units/store'
  import { mapState } from 'vuex'
  import { CHANGE_SEARCH_STATE } from '../../../units/mutationsType'
  const LOCAL_SEARCH_KEY = 'MY_SEARCH_HISTORY'
  export default {
    components: {
      Modal,
      History
    },
    mixins: [],
    data() {
      return {
        historyList: [],
        store: null,
        searchKey: ''
      }
    },
    computed: {
      ...mapState({
        isShowSearch: state => state.isShowSearch
      })
    },
    watch: {
      historyList: {
        handler(val){
          this.store.save(LOCAL_SEARCH_KEY, val)

        },
        deep: true
      }
    },
    created(){
    },
    mounted(){
      this.store = new LocalStore()
      this.historyList = this.store.get(LOCAL_SEARCH_KEY) || []
    },
    methods: {
      reset(){
        this.historyList = []
      },
      handleSearch(){
        this.$router.push({
          name: 'article',
          query: {
            searchKey: this.searchKey,
            page: 1
          }
        })
        if (!this.historyList.includes(this.searchKey)) {
          this.historyList.unshift(this.searchKey)
        }
        this.handleClose()
        this.searchKey = ''
      },
      handleClose(){
        this.$store.commit(CHANGE_SEARCH_STATE)
      },
      handleDelete(index){
        this.historyList.splice(index, 1)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../../scss/_var";
@import "../../../scss/fun/_px2rem";
@import "../../../scss/mixin/_theme";
.mySearch{
  padding: pxToRem($largeSpace);
  width: 100%;
  height: 100%;
  background-color: $white;
  z-index: 1;
  display: flex;
  flex-direction: column;

  &__header{
    position: relative;
    padding-bottom: pxToRem($middleSpace);
    text-align: center;
  }

  &__history{
    flex: 1;
  }

  &__info{
    display: flex;
    justify-content: space-between;

    &--input{
      flex: 1;
      margin-right: pxToRem($middleSpace);
      @include themify($themes) {
        border: 1px solid themed('borderColor');
      }
      input{
        box-sizing: border-box;
        padding: 0 pxToRem($largeSpace);
        width: 100%;
        border: none;
        height: pxToRem($buttunHeight);

        &:hover, &:focus{
          outline: none;
        }
      }
    }

    &--btn{
      height: pxToRem($buttunHeight);
      line-height: pxToRem($buttunHeight);
      width: pxToRem(200px);
      background-color: $blue;
      color: $white;
      text-align: center;

      @media screen and (max-width: $pageSmallWidth){
        width: pxToRem(160px);
      }

      @include themify($themes) {
        background-color: themed('buttonHoverBg');;
        color: themed('buttonHoverColor');;
        border: 1px solid themed('buttonHoverBg');
      }

    }
  }

  &__close{
    position: absolute;
    top: 0;
    right: 5%;
    display: none;

    @media screen and (max-width: $pageSmallWidth){
      display: block;
    }

    .icon{
      font-size: pxToRem($fontSizeLarge * 1.5);
      @include themify($themes) {
        color: themed('tipsColor');
      }
    }
  }

  &--delete{
    text-align: center;
    cursor: pointer;
    @include themify($themes) {
      color: themed('tipsColor');
    }

    &:hover{
      @include themify($themes) {
        color: themed('linkHoverColor');
      }
    }
  }


}
</style>
