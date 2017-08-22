// import packages and local files
const expect = require('expect');
const request = require('supertest');
const {app} = require('../server');
const {Todo} = require('../models/todo'); // this is the collection name
const {ObjectID} = require('mongodb');
const {todos, populateTodos} = require('../seed/seed')

// seed the data for a mock db

// before any tests the test db is destroyed
beforeEach(populateTodos);

describe('GET /contact && GET /contact/find', () => {
  it('should get all contacts', done => {
    request(app)
      .get('/todo/start')
      .expect(200)
      .expect( res => {
        expect(res.body.message).toBeA('string');
        expect(res.body.message).toBe('most basic get route');
      })
      .end(done);
  });
});
