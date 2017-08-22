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

// tester
router.get('/start', getConnected);

// routes
router.post('/', createTodo);

//export routes
module.exports = router;