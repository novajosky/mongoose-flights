var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');
//All routes start with "/flights"

//GET /flights/index (index functionality - list all flights)
router.get("/", flightsCtrl.index);

//Get /flights/new
router.get("/new", flightsCtrl.new);

//POST /flights/new
router.post("/", flightsCtrl.create);

//GET /flights/:id flight details
router.get('/:id', flightsCtrl.show);

module.exports = router;
