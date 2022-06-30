const mongoose = require("mongoose");

const chronoSchema = mongoose.Schema({
  title: { type: String, required: true, unique: true  },
  userId: { type: String, required: true },
  start:{ type: Boolean, required: false,  default: false },
  starTime: { type: Number, required: false },
  showEditTitle: { type: Boolean, required: false,  default: false },
  counterInterval: {type:Number, required: false  },
  chronoState: { type:Number, default :"0", required: false }  
});

module.exports = mongoose.model("Chrono", chronoSchema);