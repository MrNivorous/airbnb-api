const Place = require('../models/place.js')

// max_price = (req, q) => {
// 	if (req.query.price < q) {
// 		return req.query
// 	}
//
// 	// if (req.params.price < e ) {
// 	// 	return req.params
// 	// } else {
// 	// 	console.log("No matches")
// 	// }
// }



module.exports = (req, res) => {
	Place.find(req.query).then(data => {res.send(data)}).catch(err => {
	res.send(err)
	})
}
