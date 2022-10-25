const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;
const ItemShema = new Schema({
    
    itemName : {
        type : String,
        required: true
    },
    itemID : {
        type :  Number,
        required : true
    },
    itemQuantity: {
        type : Number,
        required : true
    },     
    itemPrice: {
        type : Number,
        required : true
    }
})

const Item = mongoose.model("Item", ItemShema);

module.exports = Item;