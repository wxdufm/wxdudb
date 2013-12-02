var Release = require('../models/release');

exports.index = function(req, res, next) {
  Release.find({}, function(err, releases) {
    if (err)
      return next(err);
    //TO-DO: render a view of the releases object
    res.render('release/list', {"releases" : releases});
  });
};

exports.new = function(req, res, next) {
  res.render('release/new');
};

exports.create = function(req, res, next) {
  var release = new Release(req.body.release);
  release.save(function (err, release) {
    if (err)
      return next(err);
    res.redirect('/releases');
  });
};
