const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  rollno: String,
  sub1: Number,
  sub2: Number,
  sub3: Number,
  total:Number,
  grade: String,
});

module.exports = mongoose.model("user", UserSchema);
