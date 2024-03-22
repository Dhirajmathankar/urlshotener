const express = require("express");
const mongoose = require("mongoose")
const path = require("path") 
const routes = require("./routes/user")
const userRoutes = require("./routes/webUser")
const userurl = require("./routes/url")
const cookieParser = require('cookie-parser');
const authmiddlearehandler = require("./middleware/middlehandler")


require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8001 ;

mongoose.connect(process.env.DB_ID)
.then(()=>{console.log("Your mongodb successful!")})
.catch((err)=>{console.log("Your mongodb Error! " + err )})


app.set('view engine', 'ejs');
app.set("views", path.resolve("./views"));
app.use(express.static('assets'));



app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser());

app.use("/user/", routes)
app.use("/", userRoutes)
app.use("/url", authmiddlearehandler, userurl)

app.listen(PORT, (req, res)=>{console.log("Your Server Run successful!");})