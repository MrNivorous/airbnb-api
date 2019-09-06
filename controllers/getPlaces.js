const Place = require('../models/place.js')

module.exports = (req, res) => {
	Place.find({
		price: {$lt: req.query.max_price},
		bathrooms: {$gt: req.query.min_rooms},
		guests: {$gt: req.query.min_guests}
		})
		.then(data => {res.send(data)})
		.catch(err => {
		res.send(err)
		})
	}
