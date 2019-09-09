const User = require('../models/user.js')

let postUsers = (req, res) => {
	User.create(req.body).then(data => res.send(data))
	.catch(err => {console.log(err)})
}

module.exports = postUsers
