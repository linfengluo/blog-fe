/**
 * Created by linfengluo@gmail.com on 2018/12/10.
 */

const { Router } = require('express')
const Classify  = require('../controller/classify')

const router = Router()

router.get('/api/classify', function (req, res, next) {
  Classify.getList(req, res, next)
})

module.exports = router
