import styled from 'styled-components';
import * as colors from '../../style/colors';

export const MainContainer = styled.main`
    max-width: 1200px;
    padding: 0 25px;
    margin: 80px auto 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &::after {
        background: rgba(0, 0, 0, 0.6);
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
    }

    .conteudo {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 100%;

        .conteudo_title {
            h1 {
                color: ${colors.color1};
                font-size: 2.1em;
                font-weight: 100;
            }
        }

        .types_link-wrap {
            margin-top: 30px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }
    }
`;
