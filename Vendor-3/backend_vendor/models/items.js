const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = new Schema({
    Vendorid : {
        type: Number,
        required: true
    },
    ItemName : {
        type : String,
        required: true
    },
    qty : {
        type: Number,
        Required : true
    },
    Price:{
        type: Number,
        required: true
    }

});

const items = mongoose.model("items",itemSchema);

module.exports = items;