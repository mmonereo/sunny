const router = require("express").Router();

// ℹ️ Handles password encryption
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

// How many rounds should bcrypt run the salt (default [10 - 12 rounds])
const saltRounds = 10;

// Require the User model in order to interact with the database
const User = require("../models/User.model");

// Require necessary (isLoggedOut and isLiggedIn) middleware in order to control access to specific routes
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/loggedin", (req, res) => {
	req.session.currentUser ? res.json(req.session.currentUser) : res.status(401).json({ errorMessage: 'Unauthorized' });
});

router.post("/signup", isLoggedOut, (req, res) => {
	const { email, password } = req.body;
	console.log(req.body);
	console.log(email, password);

	if (!email) {
		return res
			.status(400)
			.json({ errorMessage: "Please provide your email." });
	}


	// Search the database for a user with the username submitted in the form
	User.findOne({ email }).then((found) => {
		// If the user is found, send the message email is taken
		if (found) {
			return res.status(400).json({ errorMessage: "email already taken" });
		}

		// if user is not found, create a new user - start with hashing the password
		return bcrypt
			.genSalt(saltRounds)
			.then((salt) => bcrypt.hash(password, salt))
			.then((hashedPassword) => {
				// Create a user and save it in the database
				return User.create({
					email,
					password: hashedPassword,
				});
			})
			.then((user) => {
				// Bind the user to the session object
				req.session.currentUser = user;
				res.status(201).json(user);
			})
			.catch((error) => {
				if (error instanceof mongoose.Error.ValidationError) {
					return res.status(400).json({ errorMessage: error.message });
				}
				if (error.code === 11000) {
					return res.status(400).json({
						errorMessage:
							"Username need to be unique. The username you chose is already in use.",
					});
				}
				return res.status(500).json({ errorMessage: error.message });
			});
	});
});

router.post("/login", isLoggedOut, (req, res, next) => {
	const { email, password } = req.body;


	if (!email) {
		return res
			.status(400)
			.json({ errorMessage: "Please provide your email." });
	}


	// Search the database for a user with the email submitted in the form
	User.findOne({ email })
		.then((user) => {
			// If the user isn't found, send the message that user provided wrong credentials
			if (!user) {
				return res.status(400).json({ errorMessage: "Wrong credentials." });
			}

			// If user is found based on the email, check if the in putted password matches the one saved in the database
			bcrypt.compare(password, user.password).then((isSamePassword) => {
				if (!isSamePassword) {
					return res.status(400).json({ errorMessage: "Wrong credentials." });
				}
				req.session.currentUser = user;
				console.log(req.session.currentUser);
				// req.session.user = user._id; // ! better and safer but in this case we saving the entire user object
				return res.json(user);
			});
		})

		.catch((err) => {
			// in this case we are sending the error handling to the error handling middleware that is defined in the error handling file
			// you can just as easily run the res.status that is commented out below
			next(err);
			// return res.status(500).render("login", { errorMessage: err.message });
		});
});

router.get("/logout", (req, res) => {
	req.session.destroy((err) => {
		if (err) {
			return res.status(500).json({ errorMessage: err.message });
		}
		res.json({ message: "Done" });
	});
});

module.exports = router;
