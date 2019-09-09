const Place = require('../models/place.js')

module.exports = (req, res) => {
	Place.findById(req.params.id).populate('type')
	.then(data => {res.send(data)}).catch(err => {res.send(err)})
}
