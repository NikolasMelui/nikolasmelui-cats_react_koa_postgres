const Koa = require("koa")
const logger = require("koa-morgan")

const server = new Koa()
server
.use(logger('dev'))
.use(ctx => {
  ctx.body = '!!!!'
})
.listen(8080)