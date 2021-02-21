// DEPENDENCIES
import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// COMPONENTS
import { Layout } from "./Layout/Layout";
import UserList from "./UserList/UserList";
import UserDetails from "./UserDetails/UserDetails";
import Login from "./Login/Login";

// UTILS
import { history } from "../utils/history";

// STYLE
import "./App.scss";

function App() {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/user" component={UserDetails} />
          <Route exact path="/users" component={UserList} />
          <Redirect to="/login" />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
