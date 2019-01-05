/**
 * Created by linfengluo@gmail.com on 2018/12/10.
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new mongoose.Schema({
  title : String,
  classify: {
    type: Schema.Types.ObjectId,
    ref: 'Classify'
  },
  desc: String,
  content: String,
  tabs: Array,
  isShow: Boolean
}, {
  timestamps: true
});


module.exports = mongoose.model('Article', ArticleSchema)
