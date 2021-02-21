// DEPENDENCIES
import React from "react";

// COMPONENTS
import { Navbar } from "../Navbar/Navbar";

// STYLED
import { Layout as Container, Wrapper } from "./Layout.styles";

export const Layout = React.memo((props: any) => {
  return (
    <Container>
      <Navbar />
      <Wrapper>{props.children}</Wrapper>
    </Container>
  );
});
