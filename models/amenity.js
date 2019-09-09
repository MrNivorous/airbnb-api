const mongoose = require('mongoose')

let amenity = mongoose.model('amenity', {
	name: {
		type: String,
		required: [true, 'Name is required']
	},
	icon: {
		type:String,
		required: [true, 'Icon is required']
}
})

module.exports = amenity
