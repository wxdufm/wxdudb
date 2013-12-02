var controllers = require('./controllers');

exports.init = function(app) {
  app.get('/', controllers.main.index);

  app.get('/users', controllers.user.list);
  app.get('/releases', controllers.release.index);
  app.get("/releases/:id/delete",controllers.release.remove);
  app.get("/releases/:id/deleteAll",controllers.release.removeAll);
  app.post('/releases', controllers.release.create);
  app.get('/releases/new', controllers.release.new);
};
