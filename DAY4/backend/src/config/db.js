const mongoose = require("mongoose")

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB connected succesfully");

    }catch(error){
        console.error("database connection Failed");
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;
