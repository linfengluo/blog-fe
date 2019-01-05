/**
 * Created by linfengluo@gmail.com on 2018/12/10.
 */
const formatRes = require('../units/formatRes')
const Classify = require('../model/classify')
const {pageQuery} = require('../units/pageQuery')

const classifyController = {
  getList(req, res, next){
    const {page, pageSize} = req.query
    pageQuery(page, pageSize, Classify)
      .then(result => {
        res.json(formatRes('isOk',result))
      })
      .catch(err => {
        res.json(formatRes('serverError', err))
      })
  },
  
  get(req, res, next){
    const {id} = req.params
    Classify.findById(id, 'label _id', function (err, doc) {
      if (err) {
        res.json(formatRes('serverError'))
      }
      res.json(formatRes('isOk', doc))
    });
  },
  
  delete(req, res, next){
    const {id} = req.body
    Classify.deleteOne({
        _id: id
      }, function (err, doc) {
        if (err) {
          res.json(formatRes('serverError'))
        }
        res.json(formatRes('isOk', '', '删除成功'))
      });
  },
  
  create(req, res, next){
    const { label } = req.body
    Classify.create({
      label: label
    }, function (err, doc) {
      if (err) {
        res.json(formatRes('serverError'))
      }
    
      res.json(formatRes('created', doc, '更新成功'))
    })
  },
  
  update(req, res, next){
    const {label, id} = req.body
    Classify.findByIdAndUpdate(id, {
      label: label
    }, (err, doc) => {
      if (err) {
        res.json(formatRes('serverError'))
      }
    
      res.json(formatRes('update'))
    })
  }
}

module.exports = classifyController
