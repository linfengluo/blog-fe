/**
 * Created by linfengluo@gmail.com on 2018/12/10.
 */

const { Router } = require('express')
const Admin  = require('../controller/admin')

const router = Router()

router.post('/api/login', function (req, res, next) {
  Admin.login(req, res, next)
})

router.get('/api/admin', function (req, res, next) {
  Admin.getAdmin(req, res, next)
})

module.exports = router
