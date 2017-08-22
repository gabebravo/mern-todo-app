// import mongoose db & models
const express = require('express');
const router = express.Router();
const { Todo } = require('../models/todo');

const getConnected = (req, res) => {
  res.status(200).json({ message: 'most basic get route'});
}

// tester
router.get('/start', getConnected);

// routes

//export routes
module.exports = router;