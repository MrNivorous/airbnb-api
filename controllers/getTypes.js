let Type = require('../models/type.js')

module.exports = (req, res) => {
Type.find({})
	.then(data => {res.send(data)})
	.catch(err => {
	res.send(err)
	})
}
