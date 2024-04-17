const express = require("express")
const Router = express.Router()

Router.get("/login" , async(req,res,next)=>{
    res.render("login")
})

Router.get("/register" , async(req,res,next)=>{
    res.render("register")
})


Router.post("/login" , async(req,res,next)=>{
    res.send("login post")
})

Router.post("/register" , async(req,res,next)=>{
    res.send("register post")
})

Router.get("/logout" , async(req,res,next)=>{
    res.send("logout post")
})
module.exports = Router