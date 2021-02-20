// DEPENDENCIES
import styled from "styled-components";

interface IExtendedProps {
  size: "large" | "medium" | "small";
  outline: boolean;
  color: "primary" | "secondary" | "danger";
}

export const Button = styled.button<IExtendedProps>`
  /* PRIMARY COLOR BY DEFAULT */
  background-color: #0cbd57;
  border: 1px solid #0cbd57;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #38d279;
  }
  &:active,
  &:focus {
    background-color: #1e7e34;
    border: 1px solid #1e7e34;
    outline: none;
  }

  /* SECONDARY COLOR */
  ${(props) =>
    props.color &&
    props.color === "secondary" &&
    `
    background-color: #5456fb;
    border: 1px solid #5456fb;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #6668f7;
      border: 1px solid #6668f7;
    }

    &:active,
    &:focus {
      background-color: #3d40fa;
      outline: none;
      border: 1px solid #3d40fa;
    }
  `}

  /* DANGER COLOR */
  ${(props) =>
    props.color &&
    props.color === "danger" &&
    `
    background-color: #fc4561;
    border: 1px solid #fc4561;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #ed6071;
      border: 1px solid #ed6071;
    }

    &:active,
    &:focus {
      background-color: #c41b34;
      outline: none;
      border: 1px solid #c41b34;
    }
  `}

  /* SMALL SIZE BY DEFAULT */
  border-radius: 5px;
  transition: 0.5s;
  min-width: 45px;
  line-height: 100%;
  padding: 5px 10px;
  font-size: 0.7rem;
  font-weight: 400;

  ${(props) =>
    props.size &&
    props.size === "medium" &&
    `
        border-radius: 5px;
        transition: 0.5s;
        min-width: 55px;
        line-height: 100%;
        padding: 6px 12px;
        font-size: 1rem;
        font-weight: 400;
  `}

  ${(props) =>
    props.size &&
    props.size === "large" &&
    `
        border-radius: 5px;
        transition: 0.5s;
        min-width: 75px;
        line-height: 100%;
        padding: 12px 18px;
        font-size: 1rem;
        font-weight: 400;
  `}

  ${(props) =>
    props.disabled &&
    `
        pointer-events: none;
        background-color: #929293;
        color: white;
        border: none;
        opacity: 0.8;
  `}
`;
