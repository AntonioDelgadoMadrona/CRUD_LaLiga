// DEPENDENCES
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// REDUX
import { connect } from "react-redux";
import { loginAction } from '../../redux/actions/authActions/authActions';

// COMPONENTS
import { LoginForm } from "./LoginForm/LoginForm";

// STYLES AND UTILS
import * as validations from "../../utils/validations";

import fullImg from "../../images/heroPL.jpg";
import logo from "../../images/Spanish_La_Liga_logo.png";

// STYLED
import {
  LoginContainer as Container,
  StyledImgContainer,
  LogoContainer,
  StyledForm,
} from "./styled";

interface IProps {
  loginAction: any;
  loggingIn: boolean;
}

const Login = React.memo<IProps>(({ loginAction, loggingIn }) => {
  const initialState = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState(initialState);
  const [errors, setErrors] = useState({});

  const formIsValid = () => {
    const { email, password } = user;
    const errors: any = {};

    if (!email) errors.email = "Introduce un email";
    else if (!validations.validateEmailAddress(email)) errors.email = "Introduce un email válido";

    if (!password) errors.password = "Introduce una contraseña";
    else if (password.length < 5) errors.password = "Mínimo 5 caracteres";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // TRY TO LOG
  const handleClick = () => {
    if (!formIsValid()) return;
    loginAction(user);
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
        <LoginForm user={user} handleChange={handleChange} errors={errors} isLoading={loggingIn} handleClick={handleClick} />
      </StyledForm>
    </Container>
  );
});

const mapStateToProps = (state: any) => {
    const { authReducer } = state;
  return {
    loggingIn: '',
  };
};

const mapDispatchToProps = {
    loginAction,
};

export { Login };

const LoginContainer = connect(null, mapDispatchToProps)(Login);

export default LoginContainer;
