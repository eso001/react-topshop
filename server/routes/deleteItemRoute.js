const controllers = require('../controllers/deleteItemController.js');
const router = require('express').Router();

for (var route in controllers){
	console.log('route', route);
	router.route("/" + route)
	  .get(controllers[route].get)
	  .delete(controllers[route].delete)

}

module.exports = router;