// DEPENDENCIES
import styled from "styled-components";

export const StyledTable = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 2px rgb(0 0 0 / 10%);
  width: 100%;
`;

export const StyledTableContainer = styled.div`
  display: block;
  overflow-x: auto;

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
  color: black;
  font-size: 13px;
`;

export const StyledTHRow = styled.tr`
  & th span {
    width: max-content;
    display: block;
    margin: 0 auto;
    font-weight: 500;
  }
  & th {
    background-color: #fff;
    border: none;
    text-align: center;
  }
`;

export const StyledTRow = styled.tr`
  background-color: #f4f7ff;

  &:nth-of-type(even) {
    background-color: rgba(218, 226, 252, 0.5);
  }
`;

export const StyledTBody = styled.tbody`
  font-size: 13px;
  font-weight: 400;
`;

export const StyledTd = styled.td`
  text-align: center;

  & span {
    width: max-content;
    display: inline-block;
  }
`;
