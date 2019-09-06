const express = require('express')
const database = require('./database')
const bodyParser = require('body-parser')

// Express
const app = express()

// Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Database
database

// Routes
app.get('/', require('./controllers/root.js'))
app.get('/places', require('./controllers/getPlaces.js'))
app.get('/places/:id', require('./controllers/getPlace.js'))
app.post('/places', require('./controllers/postPlaces.js'))
app.patch('/places/:id', require('./controllers/patchPlace.js'))
app.delete('/places/:id', require('./controllers/deletePlace.js'))

app.listen(4000, () => {
	console.log('Ready on port 4000')
})
