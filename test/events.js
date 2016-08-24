var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var url = 'http://104.237.2.155:3022/api/event';
var pgURL = 'http://104.237.2.155:3022/pg/api/event';

chai.use(chaiHttp);

describe('EVENT API', function () {

    describe('Testing /pg/api/event/listpublic POST', function () {
        it('it should return object with status code 200', function (done) {
            chai.request(pgURL)
                .post('/listpublic')
                .send({})
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });

    describe('Testing /pg/api/event/single/:id GET', function () {
        it('it should return error with status code 500', function (done) {
            chai.request(pgURL)
                .get('/single/null')
                .end(function (err, res) {
                    res.should.have.status(500);
                    res.body.should.be.a('array');
                    done();
                });
        });

        it('it should return event object with status code 200', function (done) {
            chai.request(pgURL)
                .get('/single/304fc9a0-65ff-11e6-a00d-2d6dcd8580f9')
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });

    describe('Testing /api/event/purchase POST', function () {
        it('it should fail (authentication) with status code 400', function (done) {
            chai.request(url)
                .post('/purchase')
                .end(function (err, res) {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
                });
        });
        
        it('it should fail (validation) with status code 400', function (done) {
            chai.request(url)
                .post('/purchase')
                .send({
                    current: {"id":"919015872","_id":"919015872","name":"Jitesh Tukadiya","admin":null,"tenant":null,"type":"user"}
                })
                .end(function (err, res) {
                    res.should.have.status(400);
                    res.body.should.be.a('array');
                    done();
                });
        });
        
        it('it should success with status code 200', function (done) {
            chai.request(url)
                .post('/purchase')
                .send({
                    current: {
                        "id":"919015872",
                        "_id":"919015872",
                        "name":"Jitesh Tukadiya",
                        "admin":null,
                        "tenant":null,
                        "type":"user"
                    },
                    id: '304fc9a0-65ff-11e6-a00d-2d6dcd8580f9'
                })
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });
});