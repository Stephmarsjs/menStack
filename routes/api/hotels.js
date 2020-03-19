const { hotelSchema } = require('../../models/Hotel');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const name = await hotelSchema.find();
    res.send(name);
});

router.get('/:id', async (req, res) => {
    const hotelRoom = await hotelSchema.findById(req.params.id);
    if (!hotelRoom) return res.status(404).send('The reservation with the given ID was not found.');
    res.send(hotelRoom);
});

router.post('/', async (req, res) => {
<<<<<<< HEAD

    let hotelReservation = new hotelSchema({
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut,
=======
    let hotelRoom = new hotelSchema({
        // checkIn: req.body.checkIn,
        // checkOut: req.body.checkOut,
>>>>>>> 0fb18a578bfc1c72b2a9085d2a0097d51fb8c93f
        numberOfNights: req.body.numberOfNights,
        room: req.body.room
    });

    hotelReservation = await hotelReservation.save();
    console.log(hotelReservation); 
    res.send(hotelReservation);
});

router.put('/:id', async (req, res) => {

      const hotelReservation = await hotelSchema.findByIdAndUpdate(req.params.id, {
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut,
        numberOfNights: req.body.numberOfNights,
        room: req.body.room
    }, { new: false });

    if (!hotelReservation) return res.status(404).send('The reservation with the given ID was not found.');

    res.send(hotelReservation);
    console.log("Reservation updated.")
});

router.delete("/:id", async (req, res) => {
    const hotelRoom = await hotelSchema.findByIdAndRemove(req.params.id);
    if (!hotelRoom) return res.status(404).send(`No room available`);
    res.json(hotelRoom)
});
  
module.exports = router; 
