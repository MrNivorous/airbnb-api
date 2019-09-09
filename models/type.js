const mongoose = require('mongoose')

let type = mongoose.model('type', {
	name: String
}
)

module.exports = type
