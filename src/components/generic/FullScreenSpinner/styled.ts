import styled from "styled-components";

export const StyledFullScreen = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(54, 53, 53, 0.5);
  z-index: 1060;

  & > div {
    display: table;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    & > span {
      color: white;
      display: table-cell;
      vertical-align: middle;
      width: 100%;
      text-align: center;
      font-size: 25px;

      & > img {
        width: 100px;
        animation: rotation 2s infinite linear;
      }

      @keyframes rotation {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(359deg);
        }
      }
    }
  }
`;
