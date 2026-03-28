const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  message: {
    type: String,
    required: true,
    trim: true,
    maxlength: 500,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Message", messageSchema);
