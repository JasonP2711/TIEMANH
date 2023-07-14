const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const photographyPackageSchema = new Schema({
  package: { type: String, required: true },
  timeForPackage: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, required: true },
  imageUrl: { type: String },
  active: { type: Boolean },
});

const photographyPackage = model(
  "photographyPackage",
  photographyPackageSchema
);

module.exports = photographyPackage;
