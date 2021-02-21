import styled from "styled-components";

export const StyledNavbar = styled.header`
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  background: #0d0d1e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 60px;
  color: #ffff;
  box-sizing: border-box;
`;

export const ImgContainer = styled.div`
  width: 150px;
  height: auto;
  display: flex;
  align-items: center;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const LinksContainer = styled.div`
  width: auto;
  text-align: right;
  justify-content: right;

  & > ul {
    list-style: none;
    display: flex;
    justify-content: space-between;

    & > li {
        margin-right: 10px;
    }

    & a {
      font-size: 20px;
      text-decoration: none;
      display: flex;
      align-items: flex-end;
      width: max-content;
      justify-content: space-between;
      height: 30px;
      color: inherit;

      :hover {        
        opacity: 0.8;
      }

      & > svg {
        margin-right: 5px;
      }
    }
  }
`;
