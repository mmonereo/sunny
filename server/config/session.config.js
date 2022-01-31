const session = require('express-session');
const MongoStore = require('connect-mongo');

module.exports = app => {
	app.use(
		session({
			secret: process.env.SESSION_SECRET || "super hyper secret key",
			resave: true,
			saveUninitialized: false,
			store: MongoStore.create({
				mongoUrl: process.env.MONGODB_URI,
			}),
			cookie: {
				maxAge: 1000 * 60 * 60 * 24 * 7,
				//sameSite: "none",
				secure: process.env.NODE_ENV === "production",
			},
		})
	);
}