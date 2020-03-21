const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const hotelSchema = new Schema({
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    numberOfNights: { type: Number }, 
    room: { 
        roomType: { type: String }, 
        roomNumber: { type: Number }
        }
    }); 
const { hotelRoomSchema } = require("./Room");

module.exports = mongoose.model(
    "Hotel", new Schema({
        name: { type: String },
        location: { type: String },
        rooms: [hotelRoomSchema]
        })
    );


