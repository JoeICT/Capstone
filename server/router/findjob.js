const mongoose = require("mongoose");

const contractorSchema = new mongoose.Schema({
  First: String,
  Last: String,
  Company: String,
  Phone: Number,
  City: String,
  Trade: String
});

const Contractor = mongoose.model("Contractor", contractorSchema);

module.exports = {
  schema: contractorSchema,
  model: Contractor
};
