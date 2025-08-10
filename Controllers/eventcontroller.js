const Event = require("../Models/events")

async function handleDisplayAllEvents(req,res){
    const x = await Event.find({});
    return res.json(x);
}
async function handleAddEvents(req,res){

    // const x = req.body;
    // const y = req.file;
    // Event.create(x);
    // res.status(200).json(x);
    // res.end("Event added successfully");// return 
    const event = new Event({
        EventName: req.body.EventName,
        EventPoster: req.file.path

    })
    
    await Event.create(event)
    await event.save()
    return res.status(200).json(event);
}
module.exports = {
    handleDisplayAllEvents,
    handleAddEvents
}