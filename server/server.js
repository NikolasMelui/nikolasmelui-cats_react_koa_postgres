const Koa = require('koa');
const logger = require('koa-morgan');
const Router = require('koa-router');
const bodyParser = require('koa-body')();
const static = require('koa-static');
const { Cats } = require('./db');

const server = new Koa();
const router = new Router();

router.get('/', ctx => {
	ctx.body = 'Working!';
});

router.get('/learn', async ctx => {
	const collection = await Cats.findAll();
	const index = Math.floor(collection.length * Math.random());
	const curCat = collection[index];
	ctx.body = curCat;
});

server
	.use(logger('dev'))
	.use(static('public'))
	.use(router.routes())
	.listen(3001);
