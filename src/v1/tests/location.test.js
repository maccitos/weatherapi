import app from '../../../index.js';
import supertest from 'supertest';
import should from 'should';
const serverRequest = supertest(app);

describe('GET v1/location', () => {
  it('Devuelve los datos de ubicación city según ip-api.', (done) => {
    serverRequest.get(`/v1/location`)
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      res.body.should.have.property('response')
      res.body.response.should.have.property('city')
      return done();
    });
  });
});

describe('GET v1/current', () => {
  it('City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según ip-api y el estado del tiempo actual.', (done) => {
    serverRequest.get(`/v1/current`)
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      res.body.should.have.property('response')
      res.body.response.should.have.property('weather')
      return done();
    });
  });
});

describe('GET v1/forecast', () => {
  it('City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según ip-api y el estado del tiempo a 5 días', (done) => {
    serverRequest.get(`/v1/forecast`)
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      res.body.should.have.property('response')
      res.body.response.should.have.property('list')
      res.body.response.list.should.be.a.Array();
      return done();
    });
  });
});


