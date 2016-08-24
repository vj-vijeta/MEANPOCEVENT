var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var url = 'http://104.237.2.155:3022/api/user';

chai.use(chaiHttp);

describe('USER API', function() {
/*
  * Test the /api/user/login route
  */
  describe('Testing /api/user/login POST', function() {
      it('it should return bad request error 400', function(done) {
        chai.request(url)
            .post('/login')
            .end(function(err, res) {
                res.should.have.status(400);
                res.body.should.be.a('array');
                done();
            });
      });
      
      it('it should return user object with 200', function(done) {
        chai.request(url)
            .post('/login')
            .send({email: 'u1@user.com', password: 'user one'})
            .end(function(err, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
      });
  });

});