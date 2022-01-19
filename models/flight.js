const mongoose = require('mongoose');

const Schema = mongoose.Schema

const destinationSchema = new Schema ({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    arrival: Date
});

const flightSchema = new Schema ({
    airline: {
    type: String,
    enum: ['American', 'Southwest', 'United']
    },
    airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN'
    },
    flightNo: {
    type: Number,
    required: true,
    min: 10,
    max: 9999
    },
    departs: {
    type: Date,
    default: () => new Date().toLocaleDateString() + 1
    },
    destinations: [destinationSchema]   
})

module.exports = mongoose.model('Flight', flightSchema);