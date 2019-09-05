const mongoose = require('mongoose')

let place = mongoose.model('place', {
title: String,
description: String,
type: String,
city: String,
country: String,
price: Number,
rating: Number,
guests: Number,
bathrooms: Number,
})

module.exports = place
