/**
 * Created by linfengluo@gmail.com on 2018/12/10.
 */
const formatRes = require('../units/formatRes')
const Classify = require('../model/classify')
const Article = require('../model/article')
const ArticleController = require('../controller/article')
const {pageQuery} = require('../units/pageQuery')
const async = require('async');

const classifyController = {
  getList(req, res, next){
    async.parallel({
      count: function (done) {  // 查询数量
        ArticleController.countClassify()
          .then(res => {
            done(null, res);
          })
          .catch(err => {
            done(err, null);
          })
      },
      records: function (done) {   // 查询一页的记录
        Classify
          .find()
          .select('_id label')
          .exec(function (err, doc) {
            if (err) {
              done(err, null);
            } else {
              done(null, doc);
            }
          });
      }
    }, function (err, results) {
      if (err) {
        res.json(formatRes('serverError', err))
      } else {
        const result = results.records.map((item, index) => {
          return {
            _id: item._id,
            label: item.label,
            count: results.count[item._id]
          }
        })
        
        res.json(formatRes('isOk', result))
      }
    });
    
  }
}

module.exports = classifyController
