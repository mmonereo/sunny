const router = require("express").Router();
const GeoCodeService = require("../services/geocode.service");
const Sun = require("../models/Sun.model");
const User = require("../models/User.model");

const myGeoCodeService = new GeoCodeService();

// Get every sun
router.get('/list/all', (req, res) => {

	Sun.find({})
		.then((suns) => res.status(200).json(suns))
		.catch((err) => res.status(500).json({ errMessage: 'Error getting all suns' }));
});

// Get every sunrise or sunset
router.get('/list/:category', (req, res) => {

	const {category} = req.params;

	Sun.find({category})
		.then((suns) => res.status(200).json(suns))
		.catch((err) => res.status(500).json({ errMessage: 'Error getting every sunrise/sunset' }));
});

// Get one sun by id
router.get('/details/:id', (req, res) => {

	const {id} = req.params;
	Sun.findById(id)
		.populate('creator')
		.then((suns) => {res.status(200).json(suns)})
		.catch((err) => res.status(500).json({ errMessage: 'Error getting one sun' }));
})

router.post('/new', (req, res) => {
	const {name, description, category, street, number, city} = req.body;
	const creator = req.session.currentUser._id;
	const address = `${street} ${number} ${city}`;

	myGeoCodeService.getCoordinates(address)
		.then(location => Sun.create({name, description, category, location, address: {street, number, city}, creator}))
		.then(sun => res.status(200).json(sun))
		.catch(err => res.status(500).json({ errMessage: 'Error creating new sun' }));
})



module.exports = router;