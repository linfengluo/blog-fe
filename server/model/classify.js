/**
 * Created by linfengluo@gmail.com on 2018/12/10.
 */
const mongoose = require("mongoose");

const ClassifySchema = new mongoose.Schema(
  {
    label : String,
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Classify', ClassifySchema)
