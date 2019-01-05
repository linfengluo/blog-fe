/**
 * Created by linfengluo@gmail.com on 2018/12/10.
 */
const { Router } = require('express')
const classify = require('./classify')
const article = require('./article')

const router = Router()

router.use(classify)
router.use(article)
module.exports = router
