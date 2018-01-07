const Sequelize = require('sequelize');
const config = require('./config');

const db = new Sequelize(`postgres://${config.db.login}:${config.db.password}@localhost:5432/koatest`);

const Cats = db.define('cats', {
	title: Sequelize.STRING,
	content: Sequelize.TEXT,
	image: Sequelize.STRING,
});

db.sync({ force: true }).then(() => {
	Cats.create({
		title: 'test',
		content: 'tost',
		image: 'tist',
	});
});

module.exports = {
	db,
	Cats,
};
