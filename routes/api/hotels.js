const { hotelSchema } = require('../../models/Hotel');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

//get list of available rooms 
router.get('/', async (req, res) => {
    const name = await hotelSchema.find();
    res.send(name);
});

//get one single reservation by id 
router.get('/:id', async (req, res) => {
    const hotelRoom = await reservationSchema.findById(req.params.id);
    if (!hotelRoom) return res.status(404).send('The reservation with the given ID was not found.');
    res.send(hotelRoom);
});

//make a reservation
router.post('/', async (req, res) => {
    let hotelReservation = new reservationSchema({
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut,
        numberOfNights: req.body.numberOfNights,
        rooms: req.body.room
    });

    hotelReservation = await hotelReservation.save();
    console.log(hotelReservation); 
    res.send(hotelReservation);
});

//update a reservation
router.put('/:id', async (req, res) => {
      const hotelReservation = await reservationSchema.findByIdAndUpdate(req.params.id, {
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut,
        numberOfNights: req.body.numberOfNights,
        room: req.body.room
    }, { new: false });

    if (!hotelReservation) return res.status(404).send('The reservation with the given ID was not found.');

    res.send(hotelReservation);
    console.log("Reservation updated.")
});

//delete a reservation
router.delete("/:id", async (req, res) => {
    const hotelRoom = await reservationSchema.findByIdAndRemove(req.params.id);
    if (!hotelRoom) return res.status(404).send(`No room available`);
    res.json(hotelRoom)
});
  
module.exports = router; 
