// DEPENDENCIES
import React from "react";
import { Link } from "react-router-dom";

// COMPONENTS
import { Input } from "../../generic/Input/Input";
import { Button } from "../../generic/Button/Button";

// STYLED
import { FormContainer } from "./styled";
import logo from "../../../images/laliga.png";

interface IProps {
  user: any;
  handleChange: Function;
  errors: any;
  isLoading: boolean;
  handleClick: any;
}

const LoginForm = React.memo<IProps>(({ user, handleChange, errors, isLoading, handleClick }) => {
  return (
    <FormContainer>
      <div>
        <img src={logo} alt="laliga2" />
        <h2>Inicia Sesión</h2>
        <Input
          type="email"
          name="email"
          label="Email"
          value={user.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="george.bluth@reqres.in"
          disabled={false}
        />
        <Input
          name="password"
          label="Contraseña"
          type="password"
          value={user.password}
          placeholder=""
          onChange={handleChange}
          error={errors.password}
          disabled={false}
        />
        <Button
          color="primary"
          size="large"
          outline={false}
          disabled={isLoading}
          onClick={handleClick}
        >
          {isLoading ? "Iniciando..." : "Iniciar Sesión"}
        </Button>
      </div>
    </FormContainer>
  );
});

export { LoginForm };
