import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// important components
import Homepage from './containers/HomePage'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component ={Homepage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
