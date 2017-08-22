const { Todo } = require('../models/todo'); // this is the collection name
const {ObjectID} = require('mongodb');

// seed the data for a mock db
const todos = [
  { /* 1 */
    _id: new ObjectID(),
    "task" : "Walk the dog",
    "completed" : false,
  }, 
  { /* 2 */
    _id: new ObjectID(),
    "task" : "Clean the dishes",
    "completed" : true
  }
];

// before any tests the test db is destroyed
const populateTodos = done => {
  Todo.remove({}) // removes todos in test db every time
    .then( () => { // saves the todos above to the mock db
      return Todo.insertMany(todos)
    })
    .then( () => done()); // then we exit 
}

module.exports = {todos, populateTodos}