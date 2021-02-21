// DEPENDENCIES
import React from "react";

// COMPONENTS
import { Navbar } from "../Navbar/Navbar";

// STYLED
import { Layout as Container, Wrapper } from "./styled";

export const Layout = React.memo((props: any) => {
  const pathname = window.location.pathname;
  return (
    <Container>
      <Navbar />
      <Wrapper path={pathname}>{props.children}</Wrapper>
    </Container>
  );
});
