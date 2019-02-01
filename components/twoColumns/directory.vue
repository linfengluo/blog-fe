<!--
    Created by linfengluo@gmail.com on 2019/1/7.
-->
<template>
  <section class="directory"
           ref="directory"
  ></section>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
      }
    },
    computed: {
      ...mapState({
        directory: state => state.articleDistory
      })
    },
    watch: {
      directory: {
        handler(){
          this.$nextTick(() => {
            this.renderDirectory(this.directory)
          })
        },
        deep: true
      }
    },
    mounted(){
      this.$nextTick(() => {
        this.renderDirectory(this.directory)
      })
    },
    methods: {
      renderDirectory(source){
        if (source.length <= 0) {
          return
        }
        const that = this
        this.getNode(source)
          .then(res => {
            that.$refs.directory.appendChild(res)
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
  padding: pxToRem($middleSpace) pxToRem($middleSpace) pxToRem($middleSpace) 0;
  transition: all .2s;
  height: 100%;
  max-width: 100%;
  overflow: auto;

  ul{
    padding-left: 2em;
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
