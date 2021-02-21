import styled from "styled-components";

interface IExtendedProps {
  path: String;
}

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  background: #f4f7ff;
  margin: 0;
  padding: 0;
`;

export const Wrapper = styled.div<IExtendedProps>`
  width: 100%;
  min-height: 95vh;
  max-width: 1200px;
  margin: 60px auto 0 auto;
  padding: 20px 0;
  overflow: hidden;

  ${(props) =>
    props.path &&
    props.path.toLowerCase() === "/login" &&
    `
    width: 100%;
    min-height: 95vh;
    max-width: 100%;
    margin: 0;
    padding: 0;
  `}
`;
