const Place = require('../models/place.js')

module.exports = (req, res) => {
	Place.findById(req.params.id).select('-guests').then(data => {res.send(data)}).catch(err => {
	res.send(err)
	})
}
