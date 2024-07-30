const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const PatientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  birthDate: { type: String, required: true },
  bloodType: { type: String, required: true },
  problem: { type: String, required: true },
  address: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  doctorResponse: String
});

PatientSchema.plugin(uniqueValidator);
const PatientModel = mongoose.model('patients', PatientSchema);

module.exports = PatientModel;