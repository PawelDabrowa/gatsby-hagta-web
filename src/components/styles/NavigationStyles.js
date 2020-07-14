import styled from 'styled-components';
import GlobalStyle from '../../assets/styles/globalStyles';

export const NavigationWrapper = styled.nav`
  display: flex;
  position: absolute;
  top: 20px;
  left: 100px;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Lato';
    @media (max-width: 768px) {
      width: 300px;
      transform: ${({showNav}) => showNav ? 'translateX(0px)' : 'translateX(-300px)'};
      top: 0;
      left: 0;
      height: 100vh;
      background-color: aliceblue;
      align-items: flex-start;
      z-index: 9999;
      transition: transform 250ms ease-in-out;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
`;

export const NavigationList = styled.ul`
 list-style: none;
 display: flex;
  @media (max-width: 768px) {
      flex-direction: column;
      padding-top: 70px;

  }
`;

export const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
`;

export const Logo = styled.span`
 position: absolute;
 font-weight: 700;
 font-size: 20px;
 top: 17px;
 left: 20px;
 color: #000;
 @media (max-width: 768px) {
   top: 20px;
   left: calc(100% - 90px);
 }
 a {
      text-decoration: none;
      color: inherit;
    }
`;

export default GlobalStyle;