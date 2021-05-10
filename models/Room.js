const mongoose = require('mongoose');

const RoomSchema = mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    room_name: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    accomodation: {
        type: Number,
        required: true
    },
    beds: {
        type: Number,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    amenities: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('Rooms', RoomSchema)