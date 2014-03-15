var controllers = require('./controllers');

exports.init = function(app) {
  app.get('/', controllers.main.index);

  app.get('/users', controllers.user.list);
  app.get('/releases', controllers.release.index);
  app.post('/releases', controllers.release.create);
  app.get('/releases/new', controllers.release.newRelease);
  app.get("/releases/:id", controllers.release.detail);
  app.get("/releases/:id/edit", controllers.release.edit);
  app.put("/releases/:id", controllers.release.update);
  app.del("/releases/:id", controllers.release.remove);
  app.get("/releases/:id/deleteAll",controllers.release.removeAll);
};
