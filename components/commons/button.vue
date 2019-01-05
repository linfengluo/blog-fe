<!--
    Created by linfengluo@gmail.com on 2019/1/4.
-->
<template>
  <div :class="['myButton', size]" @click.stop="handleClick">
    {{ label }}
  </div>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        default: 'Button'
      },
      route: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: 'normal'
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
    methods: {
      handleClick(){
        if (this.route != '') {
          this.$router.push(this.route)
        }

        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../scss/var";
  @import "../../scss/mixin/theme";
  @import "../../scss/fun/px2rem";
.myButton{
  text-align: center;
  width: pxToRem($buttunWidth);
  height: pxToRem($buttunHeight);
  line-height: pxToRem($buttunHeight);
  cursor: pointer;
  transition: all .5s;

  @include themify($themes) {
    color:  themed('buttonColor');
    background-color:  themed('buttonBg');
  }

  &:hover{
    @include themify($themes) {
      color:  themed('buttonHoverColor');
      background-color:  themed('buttonHoverBg');
    }
  }
}
</style>
