const Place = require('../models/place.js')

let postPlaces = (req, res) => { Place.create({
	title: 'Unbelievable Infinite Pool',
	description: 'So nice!',
	type: 'Entire House',
	city: 'Houston',
	country: 'USA',
	price: 350,
	rating: 4,
	guests: 5,
	bathrooms: 5
}).then(data => res.send(data))
	.catch(err => {console.log(err)})
}

module.exports = postPlaces
