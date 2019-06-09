const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dogSchema = new Schema({
  name: String,
  breed: String,
  adoptionStatus: Boolean,
  age: Number,
  activityLevel: Number,
  vaccinationRecord: Array,
  neutered: Boolean,
  shelterLocation: String,
  city: String,
  description: String
});

const Dog = mongoose.model("dog", dogSchema);

module.exports = Dog;
