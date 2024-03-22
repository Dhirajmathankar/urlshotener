const express = require('express');
const {Home_controller, Get_FullUrl, signInHandler, lognInHandler} = require("../controllers/user")
const routes = express.Router();
const url = require("url")


routes.get("/?", Get_FullUrl)
routes.post("/", Home_controller)

routes.post("/signin", signInHandler);

routes.post("/login", lognInHandler)


module.exports = routes ;