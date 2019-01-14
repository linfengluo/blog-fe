/**
 * Created by linfengluo@gmail.com on 2018/12/12.
 */

const formatRes = require('../units/formatRes')
const Article = require('../model/article')
const {pageQuery} = require('../units/pageQuery')
const markData = require('../units/marked')

const articleController = {
  getList(req, res, next){
    const {page, pageSize, classify, searchKey, isHome} = req.query
    let params = {}
    if (classify) {
      params.classify = classify
    }
    if (searchKey) {
      params.$or = [
        {
          title: {
            $regex: searchKey
          }
        },
        {
          content : {
            $regex: searchKey
          }
        },
        {
          desc : {
            $regex : searchKey
          }
        }
      ]
    }
    
    pageQuery(page, pageSize, Article, {
      path: 'classify',
      select: '_id, label'
    }, params, {}, isHome == 1 ? '-content' : false)
      .then(result => {
        res.json(formatRes('isOk',result))
      })
      .catch(err => {
        res.json(formatRes('serverError', err))
      })
  },
  
  get(req, res, next){
    const {id} = req.params
    Article
      .findById(id)
      .populate({
        path: 'classify',
        select: '_id, label'
      })
      .exec(function (err, doc) {
        if (err) {
          res.json(formatRes('serverError'))
        } else {
          res.json(formatRes('isOk', doc))
        }
      });
  },
  
  countClassify() {
    return new Promise((resolve, reject) => {
      Article.aggregate([
        {$match: {}},
        {$group: {
          _id: "$classify",
          count: {$sum: 1}
        }
        }
      ]).exec(function(err,reslut){
        if (err) {
          reject(err)
        } else {
          let data = {}
          reslut.map(item =>{
            data[item._id] = item.count
          })
          resolve(data)
        }
      })
    })
    
  }
}

module.exports = articleController
