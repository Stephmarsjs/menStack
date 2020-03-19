const mongoose = require('mongoose');
const hotelSchema = mongoose.model('Hotel', new mongoose.Schema({
   
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

exports.hotelSchema = hotelSchema;