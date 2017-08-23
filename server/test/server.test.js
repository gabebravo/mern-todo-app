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

describe('POST /todo', () => {

  it('should add a new todo', done => {
    const todo3 = { task: "fix the dishwasher" }
    request(app)
      .post('/todo')
      .send(todo3)
      .expect(200)
      .expect( res => {
        expect(res.body.id).toExist();
        expect(res.body.task).toBe('fix the dishwasher');
      })
      .end( (err, res) => { // check the actual DB response
        if(err){ return done(err); }
        const {id} = res.body;
        Todo.findById(id)
          .then( todo => {
            expect(todo._id).toEqual(id);
            done();
          }).catch( e => done(e));
      });
  });

  it('should return 400 for not having required task property', done => {
    request(app)
      .post('/todo')
      .send({})
      .expect(400)
      done();
  });

  it('should return 400 for passing a duplicate todo', done => {
    request(app)
      .post('/todo')
      .send(todos[0].task)
      .expect(400)
      done();
  });

});

describe('GET /todo', () => {
  it('should return an array of all todos', done => {
    request(app)
      .get('/todo')
      .expect(200)
      .expect( res => {
        expect(res.body.length).toEqual(2);
      })
      .end(done);
  });
  it('should return a single todo by id', done => {
    request(app)
      .get(`/todo/${todos[0]._id}`)
      .expect(200)
      .expect( res => {
        expect(res.body.task).toBe(todos[0].task);
      })
      .end(done);
  });
});