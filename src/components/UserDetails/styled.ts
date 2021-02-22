// DEPENDENCIES
import styled from "styled-components";

// STYLED
import { StyledTable } from "./../generic/Table/styled";

export const StyledUserDetails = styled.div`
  width: 100%;

  & > h2 {
    text-align: center;
    font-size: 1.5rem;
    text-transform: uppercase;
  }

  & > a {
    position: absolute;
    text-decoration: none;
    display: flex;
    align-items: flex-end;
    width: max-content;
    justify-content: space-between;
    background-color: #0c1b23;
    padding: 5px;
    border-radius: 10px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    &:hover > svg {
      opacity: 0.8;
    }

    & > svg {
      font-size: 1.5rem;
      margin-right: 5px;
      color: #fef6b9;
    }
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 10px;

  & > div {
    margin-top: 20px;
  }

  & > div button:first-child {
    margin-right: 20px;
  }
`;

export const WhiteContainer = styled.div`
  ${StyledTable}
`;
