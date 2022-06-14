var mongoose = require("mongoose");
var mongoDb = "mongodb://localhost:27017/productdb";
mongoose.connect(mongoDb, {useNewUrlParser:true});
var db = mongoose.connection;
db.on("open",()=>{
console.log("Connected to db");
});

const Schema = mongoose.Schema;

var ProductSchema = new Schema({
    productCode: String,
    productName: String,
    availablity: Number,
    price: Number,
    rating: Number,
    imageURL: String
});

var Productdata = mongoose.model('products', ProductSchema);
module.exports = Productdata;