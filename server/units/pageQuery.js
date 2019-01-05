/**
 * Created by linfengluo@gmail.com on 2018/12/11.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const async = require('async');

const pageQuery = function (page = 1, pageSize = 20, Model, populate = '', queryParams = {}, sortParams = {}, select = false) {
  const start = (page - 1) * pageSize;
  let $page = {
    current: page,
    pageSize: pageSize
  };
  
  return new Promise((resolve, reject) => {
    async.parallel({
      count: function (done) {  // 查询数量
        Model.estimatedDocumentCount(queryParams).exec(function (err, count) {
          done(err, count);
        });
      },
      records: function (done) {   // 查询一页的记录
        let query = Model.find(queryParams)
        if (select) {
          query = query.select(select)
        }
        query.skip(start)
          .limit(pageSize)
          .populate(populate)
          .sort(sortParams)
          .exec(function (err, doc) {
            done(err, doc);
          });
      }
    }, function (err, results) {
      if (err) {
        reject(err)
      } else {
        $page.pageCount = Math.ceil(results.count / pageSize);
        $page.results = results.records;
        $page.total = results.count;
        resolve($page)
      }
    });
  })
  
};

module.exports = {
  pageQuery: pageQuery
};
