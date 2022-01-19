const express = require('express');
const router = express.Router();
// you do require destination controller
const destinationsCtrl = require('../controllers/destinations')

//define the route below
//POST/flights/:id/destinations
router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;