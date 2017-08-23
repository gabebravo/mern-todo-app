// import mongoose db & models
const express = require('express');
const router = express.Router();
const { Todo } = require('../models/todo');

const getConnected = (req, res) => {
  res.status(200).json({ message: 'most basic get route'});
}

const createTodo = (req, res) => {
  const newTodo = new Todo(req.body);
  newTodo.save()
    .then( todo => {
      const { _id, task } = todo;
      res.status(200).json({ id: _id, task })
    })
    .catch( err => res.status(400).json(err.message))
}

const getTodos = (req, res) => {
  Todo.find({}, {_id: 1, task: 1})
    .then( todos => {
      res.status(200).json(todos);
    })
    .catch( err => console.log(err.message))
}

const getTodo = (req, res) => {
  Todo.findById(req.params.id, {_id: 1, task: 1})
    .then( todo => {
      res.status(200).json(todo);
    })
    .catch( err => console.log(err.message))
}

// tester
router.get('/start', getConnected);

// routes
router.post('/', createTodo);
router.get('/', getTodos);
router.get('/:id', getTodo);

//export routes
module.exports = router;