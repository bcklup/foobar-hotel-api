const mongoose = require("mongoose");

const RoomSchema = mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  room_name: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  accomodation: {
    type: Number,
    required: true,
  },
  beds: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  amenities: {
    type: Array,
    required: true,
  },
  costPerNight: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Rooms", RoomSchema);
