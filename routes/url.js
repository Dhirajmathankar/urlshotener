const express = require('express');
const {myurlhandller }= require("../controllers/url")

const userurl = express.Router();


userurl.get("/", myurlhandller);

module.exports = userurl