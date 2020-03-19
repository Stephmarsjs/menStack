const mongoose = require('mongoose');
const hotelSchema = mongoose.model('Hotel', new mongoose.Schema({
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
    room: {
        roomType: {
        type: String
        }, 
        roomNumber: {
        type: Number 
        }
    }
})); 
const { hotelRoomSchema } = require("./hotelRoom");

module.exports = mongoose.model(
    "Hotel", new mongoose.Schema({
        name: {
            type: String
        },
        location: {
            type: String
        },
        rooms: [hotelRoomSchema]
    })
);