const express = require('express');

// importing all the controllers components 
var paymentController = require('../Controllers/Payment');


// Initializing the express router 
const router = express.Router();

// registering of all the routes
router.get('/cityList', pymentController.getPaymentList);


module.exports = router; // export the router