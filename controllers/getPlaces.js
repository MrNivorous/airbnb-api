const Place = require('../models/place.js')

module.exports = (req, res) => {
	Place.find({})
	.then(data => {res.send(data)})

}
