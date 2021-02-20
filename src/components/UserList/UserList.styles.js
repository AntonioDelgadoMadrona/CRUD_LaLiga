import styled from "styled-components";

export const UserListContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledAvatarImg = styled.div`
  width: 50px;
  height: 50px;
  margin-top: 5px;

  & img,
  & svg {
    position: relative;
    float: left;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 100%;
  }
`;
