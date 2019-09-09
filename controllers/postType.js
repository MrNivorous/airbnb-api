const Type = require('../models/type.js')

let postType = (req, res) => {
	Type.create(req.body).then(data => res.send(data))
	.catch(err => {console.log(err)})
}

module.exports = postType
