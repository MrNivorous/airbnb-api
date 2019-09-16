const express = require('express')
const database = require('./database')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()



// Express
const app = express()

// Middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Database
database

// Routes
app.get('/', require('./controllers/root.js'))

	//Places
app.get('/places/', require('./controllers/getPlaces.js'))
app.get('/places/:id', require('./controllers/getPlace.js'))
app.post('/places', require('./controllers/postPlaces.js'))
app.patch('/places/:id', require('./controllers/patchPlace.js'))
app.delete('/places/:id', require('./controllers/deletePlace.js'))

	//Types
app.post('/type', require('./controllers/postType.js'))
app.get('/types', require('./controllers/getTypes.js'))

	// Users
app.post('/users', require('./controllers/postUsers'))

	// Amenities
app.post('/amenities', require('./controllers/postAmenities'))
app.get('/amenities', require('./controllers/getAmenities'))

	// Reviews
app.post('/reviews', require('./controllers/postReviews'))
app.get('/reviews/:id', require('./controllers/getReviews')
)

app.listen(process.env.PORT, () => {
	console.log(`Ready on port ${process.env.PORT}`)
})
