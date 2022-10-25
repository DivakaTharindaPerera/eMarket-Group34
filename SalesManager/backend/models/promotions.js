const mongoose = require ('mongoose');
const signUpTemplate = new mongoose.Schema({
    Id:{
        type:String, required:true, unique:true
    },
    Name:{
        type:String, required:true
    },
    Amount:{
        type:String, required:true
    },
    Condition:{
        type:String, required:true
    }
}) 

module.exports = mongoose.model('promotions', signUpTemplate);