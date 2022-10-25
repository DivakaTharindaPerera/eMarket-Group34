const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const coustomerSchema =  new Schema({

    customer_name : {
        type : String,
        required : true
    },

    user_name : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    },

    address : {
        type : String,
        required: true
    },

    contactNO : {
        type : Number,
        require : true
    },

    orderID : {
        type : Number,
        require : true
    },

    itemID : {
        type : Number,
        require : true
    },

})

const customer = mongoose.model("Coustomer",coustomerSchema);

module.exports = customer;
