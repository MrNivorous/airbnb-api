const Place = require('../models/place.js')

module.exports = (req, res) => {
	Place.findById(req.params.id).populate('type')
	.populate({
		path: 'host',
		select: 'name avatar'
	})
	.then(data => {res.send(data)}).catch(err => {res.send(err)})
}
