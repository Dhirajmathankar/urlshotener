const authModel = require("../models/auth")
const URL = require("../models/user");


async function myurlhandller (req, res){
	let FullUrl = await URL.find({});
	res.render("./pages/urlshortner", {FullUrl:FullUrl});
}


module.exports = { myurlhandller }