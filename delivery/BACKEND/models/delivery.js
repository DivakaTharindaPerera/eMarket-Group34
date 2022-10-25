const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const delivery_details =  new Schema({
    OrderID : {
        type : Number,
        require : true
    },

    customer_name : {
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

    delivery_date : {
        type : String,
        required: true
    },
    
    delivery_status : {
        type : String,
        required: true
    }

})

const delivery = mongoose.model("Delivery",delivery_details);

module.exports = delivery;
