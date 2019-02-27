
const Router = require('koa-router')
const router = new Router()
const uploadCtrl = require('../controllers/upload')
const testCtrl = require('../controllers/test')
const users = require('../controllers/users')

router.post('/upload', uploadCtrl.upload)
router.post('/test', testCtrl.Test)

// users
router.post('/register', users.register)

module.exports = router