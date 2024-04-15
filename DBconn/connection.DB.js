const mongoose = require("mongoose");

const con = async ()=>{
    const connection = await mongoose.connect(process.env.MONGODB_URI)
    console.log("database is connected succefully");
}

module.exports = con