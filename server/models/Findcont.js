const mongoose = require("mongoose");

const findcontSchema = new mongoose.Schema({
  First: String,
  Last: String,
  Company: String,
  Phone: Number,
  City: String,
  Trade: String
});

const Findcont = mongoose.model("Findcont", findcontSchema);

module.exports = {
  schema: findcontSchema,
  model: Findcont
};
