var express = require('express');
var routes = require('./app/routes');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var helpers = require('./app/helpers');
var _ = require('underscore');

try {
  var config = require('./config.local');
} catch (e) {
  var config = require('./config');
}

if (process.env.ENV == 'TEST') {
  mongoose.connect(config.test.db.address + config.test.db.name);
} else {
  mongoose.connect(config.db.address + config.db.name);
}

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, './app/views'));
app.set('view engine', 'jade');
app.use(express.favicon());
if (process.env.ENV != 'TEST') {
  app.use(express.logger('dev'));
}
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

_.extend(app.locals, helpers);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

routes.init(app);

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
