
const Router = require('koa-router')
const router = new Router()
const uploadCtrl = require('../controllers/upload')
const testCtrl = require('../controllers/test')
const users = require('../controllers/users')
const articles = require('../controllers/article')
const { loginRequired } = require('../middlewares/auth')

router.post('/upload', uploadCtrl.upload)
router.post('/test', loginRequired, testCtrl.Test)

// users
router.post('/register', users.register)
router.post('/login', users.login)
router.get('/userInfo', loginRequired, users.findUserInfo)

// article
router.post('/article', loginRequired, articles.createArticle)
router.post('/article/:id', loginRequired, articles.deleteArticle)
router.get('/article', loginRequired, articles.findAllArticle)
router.get('/article/:id', loginRequired, articles.findOneArticle)
router.get('/public/article', articles.findAllArticle)
router.get('/public/article/:id', articles.findOneArticle)

module.exports = router