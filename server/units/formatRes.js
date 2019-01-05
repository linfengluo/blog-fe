/**
 * Created by linfengluo@gmail.com on 2018/12/10.
 */

const resConf = require('./res')
function formatRes(type, result = null, msg = null) {
  let isNull = false
  if (type === 'isOk') {
    isNull = !result || typeof result === "object"
      ? Object.keys(result).length === 0
      : result.length === 0
  }
  
  return {
    code: isNull ? resConf['none'].code : resConf[type].code,
    data: result,
    msg: msg
      ? msg
      : isNull
        ? resConf['none'].msg
        : resConf[type].msg
  }
}


module.exports = formatRes
