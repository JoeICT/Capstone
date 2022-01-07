const mongoose = require("mongoose");

const priceSchema = new mongoose.Schema({
  First: String,
  Last: String,
  Company: String,
  Phone: Number,
  City: String,
  Trade: String
});

const Price = mongoose.model("Price", priceSchema);

module.exports = {
  schema: priceSchema,
  model: Price
};
