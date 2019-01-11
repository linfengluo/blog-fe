<!--
    Created by linfengluo@gmail.com on 2019/1/9.
-->
<template>
  <transition name="slide-fade">
    <div class="myModal"
         v-show="isShow"
         :style="{'z-index': zIndex}"
    >
      <div :class="['myModal__mask',{
             'mask': needMask
           }]"
           @click.stop="handleClose"
      >
      </div>
      <div class="myModal__inner">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
  import { mapState } from 'vuex'
  import { UPDATE_MODAL_CONFIG } from '../../units/mutationsType'
  export default {
    name: 'Modal',
    props: {
      isShow: {
        type: Boolean,
        default: false
      }
    },
    components: {},
    mixins: [],
    data() {
      return {
        zIndex: 5000
      }
    },
    created(){
      this.zIndex = this.modalIndex
      this.$store.commit(UPDATE_MODAL_CONFIG, {
        zIndex: this.modalIndex + 1
      })
    },
    computed: {
      ...mapState({
        modalIndex: state => state.modalConfig.zIndex
      }),
      needMask(){
        return this.modalIndex === this.zIndex + 1
      }
    },
    watch: {},
    mounted(){
    },
    methods: {
      handleClose(){
        this.$emit('close')
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import "../../scss/mixin/theme";
@import "../../scss/var";
@import "../../scss/fun/px2rem";
.myModal{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &__mask{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;

    &.mask{
      background: $maskBg;
    }
  }

  &__inner{
    position: relative;
    width: 80%;
    max-width: $pageWidth;
    min-height: pxToRem($modalHeight);
    z-index: 2;

    @media screen and (max-width: $pageSmallWidth){
      width: 100%;
      height: 100%;
    }
  }

}
</style>
