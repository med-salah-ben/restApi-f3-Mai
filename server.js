const express =require('express');
 require("dotenv").config({path:"./config/.env"})
const connectDB =require('./config/connectDB');


connectDB();
const app = express();
app.use(express.json())
app.use("/api",require('./routes/User'))

const PORT = process.env.PORT || 7000;

app.listen(PORT,(err)=>{
    err? console.log(err)
    : console.log(`server is running on port ${PORT}`)
})