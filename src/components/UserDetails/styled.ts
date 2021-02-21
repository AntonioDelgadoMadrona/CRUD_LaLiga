// DEPENDENCIES
import styled from 'styled-components';

// STYLED
import { StyledTable } from './../generic/Table/styled';

export const StyledUserDetails = styled.div`
    width: 100%;

    & > h2 {
        text-align: center;
        font-size: 25px;
    }

    & > a {
        font-size: 20px;
        text-decoration: none;
        display: flex;
        align-items: flex-end;
        width: max-content;
        justify-content: space-between;
        height: 30px;

        :hover {
            color: black;
            font-size: 20.5px;
        }

        & > svg {
            margin-right: 5px;
        }
    }
`;

export const ModalContent = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 10px;

    & > div {
        margin-top: 20px;
    }

    & > div button:first-child {
        margin-right: 20px;
    }
`;

export const WhiteContainer = styled.div`
    ${StyledTable}
`;