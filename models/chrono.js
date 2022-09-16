const mongoose = require("mongoose");

// const chronos = new mongoose.Schema({
//   arrayOfChronos:{ type: Array, default: undefined}
// });


const chronoSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  chronos: {type:Array, default:undefined}
 });


module.exports = mongoose.model("Chrono", chronoSchema);