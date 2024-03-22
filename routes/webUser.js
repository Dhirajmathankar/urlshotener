const express = require('express');
const {Home_controller, Get_FullUrl} = require("../controllers/user")
const userRoutes = express.Router();


userRoutes.get("/", (req, res)=>{
	res.render('pages/index');
})
userRoutes.get("/about", (req, res)=>{
	res.render('pages/about');
})
userRoutes.get("/signin", (req, res)=>{
	res.render('pages/signin');
})
userRoutes.get("/login", (req, res)=>{
	res.render('pages/login');
})


module.exports = userRoutes

