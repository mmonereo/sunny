// We reuse this import in order to have access to the `body` property in requests
const express = require("express");

// ℹ️ Responsible for the messages you see in the terminal as requests are coming in
// https://www.npmjs.com/package/morgan
const logger = require("morgan");

// ℹ️ Needed when we deal with cookies (we will when dealing with authentication)
// https://www.npmjs.com/package/cookie-parser
const cookieParser = require("cookie-parser");

// ℹ️ Needed to accept from requests from 'the outside'. CORS stands for cross origin resource sharing
// unless the request if from the same domain, by default express wont accept POST requests
const cors = require("cors");

// ℹ️ MongoStore in order to save the user session in the database
// https://www.npmjs.com/package/connect-mongo
const MongoStore = require("connect-mongo");

// Connects the mongo uri to maintain the same naming structure
const MONGO_URI = require("../utils/consts");

// Middleware configuration
module.exports = (app) => {
	// Because this is a server that will accept requests from outside and it will be hosted ona server with a `proxy`, express needs to know that it should trust that setting.
	// Services like heroku use something called a proxy and you need to add this to your server
	app.set("trust proxy", 1);

	// controls a very specific header to pass headers from the frontend
	// ! please configure the cors `origin` key so that you can accept the requests wherever they might be coming from
	app.use(
		cors({
			credentials: true,
			origin: process.env.ORIGIN || "http://localhost:3000",
		})
	);


	app.use(logger("dev"));
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(cookieParser());


	require("./session.config")(app);

	app.use((req, res, next) => {
		req.user = req.session.user || null;
		next();
	});
};
