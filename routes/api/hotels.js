const { hotelSchema } = require('../../models/Hotel');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// router.get('/', (req, res) => {
//     res.send({msg: "Works"});
// });

router.get('/', async (req, res) => {
    const name = await hotelSchema.find();
    res.send(name);
});

router.get('/:id', async (req, res) => {
    const hotelRoom = await hotelSchema.findById(req.params.id);
    if (!hotelRoom) return res.status(404).send('The reservation with the given ID was not found.');
    res.send(hotelRoom);
})

router.post('/', async (req, res) => {

    let hotelRoom = new hotelSchema({
        // checkIn: req.body.checkIn,
        // checkOut: req.body.checkOut,
        numberOfNights: req.body.numberOfNights,
        room: req.body.room
    });

    hotelRoom = await hotelRoom.save();
    console.log(hotelRoom); 
    res.send(hotelRoom);
});

router.delete("/:id", async (req, res) => {
    const hotelRoom = await hotelSchema.findByIdAndRemove(req.params.id);
    if (!hotelRoom) return res.status(404).send(`No room available`);
    res.json(hotelRoom)
})


// router.delete("/:id", async (req, res) => {
//     const message = await Message.findByIdAndRemove(req.params.id);
//     if(!message) return res.status(404).send(`No message found`);
//     res.json(message);
// })
//////---------------------------------------------------------------------------
// router.delete("/:id", async (req, res) => {
//     console.log("Delete request received for ID " + req.params.id);
//     const hotelRoom = await hotelSchema.findById(req.params.id);
//     hotelRoom.findById(req.params.id)
//     .then(hotelRoom => hotelRoom.remonve().then(res.json({ success: "true"})))
//     .catch(err => res.status(404).json("Not found"));
// });

// router.delete('/:id', async (req, res) => {
//     const hotelRoom = await hotelSchema.findById(req.params.id);
//     if (!hotelRoom) return res.status(404).send('The reservation with the given ID was not found.');
//     res.send(hotelRoom);
// })

// router.delete('/:id', async (req, res) => {
//     const hotelRoom = await
// })

// router.delete('/:id', getSubscriber, async (req, res) => {
//     try {
//         await res.subscriber.remove()
//         res.json({ message: 'Deleted Subscriber'})
//     } catch (err) {
//         res.status(500).json({ message: err.message})
//         // res.subscriber
//     }
// })

module.exports = router; 