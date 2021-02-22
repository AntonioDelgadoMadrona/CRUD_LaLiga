// DEPENDENCIES
import styled from "styled-components";

export const StyledTable = styled.div`
  padding: 20px;
  background-color: #0C1B23;
  border-radius: 10px;
  box-shadow: 0 2px 2px rgb(0 0 0 / 10%);
  width: 100%;
  height: auto;
  min-height: 600px;
  box-sizing: border-box;
`;

export const StyledTableContainer = styled.div`
  display: block;
  overflow-x: auto;
  box-sizing: content-box;

  &::-webkit-scrollbar {
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #e7ecff;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #0cbd57;
  }

  & table {
    margin-bottom: 0;
    width: 100%;
    border-collapse: collapse;
  }

  & table td {
    border-top: none;
  }

  & .table th,
  & .table td {
    vertical-align: middle;
  }
`;

export const StyledTHead = styled.thead`
  color: #FEF6B9;
  background-color: transparent;
  text-transform: uppercase;
`;

export const StyledTHRow = styled.tr`
  & th span {
    width: max-content;
    display: block;
    margin: 0 auto;
    font-weight: bold;
    padding-bottom: 5px;
  }
  & th {
    background-color: transparent;
    border: none;
    text-align: center;
  }
`;

export const StyledTRow = styled.tr`
  background-color: transparent;

  &:nth-of-type(even) {
    background-color: #254150;
  }
`;

export const StyledTBody = styled.tbody`
  font-weight: 400;
  color: #78B3C2;
`;

export const StyledTd = styled.td`
  text-align: center;

  & span {
    width: max-content;
    display: inline-block;
  }
`;
