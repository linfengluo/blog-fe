/**
 * Created by linfengluo@gmail.com on 2019/1/3.
 */
import Vue from 'vue'
import { mapState } from 'vuex'
Vue.mixin({
  computed: {
    ...mapState({
      theme: state => state.theme
    }),
    themeClass(){
      return `theme-${this.theme}`
    }
  }
})

