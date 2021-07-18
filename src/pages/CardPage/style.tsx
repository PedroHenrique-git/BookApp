import styled from 'styled-components';
import * as colors from '../../style/colors';

export const MainCardContainer = styled.main`
    max-width: 1700px;
    padding: 0 25px;
    margin: 80px auto 80px auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
        margin-bottom: 30px;

        display: flex;
        align-items: center;
        justify-content: center;

        a {
            margin-right: 20px;
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

        h1 {
            color: ${colors.color1};
            font-size: 2.6em;
            font-weight: 100;
        }
    }

    .card_conteudo {
        .card_image {
        }
    }
`;
