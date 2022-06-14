var express = require("express");
const App = new express();
var Productdata = require("./src/model/dbmodel");
var cors = require("cors");

App.use(cors());
App.use(express.json());

App.listen(3000,(err,data)=>{
    if(err){console.log(err)}
    else{console.log("connected")}
});


App.get("/products",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, DELETE, PUT');
    Productdata.find({})
    .then(data=>{
        res.send(data);
    })
});

App.post("/Addproducts",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, DELETE, PUT');
    var product = {
        productCode: req.body.data.productCode,
        productName: req.body.data.productName,
        availablity: req.body.data.availablity,
        price: req.body.data.price,
        rating: req.body.data.rating,
        imageURL: req.body.data.imageURL
    }
    var product = new Productdata(product);
    product.save();
});


App.post("/Editproducts",(req,res)=>{

res.header("Access-Control-Allow-Origin","*");
res.header("Access-Control-Allow-Methods:GET, POST, DELETE, PUT");
var product ={
    productCode: req.body.data.productCode,
        productName: req.body.data.productName,
        availablity: req.body.data.availablity,
        price: req.body.data.price,
        rating: req.body.data.rating,
        imageURL: req.body.data.imageURL
}
var id=req.body.data._id;
Productdata.findOneAndUpdate({"_id":id},product)
.then((err,status)=>{
    if(err)console.log(err)
    else console.log(status);
})

});

App.post("/Deleteproducts",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods:GET, POST, DELETE, PUT");
    var productID= req.body.data;
    console.log(productID);
    Productdata.deleteOne({"_id":productID})
    .then((err,stat)=>{
        if(err)console.log(err);
    });
    console.log("Success")
})