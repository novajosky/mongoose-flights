const Flight = require('../models/flight')

module.exports = {
    create
};

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        //push in subdocs into mongoose arrays
        flight.destinations.push(req.body);
        //save any changes made to the flight doc
        flight.save(function(err) {
            //step 5 respond with a redirect if data has been changed
            res.redirect(`/flights/${flight._id}`);
        });
    });
}

