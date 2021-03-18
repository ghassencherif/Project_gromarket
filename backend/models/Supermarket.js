const mongoose = require("mongoose");

const supermarketSchema = new mongoose.Schema({
  name: String,
  zipCode: String,
  location: String,
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      autopopulate: true,
    },
  ],
});


const productSchema = new mongoose.Schema({
    supermarketId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "supermarket",
    },
    name: String,
    price: Number,
    weight: Number
  });


Supermarket = mongoose.model("supermarket", supermarketSchema);
Product = mongoose.model("product", productSchema);

module.exports = { Supermarket, Product };
