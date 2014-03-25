
var http      = require('http');
var request   = require('supertest');
var express   = require('express');
var poweredBy = require('./');

describe('http', function() {

  it('should set', function(done) {

    var app = http.createServer(function(req, res) {
      poweredBy('Rainbows')(req, res);
      res.end();
    });

    request(app)
    .get('/')
    .expect('X-Powered-By', 'Rainbows')
    .end(done);

  });

  it('should remove', function(done){

    var app = http.createServer(function(req, res) {
      res.setHeader('X-Powered-By Header', 'Monkeys');
      poweredBy(false)(req, res);
      res.end();
    });

    request(app)
    .get('/')
    .expect(function(res) {
      return res.headers['X-Powered-By'];
    })
    .end(done);

  });

});


describe('express', function() {

  it('should set', function(done) {

    var app = express();
    app.use(poweredBy('Minions'));

    request(app)
    .get('/')
    .expect('X-Powered-By', 'Minions')
    .end(done);

  });

  it('should remove', function(done){

    var app = express();
    app.use(poweredBy(false));

    request(app)
    .get('/')
    .expect(function(res) {
      return res.headers['X-Powered-By'];
    })
    .end(done);

  });

});