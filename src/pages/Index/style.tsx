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

    @media (max-width: 640px) {
        margin: 20px auto 0 auto;
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
                text-align: center;
            }
        }

        .types_link-wrap {
            margin-top: 30px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }

        form {
            margin-top: 20px;
            display: flex;
            justify-content: center;
            align-items: center;

            input {
                color: ${colors.color3};
                padding: 10px;
                border-radius: 10px;
                border: none;
                outline: none;
                font-size: 1.4em;
                margin-right: 15px;

                @media (max-width: 640px) {
                    width: 200px;
                }
            }

            button {
                border-radius: 5px;
                background: ${colors.color2};
                border: none;
                color: ${colors.color3};
                outline: none;
                cursor: pointer;
                padding: 10px;
                font-size: 1.4em;
            }
        }
    }
`;
