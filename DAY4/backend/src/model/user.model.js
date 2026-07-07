const mongoose = require("mongoose")

// creating user schema
const userSchema = new mongoose.Schema({
    // 1st variable
    name:{
        type:String,
        required:true,
        trim:true, // automatically trim the extra spaces from the name
    },

    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,

    },
    age:{
        type:Number,
        min:1,
        max:100,

    },
},
    {
        timestamps:true, // automatically create createdAt and updatedAt fields
    }

);

module.exports = mongoose.model("User",userSchema);
