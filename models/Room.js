const mongoose = require("mongoose");

const Schema = mongoose.Schema; 

const hotelRoomSchema = new Schema({
    roomType: { type: String },
    roomNumber: { type: Number },
    roomPrice: { type: Number },
    available: { type: Boolean }
});


const hotelRoom = mongoose.model("hotelRoom", hotelRoomSchema);

exports.hotelRoomSchema = hotelRoomSchema;
exports.hotelRoom = hotelRoom;