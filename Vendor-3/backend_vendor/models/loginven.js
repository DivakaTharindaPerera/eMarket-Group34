const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const venlogSchema = new Schema({
    VendorId : {
        type: Number,
        required: true
    },
    VendorName :{
        type : String,
        required: true
    },
    vendorEmail: {
        type : String,
        required : true
    },
    vendorPassword:{
        type : String,
        required : true
    },
    VendorAddress :{
        type : String,
        required: true
    }
});

const vendors = mongoose.model("vendors",venlogSchema);
module.exports = vendors;
