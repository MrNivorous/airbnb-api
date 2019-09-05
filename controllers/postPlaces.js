const Place = require('../models/place.js')

let postPlaces = (req, res) => { Place.create({
	title: 'Unbelievable Infinite Pool',
	description: 'Feels like I\'m Harry Potter',
	type: 'A Closet',
	city: 'Houston',
	country: 'USA',
	price: 50,
	rating: 5,
	guests: 0,
	bathrooms: 0
}).then(data => res.send(data))
	.catch(err => {console.log(err)})
}

module.exports = postPlaces
