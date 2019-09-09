const Amenity = require('../models/amenity.js')

let postAmenity = (req, res) => {
	Amenity.create(req.body).then(data => res.send(data))
	.catch(err => {console.log(err)})
}

module.exports = postAmenity
