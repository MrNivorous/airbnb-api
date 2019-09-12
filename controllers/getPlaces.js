const Place = require('../models/place.js')
const Review = require('../models/review')

module.exports = (req, res) => {

search = () => {
	let searchObj = {}
	req.query.max_price ? searchObj.price = {$lte: req.query.max_price} : null
	req.query.min_rooms ? searchObj.bathrooms = {$gte: req.query.min_rooms} : null
	req.query.min_guests ? searchObj.guests = {$gte: req.query.min_guests} : null
	return searchObj
}

Place.find(search())
	.select('city country images price reviews title type')
	.populate('type')
	// .populate('reviews')
	.lean()
	.then(data => {
		let places = data.map(p => {
			return Review.find({place: p._id}).then(reviews => {
				p.reviews = reviews.length
				p.type = p.type.name
				p.images ? p.image = p.images[0] : null
				delete p.images
				return p
			})
		})
		Promise.all(places).then(data => {
			res.send(data)
		})
	.catch(err => res.send(err))
})
}

	// place.type = place.type.name
