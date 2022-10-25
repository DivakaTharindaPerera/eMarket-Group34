const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8020;
app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useNewUrlParser:true,
});

const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("Mongodb Connection Successful!");
});

const itemRouter = require("./Routes/items.js");
const vendorRouter = require("./Routes/loginven.js")

app.use("/items",itemRouter);
app.use("/vendors", vendorRouter);

app.listen(PORT, () =>{
    console.log(`Server is up and running on port number: ${PORT}`)
});