const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create user Schema & model
const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"]
  },
  surname: {
    type: String
  },
  age: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  },
  time: {
    type: Date,
    default: Date.time
  },
  subject: {
    type: String
  },
  assistance: {
    type: String
  }
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
