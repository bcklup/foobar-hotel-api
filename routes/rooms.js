var express = require('express');
var router = express.Router();

// Model
const Room = require('../models/Room');

/* GET rooms listing. */
router.get('/', async (req, res, next) => {
  console.log('reaches here');
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    res.json(err);
  }
});

/* POST rooms listing */
router.post('/', async (req, res, next) => {
  const room = new Room({
    _id: req.body._id,
    room_name: req.body.room_name,
    summary: req.body.summary,
    accomodation: req.body.accomodation,
    beds: req.body.beds,
    bathrooms: req.body.bathrooms,
    amenities: req.body.amenities
  })
  try {
    const savedRoom = await room.save()
    res.json(savedRoom);
  } catch (err) {
    res.json({ message: err });
  }
})

module.exports = router;
