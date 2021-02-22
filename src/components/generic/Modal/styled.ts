import styled from "styled-components";

interface IExtendedProps {
  show: boolean;
}

export const StyledModal = styled.div<IExtendedProps>`
  display: ${({ show }) => (show ? "block" : "none")}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 50; /* Sit on top */
  padding-top: 200px;
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  transition: 0.3s ease-out;
`;

export const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 5px 20px 0 20px;
  border: 1px solid #888;
  width: 100%;
  max-width: 450px;
  border-radius: 10px;
`;

export const ModalClose = styled.div`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ModalBody = styled.div`
  padding: 20px 0;
  text-align: center;
`;
