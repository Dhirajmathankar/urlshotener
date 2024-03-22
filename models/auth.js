const mongoose = require("mongoose");


const authUser = mongoose.Schema({
	email:{
	    type:String,
        required:true,
		unique:true
	},
	password:{
		type:String,
		required:true 
	},
	uuid:{
		type:String,
		required:true,
		unique:true
	},
	createdAt: {
		type: Date,
		default: Date.now
	  }
})

const authModel = mongoose.model("auth", authUser);

module.exports = authModel ;