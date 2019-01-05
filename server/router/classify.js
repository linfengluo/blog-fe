/**
 * Created by linfengluo@gmail.com on 2018/12/10.
 */

const { Router } = require('express')
const Classify  = require('../controller/classify')

const router = Router()

router.get('/api/classify', function (req, res, next) {
  Classify.getList(req, res, next)
})

router.get('/api/classify/:id', function (req, res, next) {
  Classify.get(req, res, next)
})

router.post('/api/classify', function (req, res, next) {
  Classify.create(req, res, next)
})
router.put('/api/classify', function (req, res, next) {
  Classify.update(req, res, next)
})
router.delete('/api/classify', function (req, res, next) {
  Classify.delete(req, res, next)
})

module.exports = router
