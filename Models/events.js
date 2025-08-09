const mongoose = require("mongoose");
const eventSchema=mongoose.Schema({
    EventName:{
        type:String,
        required:true
    },
    EventPoster:{
        type:String,
        required:true

    }

});
const Event = mongoose.model("events",eventSchema);
module.exports = Event;
