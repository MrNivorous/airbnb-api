const Place = require('../models/place.js')
const Review = require('../models/review.js')
const moment = require('moment')

module.exports = (req, res) => {
	Place.findById(req.params.id).populate('type amenities')
	.populate({
		path: 'host',
		select: 'name avatar'
	})
	.lean()
	.then(place =>
		Review.find({place: place._id}).populate('author').then(reviews => {
				// place.reviews.date = moment(date).format('D MMMM YYYY')
				place.reviews = reviews
				res.send(place)
		})
		// 	})
		// })
		// Promise.all(places).then(data => {
		// 	res.send(data)
	.catch(err => res.send(err))
)}
