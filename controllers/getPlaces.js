const Place = require('../models/place.js')

module.exports = (req, res) => {

search = () => {
	let searchObj = {}
	req.query.max_price ? searchObj.price = {$lte: req.query.max_price} : null
	req.query.min_rooms ? searchObj.bathrooms = {$gte: req.query.min_rooms} : null
	req.query.min_guests ? searchObj.guests = {$gte: req.query.min_guests} : null
	return searchObj
}

	Place.find(search())
		.populate('type')
		.then(data => {res.send(data)})
		.catch(err => {
		res.send(err)
		})
	}
