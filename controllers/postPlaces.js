const Place = require('../models/place.js')

let postPlaces = (req, res) => {
	Place.create(req.body).then(data => res.send(data))
	.catch(err => {console.log(err)})
}

module.exports = postPlaces
