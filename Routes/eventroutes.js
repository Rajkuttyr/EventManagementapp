const eventController = require("../Controllers/eventcontroller");
const express = require("express")
const multer = require("multer");
const upload = multer({ dest: 'uploads/' });
const Eventrouter =  express.Router();
Eventrouter.get("/events",eventController.handleDisplayAllEvents);
Eventrouter.post("/addevents",upload.single("image"),eventController.handleAddEvents);
module.exports ={
    Eventrouter
}