const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const url=process.env.MONGODB_URL;

// mongoose.connect(URL, {
//     useCreateIndex:true,
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useFindAndModify:false
// });

mongoose.connect(url, {
    serverSelectionTimeoutMS: 5000 // Timeout after 5s instead of 30s
  });

const connection = mongoose.connection;
connection.once("open", () =>{
    console.log("Mongodb Connection Success!");
})


const coustomerRouter = require("./routes/customer_details.js");

app.use("/customer", coustomerRouter);

app.listen(PORT, () =>{
    console.log(`Server is up and running on port :  ${PORT}`)
})
