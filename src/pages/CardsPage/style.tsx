import styled from 'styled-components';
import * as colors from '../../style/colors';

export const CardWrap = styled.main`
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

        @media (max-width: 640px) {
            flex-direction: column;
        }

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

            @media (max-width: 640px) {
                margin-right: 0px;
            }
        }

        h1 {
            color: ${colors.color1};
            font-size: 2.6em;
            font-weight: 100;
            text-align: center;
        }
    }

    .cards_wrap {
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;

        li {
            list-style: none;
            cursor: pointer;

            &:hover {
                transform: scale(1.3);
                transition: all 0.2s ease;
            }
        }
    }

    .page_control-wrap {
        margin-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;

        button {
            border-radius: 5px;
            background: ${colors.color2};
            border: none;
            color: ${colors.color3};
            outline: none;
            cursor: pointer;
            padding: 15px;
            font-size: 1.6em;

            &:first-of-type {
                margin-right: 20px;
            }
        }
    }
`;
