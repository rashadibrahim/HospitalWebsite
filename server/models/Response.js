const mongoose = require("mongoose");


const ResponseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
});

const ResponseModel = mongoose.model('responses', ResponseSchema);

module.exports = ResponseModel;