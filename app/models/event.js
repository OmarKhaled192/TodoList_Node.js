const mongoose = require('mongoose'),
Schema = mongoose.Schema;

// create Schema 
const eventSchema = new Schema({
    item : String
})

const EventModel = mongoose.model('Event', eventSchema);

module.exports = EventModel ;