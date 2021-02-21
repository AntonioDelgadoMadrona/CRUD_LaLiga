// DEPENDENCIES
import React from "react";
import { useLocation } from "react-router-dom";

// REDUX
import { connect } from "react-redux";
import { logoutAction } from "../../redux/actions/authActions/authActions";

// COMPONENTS
import { Navbar } from "../Navbar/Navbar";
import { FullScreenSpinner } from "../generic/FullScreenSpinner/FullScreenSpinner";

// STYLED
import { Layout as Container, Wrapper } from "./styled";

const Layout = React.memo((props: any) => {
  const { pathname } = useLocation();

  // FIX THE BODY FOR NOT SCROLL
  if (props.isLoading) document.getElementsByTagName("body")[0].style.overflowY = "hidden";
  else document.getElementsByTagName("body")[0].style.overflow = "auto";

  return (
    <Container>
      {props.logged && (
        <Navbar logged={props.logged} email={props.email} logoutAction={props.logoutAction} />
      )}
      {props.isLoading && <FullScreenSpinner />}
      <Wrapper path={pathname}>{props.children}</Wrapper>
    </Container>
  );
});

const mapStateToProps = (state: any) => {
  const { authReducer, apiStatusReducer } = state;
  return {
    logged: authReducer.logged,
    email: authReducer.email,
    isLoading: apiStatusReducer > 0
  };
};

const mapDispatchToProps = {
  logoutAction,
};

export { Layout };

const LayoutContainer = connect(mapStateToProps, mapDispatchToProps)(Layout);

export default LayoutContainer;
