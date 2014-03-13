var Release = require('../models/release');
var util = require('../util');
var Options = require('../../lib/options');
var genres = new Options("genres");
var statuses = new Options("statuses");

exports.index = function(req, res, next) {
  Release.find({}, function(err, releases) {
    if (err)
      return next(err);
    res.render('release/list', {"releases" : releases});
  });
};

exports.detail = function(req, res, next) {
  Release.findById(req.params.id, function(err, release) {
    if (err)
      return next(err);
    res.render('release/detail', {
      'release': release.toJSON(),
      'releaseDisplay': util.prettyJsonKeys(release.toJSON())
    });
  });
};

exports.remove = function(req,res,next){
  Release.remove({_id:req.param('_id')}, function(err,docs){
    if(err)
      return next(err);
    res.redirect('/releases');
  });
};

exports.removeAll = function(req,res,next){
  Release.remove({},function(err,docs){
    if(err)
      return next(err);
    res.redirect('/releases');
  });
};

exports.newRelease = function(req, res, next) {
  res.render('release/new', {
    'validGenres': genres.validOptions(),
    'validStatuses': statuses.validOptions(),
  });
};

exports.create = function(req, res, next) {
  var release = new Release(req.body.release);
  release.save(function (err, release) {
    if (err)
      return next(err);
    res.redirect('/releases');
  });
};
