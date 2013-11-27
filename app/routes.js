var controllers = require('./controllers');

exports.init = function(app) {
  app.get('/', controllers.main.index);
  app.get('/users', controllers.users.list);
};
