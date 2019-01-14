/**
 * Created by linfengluo@gmail.com on 2019/1/4.
 */

import Markd from 'marked'
import hljs from 'highlight.js'

export default {
  create(){
    Markd.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value
      }
    })
  },
  methods: {
    markData(data) {
      if (!data) {
        return ''
      }
      return Markd(data)
    }
  }
}
