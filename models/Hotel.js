const mongoose = require('mongoose');
const { reservationSchema } = require("./Reservation");

const hotelSchema = mongoose.model('Hotel', new mongoose.Schema({
    name: {
        type: String
    },
    location: {
        type: String
    },
    reservation: [reservationSchema]
})
);

exports.hotelSchema = hotelSchema;