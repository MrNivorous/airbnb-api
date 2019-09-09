const mongoose = require('mongoose')

let place = mongoose.model('place', {
title: {
	type: String,
	required: [true, 'Title is required']
			},
description: {
	type: String,
	required: [true, 'Description is required']
			},
type: {
	type: mongoose.Schema.Types.ObjectId,
	ref: 'type'
			},
city: {
	type: String,
	required: [true, 'City is required']
			},
country: {
	type: String,
	required: [true, 'Country is required']
			},
price: {
	type: Number,
	required: [true, 'Price is required']
			},
rating: {
	type: Number,
	default: 0
				},
guests: {
	type: Number,
	required: [true, 'Number of guests is required']
			},
bathrooms: {
	type: Number,
	required: [true, 'Number of bathrooms is required']
	},
host: {
	type: mongoose.Schema.Types.ObjectId,
	ref: 'user'
}
})

module.exports = place
