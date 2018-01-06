const Koa = require('koa')
const logger = require('koa-morgan')
const Router = require('koa-router')
const bodyParser = require('koa-body')()


const server = new Koa()
const router = new Router()

router.get('/', ctx => {
  ctx.body = '!!!!'
})

router.post('/story', bodyParser, ctx => {
  ctx.body = { data: ctx.request.body }
})

server.use(logger('dev')).use(router.routes()).listen(8080)