const { hotelSchema } = require('../../models/Hotel');
const { Reservation } = require('../../models/Reservation');
const Room = require('../../models/Hotel');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

//get list of rooms
router.get('/', async (req, res) => {
    const name = await hotelSchema.find();
    res.send(name);
});

//get one single reservation by id 
router.get('/:id', async (req, res) => {
    const reservation= await Reservation.findById(req.params.id);
    if (!reservation) return res.status(404).send('The reservation with the given ID was not found.');
    res.send(reservation);
});

// //make a room 
// router.post('/roomList', async (req, res) => { 
//     let roomList = new Room({ 
//         roomType: req.body.roomType,
//         roomNumber: req.body.roomNumber,
//         roomPrice: req.body.roomPrice,
//         available: req.body.available
//     }); 
//     try { 
//         console.log(roomList);
//         const newRoomList = await roomList.save(); 
//         res.status(201).json(newRoomList);
//     }catch (err) {  
//         res.status(400).json({message: err.message });
//     }
// });


//make a reservation
router.post('/', async (req, res) => {
    let hotelReservation = new Reservation({
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut,
        numberOfNights: req.body.numberOfNights,
        rooms: req.body.rooms
    });
    try { 
        console.log(hotelReservation); 
        hotelReservation = await hotelReservation.save();
        res.send(hotelReservation);
    }catch (err) { 
        res.status(400).json({ message: err.message });
    }
});

//update a reservation
router.put('/:id', async (req, res) => {
      const hotelReservation = await Reservation.findByIdAndUpdate(req.params.id, {
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut,
        numberOfNights: req.body.numberOfNights,
        rooms: req.body.rooms
    }, { new: false });

    if (!hotelReservation) return res.status(404).send('The reservation with the given ID was not found.');

    res.send(hotelReservation);
    console.log("Reservation updated.")
});

//delete a reservation
router.delete("/:id", async (req, res) => {
    const hotelRoom = await Reservation.findByIdAndRemove(req.params.id);
    if (!hotelRoom) return res.status(404).send(`No room available`);
    res.json(hotelRoom)
});
  
module.exports = router; 



