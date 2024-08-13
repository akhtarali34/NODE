const mongoose = require("mongoose");




const customersSchema =new  mongoose.Schema({
    name:String,
    adress:String,
    contact:Number
});


const customersModel = mongoose.model("customers", customersSchema);

module.exports = customersModel;