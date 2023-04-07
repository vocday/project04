const mongoose = require("mongoose");
const mongooseHidden = require("mongoose-hidden")();
const Schema = mongoose.Schema;

const user = new Schema({
  email: { type: String, default: "" },
  phoneNumber: { type: String, default: "" },
  username: { type: String, default: "" },
  role: { type: String, default: "" },
  password: { type: String, default: "", hide: true },
  date: { type: Date, default: Date.now },
});

user.plugin(mongooseHidden);

module.exports = mongoose.model("user", user);
