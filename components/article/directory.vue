<!--
    Created by linfengluo@gmail.com on 2019/1/7.
-->
<template>
  <section class="directory"
           ref="directory"
           v-show="isInit"
           :style="directoryStyle"
  ></section>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    props: {
      directory: {
        type: Array,
        default(){
          return []
        }
      },
      offsetTop: {
        type: Number,
        default: 0
      }
    },
    components: {},
    mixins: [],
    data() {
      return {
        isInit: false,
        top: 500,
        right: 0,
        directoryWidth: 240,
        canShow: false
      }
    },
    computed: {
      ...mapState({
        pageWidth: state => state.pageConfig.width,
        scrollTop: state => state.pageConfig.scrollTop
      }),
      directoryStyle() {
        return {
          top: `${this.top}px`,
          right: `${this.right}px`
        }
      }

    },
    watch: {
      scrollTop: function (val) {
        this.$nextTick(() => {
          this.resetStyle('top')
        })
      },
      pageWidth: function () {
        this.$nextTick(() => {
          this.resetStyle('right')
        })
      }
    },
    created(){
    },
    mounted(){
      this.$nextTick(() => {
        this.renderDirectory(this.directory)
      })
    },
    methods: {
      initCurrentDirectory(){

      },
      resetStyle(type){
        if (type === 'all' || type === 'top') {
          this.top = this.scrollTop >= this.offsetTop ? 0 : this.offsetTop - this.scrollTop
        }

        if (type === 'all' || type === 'right') {
          const targetWdith = 960 + this.directoryWidth + 12

          this.right = this.pageWidth > targetWdith
            ? (this.pageWidth - targetWdith) / 2
            : 0
          this.canShow = this.pageWidth > targetWdith
        }
      },
      renderDirectory(source){
        if (source.length <= 0) {
          return
        }
        const that = this
        this.getNode(source)
          .then(res => {
            that.$refs.directory.appendChild(res)
            that.isInit = true
            this.$nextTick(() => {
              that.$emit('transition')
              that.resetStyle('all')
            })
          })
      },
      getNode(source){
        const that = this

        return new Promise((resolve, reject) => {
          let ulNode = document.createElement('ul')
          try {
            source.map(item => {
              let liNode = document.createElement('li')
              let aNode = document.createElement('a')
              aNode.setAttribute('href', `#${item.id}`)
              aNode.innerText = item.id
              liNode.appendChild(aNode)

              if (item.children.length > 0) {
                that.getNode(item.children)
                  .then(res =>{
                    liNode.appendChild(res)
                  })
              }
              ulNode.appendChild(liNode)
            })
            resolve(ulNode)
          } catch (err) {
            reject(err)
          }
        })
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
@import "../../scss/var";
@import "../../scss/fun/px2rem";
@import "../../scss/mixin/theme";
.directory{
  position: fixed;
  padding: pxToRem($middleSpace) pxToRem($middleSpace) pxToRem($middleSpace) 0;
  transition: all .2s;
  width: 240px;
  right: 0;

  @media screen and  (max-width:1280px){
    display: none;
  }
  ul{
    padding-left: 2em;
  }
  @include themify($themes) {
    background-color:  themed('dictBg');
  }

  a{
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: keep-all;
    display: block;

    @include themify($themes) {
      color:  themed('dictColor');
    }

    &:hover{
      @include themify($themes) {
        color:  themed('linkHoverColor');
      }
    }
  }
}

</style>
