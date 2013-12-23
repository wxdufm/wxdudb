process.env.ENV = 'TEST';
var request = require('supertest');
var Release = require('../../app/models/release');
var app = require('../../server');

describe('Releases controller', function() {
  var release = new Release({
    artist: 'Neutral Milk Hotel',
    title: 'In the Aeroplane Over the Sea',
    status: 'PL'
  });

  before(function(done) {
    Release.remove({}, done);
  });

  after(function(done) {
    Release.remove({}, done);
  });

  it('should be able to create a release', function(done) {
      request(app).post('/releases')
        .send({
          release: {
            artist: release.artist,
            title: release.title,
            status: release.status
          }
        })
        .expect('Location', '/releases')
        .expect(302)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
  });

  it('should show the new release info on the index', function(done) {
    request(app).get('/releases')
      .expect(200)
      .end(function(err, res) {
        res.text.should.include(release.title);
        res.text.should.include(release.artist);
        res.text.should.include(release.status);
        done();
      });
  });

  it('should show release detail on its page', function(done) {
    request(app).get('/releases/' + release._id)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        res.text.should.include(release.title);
        res.text.should.include(release.artist);
        res.text.should.include(release.status);
        done();
      });
  });

  it('should show existing release info on edit page', function(done) {
    request(app).get('/releases/' + release._id + '/edit')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        res.text.should.include(release.title);
        res.text.should.include(release.artist);
        res.text.should.include(release.status);
        done();
      });
  });

  it('should update release info', function(done) {
    release.title = 'On Avery Island';
    request(app).put('/releases/' + release._id)
      .send({
        release: {
          title: release.title,
        }
      })
      .expect('Location', '/releases')
      .expect(302)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });

  it('should allow deleting of a release', function(done) {
      request(app).del('/releases/' + release._id)
        .expect('Location', '/releases')
        .expect(302)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
  });
});
