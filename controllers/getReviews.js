const Review = require('../models/review.js')
const Place = require('../models/place.js')


module.exports = (req, res) => {
	Review.find({place: req.params.id}).then(data => {res.send(data)}).catch(err => {res.send(err)})
}
