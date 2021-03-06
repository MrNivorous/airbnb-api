const mongoose = require('mongoose')
require('dotenv').config()


let database = mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true}, (err) => {
	err ? console.log(err) : console.log('Connected to MongoDB')
})

module.exports = database
