import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';

import ActiveTodo from '../components/ActiveTodo';
import CompletedTodo from '../components/CompletedTodo'

class TodosList extends Component {

  state = {
    activeTodos: [],
    completedTodos: []
  }

  componentDidMount() {
    axios.get('/todo')
      .then( result => {
        this.setState({
          activeTodos: result.data.filter(todo => !todo.completed),
          completedTodos: result.data.filter(todo => todo.completed)
        })
      })
      .catch( result => {
        console.log(result);
      })
  }

  removeTodo = id => {
    axios.delete(`/todo/${id}`)
    .then( result => {
      this.setState({
        activeTodos: result.data.filter(todo => !todo.completed),
        completedTodos: result.data.filter(todo => todo.completed)
      })
    })
    .catch( result => {
      console.log(result);
    })
  }

  changeToCompleted = id => {
    axios.patch(`/todo/${id}`, {completed: true})
    .then( result => {
      this.setState({
        activeTodos: result.data.filter(todo => !todo.completed),
        completedTodos: result.data.filter(todo => todo.completed)
      })
    })
    .catch( result => {
      console.log(result);
    })
  }

  getActiveTodos = arr => {
    return arr.map( (todo, index) => {
      return <ActiveTodo 
        key={index}
        id={todo._id}
        todoDescription={todo.task} 
        handleCompletedClick={this.changeToCompleted} />
    })
  }

  getCompletedTodos = arr => {
    return arr.map( (todo, index) => {
      return <CompletedTodo 
        key={index}
        id={todo._id}
        todoDescription={todo.task}
        handleClick={this.removeTodo} />
    })
  }

  render() {
    let activeTodos = this.state.activeTodos.length > 0 ? 
      this.getActiveTodos(this.state.activeTodos):
      `Let's get cracking and add some todos`;

    let completedTodos = this.state.completedTodos.length > 0 ? 
    this.getCompletedTodos(this.state.completedTodos):
    `There are no completed tasks`;
    return (
      <Container>
        <Row>
          <Col sm="12" md="6"><h1>Pending</h1>{activeTodos}</Col>
          <Col sm="12" md="6"><h1>Completed</h1>{completedTodos}</Col>
        </Row>
      </Container>
    );
  }
}

export default TodosList;