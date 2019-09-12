const Place = require('../models/place.js')
const Review = require('../models/review.js')

module.exports = (req, res) => {
	Place.findById(req.params.id).populate('type amenities')
	.populate({
		path: 'host',
		select: 'name avatar'
	})
	.lean()
	.then(place =>
		Review.find({place: place._id}).then(reviews => {
				place.reviews = reviews
				res.send(place)
			})
		// 	})
		// })
		// Promise.all(places).then(data => {
		// 	res.send(data)
	.catch(err => res.send(err))
)}
