const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.mongo_URI)
        console.log("DataBase Connected...")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;