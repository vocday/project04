const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// const course = new Schema({
//     author: ObjectId,
//     title: String,
//     body: String,
//     date: Date
// });

const course = new Schema({
  // id: ObjectId,
  field: { type: String, default: "CNTT" },
  category: { type: String, default: "Software Engineer" },
  position: { type: String, default: "Fullstack Web Developer" },
  price: { type: Number, min: 1000, index: true },
  description: { type: String, default: "Lam IT giau lam" },
  studyModules: { type: Number, min: 1, index: true },
  expectedCompletion: { type: Number, min: 6, index: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("course", course);
