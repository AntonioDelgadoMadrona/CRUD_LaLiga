// DEPENDENCIES
import React from 'react';

// STYLED
import { Layout as Container, Wrapper } from './Layout.styles';

export const Layout = React.memo((props: any) => {

    return (
        <Container>
            {/* NAVBAR TOP */}
            <Wrapper>{props.children}</Wrapper>
        </Container>
    )
});