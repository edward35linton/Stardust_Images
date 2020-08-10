const router = require('express').Router();
let Photos = require ('../models/photos.model');

router.route('/').get((req, res) => {
	Photos.find()
		.then(photos => res.json(photos))
		.catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;