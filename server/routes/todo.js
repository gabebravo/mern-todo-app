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
    .catch( err => res.status(400).json(err.message));
}

const getTodos = (req, res) => {
  Todo.find({}, {__v: 0})
    .then( todos => {
      res.status(200).json(todos);
    })
    .catch( err => res.status(400).json(err.message));
}

const getTodo = (req, res) => {
  Todo.findById(req.params.id, {__v: 0})
    .then( todo => {
      res.status(200).json(todo);
    })
    .catch( err => res.status(400).json(err.message));
}

const updateTodo = (req, res) => {
  Todo.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
    .then( todo => {
      Todo.find({}, {__v: 0})
        .then( todos => {
          res.status(200).json(todos);
        })
    })
    .catch( err => res.status(400).json(err.message));
}

const deleteTodo = (req, res) => {
  Todo.findByIdAndRemove(req.params.id)
    .then( todo => {
      Todo.find({}, {__v: 0})
        .then( todos => {
          res.status(200).json(todos);
        })
    })
    .catch( err => res.status(400).json(err.message));
}

// routes
router.post('/', createTodo);
router.get('/', getTodos);
router.get('/:id', getTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

//export routes
module.exports = router;