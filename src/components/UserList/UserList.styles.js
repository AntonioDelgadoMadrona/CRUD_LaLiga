import styled from "styled-components";

export const UserListContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledAvatarImg = styled.div`
  width: 80px;
  height: 80px;
  margin-top: 5px;

  & img,
  & svg {
    position: relative;
    float: left;
    width: 90%;
    height: 90%;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 0 5px 5px rgb(0 0 0 / 25%);
  }
`;
