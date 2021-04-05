const mongoose = require('mongoose')


const venueSchema = new mongoose.Schema({
    venue_name: {
        type: String,
        required: true,
        trim: true
    }
}

)


const venue = mongoose.model("venue_venue",venueSchema);
module.exports = venue