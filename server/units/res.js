
/**
 * Created by linfengluo@gmail.com on 2018/12/10.
 */

const resoposeCode = {
  isOk: {
    code: 200,
    msg: '请求成功'
  },
  update: {
    code: 200,
    msg: '更新成功'
  },
  created: {
    code: 201,
    msg: '新建成功'
  },
  none: {
    code: 204,
    msg: '无内容'
  },
  notModified: {
    code: 304,
    msg: '未更改'
  },
  badReuest: {
    code: 400,
    msg: '无效请求'
  },
  unAuth: {
    code: 401,
    msg: '未授权'
  },
  noFound: {
    code: 404,
    msg: '资源不存在'
  },
  conflict: {
    code: 409,
    msg: '冲突'
  },
  serverError: {
    code: 500,
    msg: '服务器错误'
  }
}

module.exports = resoposeCode
