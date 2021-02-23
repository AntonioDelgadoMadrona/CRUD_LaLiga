// DEPENDENCES
import React, { useState } from "react";

// REDUX
import { connect } from "react-redux";
import { loginAction } from "../../redux/actions/authActions/authActions";

// COMPONENTS
import { LoginForm } from "./LoginForm/LoginForm";

// STYLES AND UTILS
import * as validations from "../../utils/validations";

// IMAGES
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
}

const Login = React.memo<IProps>(({ loginAction }) => {
  const initialState = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState(initialState);
  const [errors, setErrors] = useState({});

  // CHECKS IF THE FORM IS VALID
  const formIsValid = () => {
    const { email, password } = user;
    const errors: any = {};

    if (!email) errors.email = "Introduce un email";
    else if (!validations.validateEmailAddress(email))
      errors.email = "Introduce un email válido";

    if (!password) errors.password = "Introduce una contraseña";
    else if (password.length < 5) errors.password = "Mínimo 5 caracteres";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  // CHANGE EVERY PROPERTY BY NAME
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
        <LoginForm
          user={user}
          handleChange={handleChange}
          errors={errors}
          handleClick={handleClick}
        />
      </StyledForm>
    </Container>
  );
});

const mapDispatchToProps = {
  loginAction,
};

export { Login };

const LoginContainer = connect<IProps>(null, mapDispatchToProps)(Login);

export default LoginContainer;
