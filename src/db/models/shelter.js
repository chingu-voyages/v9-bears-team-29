const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shelterSchema = new Schema({
  name: String,
  address: String,
  city: String,
  longitude: String,
  latitude: String,
  availableDogs: Array,
  processingDogs: Array,
  savedDogs: Array,
  createdAt: Date,
  updateAt: Date
});

const Shelter = mongoose.model("shelter", shelterSchema);

module.exports = Shelter;
