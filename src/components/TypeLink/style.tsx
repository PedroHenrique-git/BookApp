import styled from 'styled-components';
import * as colors from '../../style/colors';

type typeString = {
    type: string;
};

export const TypeCard = styled.div<typeString>`
    position: relative;
    height: 200px;
    width: 200px;

    &:hover:after {
        background: rgba(0, 0, 0, 0.8);
        border-radius: 5px;
        content: '${(props: typeString) => props.type}';
        color: ${colors.color1};
        padding: 10px;
        font-size: 1.1em;
        text-transform: uppercase;

        position: absolute;
        bottom: 200px;
        right: 0;
    }

    a {
        display: flex;
        height: 100%;
        width: 100%;
    }
`;
