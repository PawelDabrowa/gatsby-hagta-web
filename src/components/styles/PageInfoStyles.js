import styled from 'styled-components';
import GlobalStyle from '../../assets/styles/globalStyles';

export const Wrapper = styled.div`
  margin: 50px 0;
  max-width: 350px;
  @media (max-width: 768px) {
    max-width: none;
    text-align: center;
    padding: 30px 0;
    margin: 90px 0 20px;
  }
  h1 {
    font-size: 52px;
    margin: 0;
    @media (max-width: 768px) {
      margin-bottom: 45px
    }
  }
  p {
    font-size: 18px;
    margin: 15px 0 0;
  }
`;

export default GlobalStyle