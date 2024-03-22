
const URL = require("../models/user");
const authModel = require("../models/auth");
const nanoid = require("shortid")
const { v4: uuidv4 } = require('uuid');
const {setAuth, getAuth} = require("../services/authservice")

require("dotenv").config();

const weburl = process.env.URL;
async function Home_controller(req, res){
	const body = req.body;
	if (!body.url) return res.json({statur: 400, error:"error! url is required"});
	const shortID = nanoid(8);
	await URL.create({
		shortid:`${weburl}/user/?${shortID}`,
		redirectURL:  body.url,    
		visitHistory:[]
	})
   res.json({statur:"successful!", shortid : `${weburl}/?${shortID}` })
}

async function Get_FullUrl(req, res){
	let FullUrl  ;
	try{
		FullUrl = await URL.find({shortid:`${weburl}${req.url}`});
		if (FullUrl != [null]){
			await URL.findOneAndUpdate(
				{shortid:`${weburl}${req.url}`}, {$push:{visitHistory:{
					timestamp:Date.now()
				}}}
				)
			res.redirect(FullUrl[0].redirectURL)
		}
		else res.json({statur:"successful!", shortid : `${"dhiraj mathank"}` })
	}catch(e){
		console.log(e)
		res.json({SMS:"Error!!", statur:404});
	}
	
	
}



async function signInHandler(req, res){
	try{
	    const {email, password} = req.body;
		const uuid = uuidv4();
		await authModel.create({
			email:email,
			password:password,
			uuid:uuid
		})
		setAuth(null);
	    res.redirect("/login")
	}catch(err){
	     res.redirect("/login")
	}
}

async function lognInHandler(req, res){
	const {email, password} = req.body;
	let FullUrl  ;
	try{
		FullUrl = await authModel.findOne({email:email, password:password})
		res.cookie('uuid', FullUrl.uuid);
		setAuth(FullUrl.uuid);
		FullUrl.length != 0 ?  res.redirect("/url/"): res.redirect("/login")
	}catch(e){
		res.redirect("/login")
	}
  }

module.exports = {Home_controller, Get_FullUrl, lognInHandler, signInHandler}