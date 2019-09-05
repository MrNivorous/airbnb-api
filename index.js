const express = require('express')


const app = express()

app.get(require('./database.js'))

app.get('/', require('./controllers/root.js'))

app.get('/places', require('./controllers/getPlaces.js'))
app.post('/places', require('./controllers/postPlaces.js'))

app.listen(4000, () => {
	console.log('Ready on port 4000')
})
