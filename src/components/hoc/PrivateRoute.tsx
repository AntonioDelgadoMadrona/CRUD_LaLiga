// DEPENDENCIES
import React from "react";
import { Redirect, Route } from "react-router-dom";

// REDUX
import { connect } from "react-redux";

interface IProps {
  component: any;
  logged: any;
  path: string;
  exact: boolean;
}

const PrivateRoute = React.memo<IProps>(({ component: Component, logged, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        logged ? <Component {...props} /> : <Redirect to={{ pathname: "/Login" }} />
      }
    ></Route>
  );
});

const mapStateToProps = (state: any) => {
  const { authReducer } = state;
  return {
    logged: authReducer.logged,
  };
};

export default connect(mapStateToProps, null)(PrivateRoute);
