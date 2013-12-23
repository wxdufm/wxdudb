process.env.ENV = 'TEST';
var request = require('supertest');
var Release = require('../../app/models/release');
var app = require('../../server');

describe('Releases controller', function() {
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
            artist: "The Velvet Underground",
            title: "The Velvet Underground & Nico",
            status: "PL"
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
        res.text.should.include('The Velvet Underground');
        res.text.should.include('PL');
        done();
      });
  });
});
