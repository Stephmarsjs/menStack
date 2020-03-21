const mongoose = require('mongoose');
const { hotelRoomSchema } = require("./Room");

const reservationSchema = new mongoose.Schema({
    checkIn: {
        type: Date,
        required: true
    },
    checkOut: {
        type: Date,
        required: true
    },
    numberOfNights: {
        type: Number
    }, 
    rooms: [hotelRoomSchema]
});  

const Reservation = mongoose.model("Reservation", reservationSchema); 

exports.reservationSchema = reservationSchema;
exports.Reservation = Reservation; 