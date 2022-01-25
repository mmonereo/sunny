

module.exports = app => {
	app.use('/api/suns', require('./suns.routes'));
}
