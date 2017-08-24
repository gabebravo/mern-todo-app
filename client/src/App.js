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
          <Route path='/add-todo' component={AddTodoPage} />
          <Route path='/edit-todo/:id' component={EditTodoPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
