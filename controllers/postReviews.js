const Review = require('../models/review.js')

let postReview = (req, res) => {
	Review.create(req.body).then(data => res.send(data))
	.catch(err => {console.log(err)})
}

module.exports = postReview
