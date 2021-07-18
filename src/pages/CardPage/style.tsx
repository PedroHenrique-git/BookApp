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

        @media (max-width: 640px) {
            flex-direction: column;
        }

        button {
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

    .card_conteudo {
        display: flex;
        justify-content: space-evenly;
        width: 100%;

        @media (max-width: 1400px) {
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }

        .card_image {
            @media (max-width: 1400px) {
                margin-bottom: 80px;
            }

            img {
                height: auto;
                width: 500px;

                @media (max-width: 640px) {
                    width: 300px;
                }
            }
        }

        .card_info {
            max-height: 700px;
            max-width: 800px;
            overflow-y: auto;

            &::-webkit-scrollbar {
                width: 10px;
            }

            &::-webkit-scrollbar-track {
                background: #f1f1f1;
            }

            &::-webkit-scrollbar-thumb {
                background: ${colors.color2};
            }

            li {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                list-style: none;
                margin-top: 25px;

                &:first-of-type {
                    margin-top: 0;
                }

                &.attacks {
                    align-items: flex-start;
                    flex-direction: column;

                    .attack {
                        margin-top: 20px;

                        h3 {
                            color: ${colors.color2};
                            text-transform: uppercase;
                            font-weight: 100;
                            font-size: 1.2em;
                            margin-right: 20px;
                        }
                    }
                }

                &.weaknesses {
                    .weaknesse {
                        display: flex;

                        h3 {
                            color: ${colors.color2};
                            text-transform: uppercase;
                            font-weight: 100;
                            font-size: 1.2em;
                            margin-right: 20px;
                        }
                    }
                }

                h2 {
                    background: ${colors.color2};
                    border-radius: 5px;
                    color: ${colors.color3};
                    text-transform: uppercase;
                    font-weight: 100;
                    font-size: 1.2em;
                    margin-right: 20px;
                    padding: 5px;
                }

                p {
                    color: ${colors.color1};
                    font-weight: 100;
                    font-size: 1.2em;
                }
            }
        }
    }
`;
