
const Router = require('koa-router')
const router = new Router()
const uploadCtrl = require('../controllers/upload')
const testCtrl = require('../controllers/test')

router.post('/upload', uploadCtrl.upload)
router.post('/test', testCtrl.Test)

module.exports = router