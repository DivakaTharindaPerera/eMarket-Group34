const mongoose = require("mongoose")
const dotenv = require('dotenv')

dotenv.config()
mongoose.connect(process.env.MDB_CONNECT, () => console.log("database connected succefully! "));

module.exports = mongoose