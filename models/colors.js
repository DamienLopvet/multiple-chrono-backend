const mongoose = require("mongoose");

const colorSchema = mongoose.Schema({
  color: { type: String, default: "rgba(255, 210, 92, 1)"},
  userId: { type: String, required: true },
});

module.exports = mongoose.model("Color", colorSchema);