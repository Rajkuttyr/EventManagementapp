const Event = require("../Models/events")
async function handleDisplayAllEvents(req,res){
    const x = await Event.find({});
    return res.json(x);
}
async function handleAddEvents(req,res){
    const x = req.body;
    Event.create(x);
    return res.status(200).json(x);
}
module.exports = {
    handleDisplayAllEvents,
    handleAddEvents
}