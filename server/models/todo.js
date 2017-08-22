const mongoose = require('mongoose');

const Todo = mongoose.model('Todos', {
  
    task: {
      type: String,
      required: true
    },
  
    completed: {
      type: Boolean,
      default: false
    }
  
  });
  
module.exports = {Todo};