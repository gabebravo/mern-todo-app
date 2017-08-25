import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// important components
import Homepage from './containers/HomePage';
import AddTodoPage from './containers/AddTodoPage';
import EditTodoPage from './containers/EditTodoPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/addTodo' component={AddTodoPage} />
          <Route path='/editTodo/:id' component={EditTodoPage} />
          <Route></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
