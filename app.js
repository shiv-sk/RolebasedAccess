const dotenv = require("dotenv")
dotenv.config({path:"./.env"});

const express = require("express")
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(express.json())