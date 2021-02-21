// DEPENDENCIES
import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// REDUX
import { connect } from "react-redux";

// COMPONENTS
import Layout from "./Layout/Layout";
import UserList from "./UserList/UserList";
import UserDetails from "./UserDetails/UserDetails";
import Login from "./Login/Login";

// HIGHT ORDER COMPONENT
import { PrivateRoute } from "./hoc/PrivateRoute";

// UTILS
import { history } from "../utils/history";

// STYLE
import "./App.scss";

const App = (props: any) => {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          {!props.logged && <Route exact path="/login" component={Login} />}
          <PrivateRoute exact path="/user" component={UserDetails} logged={props.logged} />
          <PrivateRoute exact path="/users" component={UserList} logged={props.logged} />
          <Redirect to={props.logged ? "/users" : "/login"} />
        </Switch>
      </Layout>
    </Router>
  );
};

const mapStateToProps = (state: any) => {
  const { authReducer } = state;
  return {
    logged: authReducer.logged,
  };
};

export { App };

export default connect(mapStateToProps, null)(App);
