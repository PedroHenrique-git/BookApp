import { createGlobalStyle } from 'styled-components';
import background from '../images/background.jpg';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Roboto Slab', serif;
    }

    html {
        background: url(${background}) no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    html, body {
        width: 100%;
    }
`;
