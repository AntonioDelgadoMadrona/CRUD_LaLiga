// DEPENDENCIES
import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

// COMPONENTS
import UserList from './components/UserList/UserList';

// UTILS
import { history } from './utils/history';

// STYLE
import './App.css';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/users" component={UserList} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;