const mongoose = require("mongoose");

const userSchema = {
  fname: String,
  lname: String,
  address: String,
  email: String,
  phone: String,
};

const User = mongoose.model("Contacts", userSchema);

module.exports = User;
