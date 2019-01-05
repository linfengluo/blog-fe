/**
 * Created by linfengluo@gmail.com on 2019/1/4.
 */

const Markd = require('marked')
const hljs = require('highlight.js')

Markd.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value
  }
})

function markData(data) {
  return Markd(data)
}

module.exports = markData

