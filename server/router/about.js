/**
 * Created by linfengluo@gmail.com on 2019/01/14.
 */

const { Router } = require('express')
const About  = require('../controller/about')

const router = Router()

router.get('/api/about', function (req, res, next) {
  About.get(req, res, next)
})

module.exports = router
