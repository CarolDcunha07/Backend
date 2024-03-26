const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },
    eventDetails: {
        type: String,
        required: true
    },
    registerByDate: {
        type: Date,
        required: true
    },
    clubIds: {
        type: String,
        required: true
    }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
