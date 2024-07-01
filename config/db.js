const { default: mongoose } = require("mongoose");

function connectDb(){

    mongoose.connect('mongodb://127.0.0.1:27017/test');

    console.log("connected to db");
}
module.exports = connectDb