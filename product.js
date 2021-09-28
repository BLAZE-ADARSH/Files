const mongoose = require("mongoose");
const { Schema } =  mongoose;

const productSchema = new Schema({
name: String,
email: String,
phone_no: Number,
pass: String

    
});

module.exports = mongoose.model('Product',productSchema)
const Product = mongoose.model('Product');