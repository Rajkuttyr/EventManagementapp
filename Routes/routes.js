const routes = require("../Controllers/usercontroller")
const express = require("express");
const router = express.Router()
router.get("/user",routes.handleGetAllUsers)
router.post("/addusers",routes.handleAddUsers)
module.exports = router;

