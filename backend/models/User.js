const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  isVerified: { type: Boolean, default: false },
  email: String,
  emailToken: String,
  address: String,
  password: String,
});

User = mongoose.model("user", userSchema);

module.exports = {
  User,
};
