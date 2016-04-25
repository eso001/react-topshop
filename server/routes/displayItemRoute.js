const controllers = require('../controllers/displayItemController.js');
const router = require('express').Router();

for (var route in controllers){

	router.route("/" + route)
	  .get(controllers[route].get)
	  .post(controllers[route].post)
}

module.exports = router;