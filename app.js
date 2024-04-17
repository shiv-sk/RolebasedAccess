const dotenv = require("dotenv")
dotenv.config({path:"./.env"});

const express = require("express")
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(express.json())

app.set("view engine" , "ejs");

const con = require("./DBconn/connection.DB");
con().then(()=>{
    console.log("database connection is success")
    app.listen(process.env.PORT || 3000 , ()=>{
        console.log(`port is listening on port ${process.env.PORT}`)
    })
}).catch((error)=>{
    console.log("some error is occured");
    console.error(error)
})

//routes
const userrouter = require("./routes/user.routes");
const authrouter = require("./routes/auth.routes");
const indexrouter = require("./routes/index.routes");

app.use("/" , indexrouter)
app.use("/auth" , authrouter)
app.use("/user" , userrouter)
module.exports = app;