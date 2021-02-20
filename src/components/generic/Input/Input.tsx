// DEPENDENCIES
import React, { useState } from "react";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// STYLED
import { InputContainer, StyledInput, StyledLabel, StyledError } from "./styled";

interface IProps {
  type: "text" | "password" | "email";
  name: string;
  label: string;
  onChange: any;
  placeholder: string;
  value: any;
  error: string;
  disabled: boolean;
}

const Input = React.memo<IProps>((props) => {
  const { type, name, label, onChange, placeholder, value, error, disabled } = props;

  return (
    <InputContainer>
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}

      <StyledInput
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        showError={error}
      />

      <StyledError>{error && <span>{error}</span>}</StyledError>

    </InputContainer>
  );
});

export { Input };
