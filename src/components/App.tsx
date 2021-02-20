// DEPENDENCIES
import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

// COMPONENTS
import { Layout } from './Layout/Layout';
import UserList from './UserList/UserList';

// UTILS
import { history } from '../utils/history';

// STYLE
import './App.scss';

function App() {
  return (
    <Layout>
      <Router history={history}>
        <Switch>
          <Route path="/users" component={UserList} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Layout>
  );
};

export default App;