/**
 * Created by linfengluo@gmail.com on 2018/12/10.
 */

const { Router } = require('express')
const Article  = require('../controller/article')

const router = Router()

router.get('/api/article', function (req, res, next) {
  Article.getList(req, res, next)
})

router.get('/api/article/:id', function (req, res, next) {
  Article.get(req, res, next)
})

router.post('/api/article', function (req, res, next) {
  Article.create(req, res, next)
})
router.put('/api/article', function (req, res, next) {
  Article.update(req, res, next)
})
router.delete('/api/article', function (req, res, next) {
  Article.delete(req, res, next)
})

module.exports = router
