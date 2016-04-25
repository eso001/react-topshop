const controllers = require('../controllers/addItemController.js');
const router = require('express').Router();

for (var route in controllers){
	console.log("route", route);
	router.route("/" + route)
	  .get(controllers[route].get)
	  .post(controllers[route].post);
}

module.exports = router;