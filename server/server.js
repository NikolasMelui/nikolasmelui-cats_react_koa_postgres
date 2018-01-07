const Koa = require('koa');
const logger = require('koa-morgan');
const Router = require('koa-router');
const bodyParser = require('koa-body')();

const server = new Koa();
const router = new Router();

router.get('/', ctx => {
	ctx.body = 'Working!';
});

router.get('/learn', ctx => {
	ctx.body = {
		title: 'Kitty',
		content: 'My little kitty!!!',
	};
});

server
	.use(logger('dev'))
	.use(router.routes())
	.listen(3001);
