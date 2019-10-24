const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  }
}, {
  collections: "lifeSports",
});

const admin = mongoose.model("admins", adminSchema);

module.exports = admin;