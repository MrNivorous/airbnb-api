const Place = require('../models/place.js')

module.exports = (req, res) => {
	Place.findById(req.params.id).then(data => {res.send(data)}).catch(err => {
	res.send(err)
	})
}
