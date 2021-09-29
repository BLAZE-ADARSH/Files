const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("./src/models/product")

// Models
const Product = mongoose.model('Product');
// const { create } = require("./src/models/product");


//Define app
const app = express();

// Establish DB connection
const db = mongoose.connect("mongodb://localhost:27017/airbnb-clone")

//

// use the body parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));



app.get('/',function(request, response) {
    response.send({ ping: 'Pong'})
})

//Define routes to create,Read, Update and Delete
app.post('/products',function(request, response){
   var product = new Product()
   product.name = request.body.name
   product.email= request.body.email
   product.phone_no = request.body.phone_no
   product.pass = request.body.pass
   product.save(function(error, savedProduct){
     if(error){
     response.status(500).send({ error: "Unable to save product"})
}  else{
  response.status(200).send(savedProduct)

}
})
})
app.get('/products', function(request, response){
  Product.find({}, function(error, products){
    if(error){
      response.status(500).send({ error: "Unable to fetch products"});
    } else {
      response.status(200).send(products);
    }
  })
})


//Start Server
app.listen(3000, function() {
  console.log("airbnb clone server running at port  3000")
})
