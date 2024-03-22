const mongoose  = require('mongoose');

const schema = mongoose.Schema({
	shortid:{
		type:String,
		required : true ,
		unique:true
	},
	redirectURL:{
		type:String,
		required:true
	},
	visitHistory:[
		{
			timestamp:{
				type:Number
			}
		}
	]
}, {timestamp:true});

const URL = mongoose.model("shorturl", schema);

module.exports = URL ;