import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: black;
  background-color: #fff;
  padding: 20px 0 10px 0;
  height: 35px;
`;

export const PaginationInfo = styled.div`
  position: absolute;
  display: flex;
  align-items: center;

  & div {
    margin-right: 20px;
  }
  & span {
    font-size: 18px;
    margin-right: 5px;
  }
  & strong {
    font-size: 20px;
    margin-right: 5px;
    font-weight: bold;
  }
`;

export const PaginationPager = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;

  & > ul {
    align-items: center;
    margin: 0 auto;
    display: flex;
    list-style: none;

    & > li {
      cursor: pointer;
      margin: auto 10px;

      &.active {
        pointer-events: none;

        & > span {
          pointer-events: none;
          color: #4caf50;
          opacity: 1;
        }
      }

      &.disabled {
        pointer-events: none;
        opacity: 0.5;
      }

      & > span,
      & > svg {
        font-weight: bold;
        font-size: 22px;
        color: #0d0d1e;

        &:hover {
          opacity: 0.5;
        }
      }
    }
  }
`;
