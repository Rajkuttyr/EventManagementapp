const eventController = require("../Controllers/eventcontroller");
const express = require("express")
const Eventrouter =  express.Router();
Eventrouter.get("/events",eventController.handleDisplayAllEvents);
Eventrouter.post("/addevents",eventController.handleAddEvents);
module.exports ={
    Eventrouter
}