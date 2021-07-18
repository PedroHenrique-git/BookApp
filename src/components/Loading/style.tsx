import styled from 'styled-components';
import * as colors from '../../style/colors';

export const LoadingContainer = styled.div`
    background: ${colors.color4};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: auto;
        width: 300px;
    }
`;
