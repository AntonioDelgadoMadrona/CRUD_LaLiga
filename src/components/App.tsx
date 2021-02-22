// DEPENDENCIES
import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
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

interface IProps {
  logged: boolean;
}

const App: React.FC<IProps> = ({ logged }) => (
  <Router history={history}>
    <Layout>
      <Switch>
        {!logged && <Route exact path="/login" component={Login} />}
        <PrivateRoute exact path="/user" component={UserDetails} logged={logged} />
        <PrivateRoute exact path="/users" component={UserList} logged={logged} />
        <Redirect to={logged ? "/users" : "/login"} />
      </Switch>
    </Layout>
  </Router>
);

const mapStateToProps = (state: any) => {
  const { authReducer } = state;
  return {
    logged: authReducer.logged,
  };
};

export default connect<IProps>(mapStateToProps)(App);
