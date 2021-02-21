// DEPENDENCES
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// REDUX
import { connect } from "react-redux";

// COMPONENTS
import { LoginForm } from "./LoginForm/LoginForm";

// STYLES AND UTILS
import * as validations from "../../utils/validations";

import fullImg from '../../images/heroPL.jpg';
import logo from "../../images/Spanish_La_Liga_logo.png";

// STYLED
import { LoginContainer as Container, StyledImgContainer, LogoContainer, StyledForm } from "./styled";

interface IProps {
  loginAction: Function;
  loggingIn: boolean;
}

const Login = React.memo<IProps>(({ loginAction, loggingIn }) => {
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});

  // Set the values from login form into the user state
  //   const handleChange = (event) => {
  //     const { name, value } = event.target;
  //     setUser((prevUser) => ({
  //       ...prevUser,
  //       [name]: value,
  //     }));
  //   };

  //   const formIsValid = () => {
  //     const { emailAddress, password } = user;
  //     const errors = {};

  //     if (!emailAddress) errors.emailAddress = "Email is required.";
  //     else if (!validations.validateEmailAddress(emailAddress))
  //       errors.emailAddress = "Enter a valid email address.";

  //     if (!password) errors.password = "Password is required";
  //     else if (!validations.validatePassword(password))
  //       errors.password = "Enter a valid password.";

  //     setErrors(errors);
  //     // Form is valid if the errors object still has no properties
  //     return Object.keys(errors).length === 0;
  //   };

  // Send the information to backend
  const handleSubmit = () => {
    // event.preventDefault();
    // if (!formIsValid()) return;
    // loginAction(user.emailAddress, user.password);
  };

  return (
    <Container>
      <StyledImgContainer>
        <img src={fullImg} alt="fullImg" />
        <div>
          <LogoContainer>
            <img src={logo} alt="logoLaLiga" />
          </LogoContainer>
          <h2>No es fútbol. Es LaLiga.</h2>
        </div>
      </StyledImgContainer>

      <StyledForm>
        <LoginForm />
      </StyledForm>
    </Container>
  );
});

const mapStateToProps = (state: any) => {
  //   const { locationReducer, userReducer } = state;
  return {
    // loggingIn: userReducer.loggingIn,
  };
};

const mapDispatchToProps = {
  //   loginAction,
};

export { Login };

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
