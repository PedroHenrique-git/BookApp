import styled from 'styled-components';
import * as colors from '../../style/colors';

export const ErrorContainer = styled.div`
    background: ${colors.color4};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        color: ${colors.color1};
    }

    a {
        border-radius: 5px;
        background: ${colors.color2};
        border: none;
        color: ${colors.color3};
        outline: none;
        cursor: pointer;
        padding: 5px;
        font-size: 1.2em;
        text-decoration: none;
    }
`;
