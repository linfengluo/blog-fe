/**
 * Created by linfengluo@gmail.com on 2019/1/14.
 */

const formatRes = require('../units/formatRes')
const About = require('../model/about')
const {pageQuery} = require('../units/pageQuery')
const AboutController = {
  get(req, res, next){
    About.findOne()
      .select('content _id')
      .exec(function (err, doc) {
        if (err) {
          res.json(formatRes('serverError'))
        }
        res.json(formatRes('isOk', doc ? doc : ''))
      });
  }
}

module.exports = AboutController
