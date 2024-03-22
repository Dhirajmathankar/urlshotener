const expresshandler =  require("express");
const {setAuth, getAuth} = require("../services/authservice")


const authdataIDContainer = new Map();
async function authmiddlearehandler(req, res, next){
	if(req.cookies.uuid == undefined) {
		res.redirect("/login")
	 } 
	else if (getAuth() != req.cookies.uuid) {
		res.redirect("/login")
	 }
	next();
}

module.exports = authmiddlearehandler;