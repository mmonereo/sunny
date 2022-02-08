
module.exports = app => {
	app.use('/api/suns', require('./suns.routes'));
	app.use('/api/auth', require('./auth.routes'));
}
