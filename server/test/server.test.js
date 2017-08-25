// import packages and local files
const expect = require('expect');
const request = require('supertest');
const {app} = require('../server');
const {Todo} = require('../models/todo'); // this is the collection name
const {todos, populateTodos} = require('../seed/seed')

// before any tests, destroy the test db
// and re-seed the data for a mock db and new testing
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
        expect(res.body[0]).toIncludeKeys([ '_id', 'task', 'completed' ]);
      })
      .end(done);
  });
  it('should return a single todo by id', done => {
    request(app)
      .get(`/todo/${todos[0]._id}`)
      .expect(200)
      .expect( res => {
        expect(res.body.task).toBe(todos[0].task);
        expect(res.body).toIncludeKeys([ '_id', 'task', 'completed' ]);
      })
      .end(done);
  });
});

describe('PATCH /todo', () => {
  const completedStatus = { completed: !todos[0].completed};
  it('should change the completed status of a todo', done => {
    request(app)
      .patch(`/todo/${todos[0]._id}`)
      .send(completedStatus)
      .expect(200)
      .expect( res => {
        expect(res.body[0].completed).toEqual(completedStatus.completed);
      })
      .end(done);
  });

  it('should return a 400 status', done => {
    request(app)
      .patch('/todo/abc123')
      .expect(400)
      .expect( res => {
        expect(res.error).toExist();
        expect(res.error).toIncludeKey('message');
      })
      .end(done);
  });
});

describe('DELETE /todo', () => {
  const completedStatus = { completed: !todos[0].completed};
  it('should delete a todo', done => {
    request(app)
      .delete(`/todo/${todos[0]._id}`)
      .expect(200)
      .expect( res => {
        expect(res.body.length).toEqual(1);
      })
      .end(done);
  });

  it('should not allow a faulty id to be deleted', done => {
    request(app)
      .delete('/todo/abc123')
      .expect(400)
      .expect( res => {
        expect(res.error).toExist();
        expect(res.error).toIncludeKey('message');
      })
      .end(done);
  });
});