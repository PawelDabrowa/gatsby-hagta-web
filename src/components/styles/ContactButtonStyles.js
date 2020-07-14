import styled from 'styled-components';
import GlobalStyle from '../../assets/styles/globalStyles';

export const Button = styled.button`

    text-align: center;
    line-height: 28px;
    cursor: pointer;
    padding: 2px 24px;
    color: #fff;
    background-color: #000;
    @media (max-width: 768px) {
        margin-left: 30px;
    }

`;

export default GlobalStyle;