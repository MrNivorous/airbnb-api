const express = require('express')
const app = express()

app.get('/', (req, res) => {res.send('Welcome to AirBNB API')})

app.listen(4000, () => {
	console.log('Ready on port 4000')
})
