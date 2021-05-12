var express = require("express");
var router = express.Router();

// Model
const Room = require("../models/Room");

// Get all rooms
router.get("/", async (req, res, next) => {
  try {
    const rooms = await Room.find(
      {},
      {
        room_name: 1,
        accomodation: 1,
        beds: 1,
        bathrooms: 1,
        costPerNight: 1,
        thumbnail: 1,
      }
    );
    res.json(rooms);
  } catch (err) {
    res.json(err);
  }
});

// Get specific room
router.get("/:roomId", async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.roomId);
    res.json(room);
  } catch (err) {
    res.json({ message: err });
  }
});

// Create room
router.post("/", async (req, res, next) => {
  const room = new Room({
    _id: req.body._id,
    room_name: req.body.room_name,
    summary: req.body.summary,
    accomodation: req.body.accomodation,
    beds: req.body.beds,
    bathrooms: req.body.bathrooms,
    costPerNight: req.body.costPerNight,
    thumbnail: req.body.thumbnail,
    image: req.body.image,
    amenities: req.body.amenities,
  });
  try {
    const savedRoom = await room.save();
    res.json(savedRoom);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
