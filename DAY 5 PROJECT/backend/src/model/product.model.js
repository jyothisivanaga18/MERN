const mongoose = require("mongoose")

//creating product schema

const productSchema = new mongoose.Schema({
    //1st varible
    name:{
        type:String,
        required:true,
        trim:true,   
    },

    price:{
        type:Number,
        required:true,
        min:20,
    },

    category:{
        type:String,
        required:true,
        trim:true,

    },

    quantity:{
        type:Number,
        required:true,
        min:1,
    }


},

{
    timestamps:true, // automatically create createdAt and updatedAt fields 
}

);

module.exports = mongoose.model("Product",productSchema);
