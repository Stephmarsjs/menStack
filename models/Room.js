const mongoose = require("mongoose");

const hotelRoomSchema = new mongoose.Schema({
    roomType: {
        type: String
    },
    roomNumber: {
        type: Number
    },
    roomPrice: {
        type: Number
    },
    available: {
        type: Boolean
    }
});

const hotelRoom = mongoose.model("hotelRoom", hotelRoomSchema);

exports.hotelRoomSchema = hotelRoomSchema;
exports.hotelRoom = hotelRoom;