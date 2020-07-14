import styled from 'styled-components';
import GlobalStyle from '../../assets/styles/globalStyles';


export const StyledHamburger = styled.button`
  display: none;
  outline: none;
    @media (max-width: 768px) {
      position: absolute;
      top: 10px;
      left: 12px;
      padding: 10px;
      display: inline-block;
      background-color: transparent;
      border: 0;
      z-index: 9999999;
    }
`;

export const HamburgerBox = styled.span`
  width: 24px;
  height: 20px;
  display: inline-block;
  position: relative;
`;

export const HamburgerInner = styled.span`
  width: 100%;
  height: 3px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${({hamburger}) => hamburger ? `transparent` : `#333`};
  transition: background-color 100ms ease-in-out;

    &::after,
    &::before {
      content: '';
      left: 0;
      width: 100%;
      height: 3px;
      position: absolute;
      background-color: #333;
      top: 8px;
    }

    &::after {
      transform: ${({hamburger}) => hamburger ? 'translateY(-8px) rotate(-135deg)' : 'translateY(0) rotate(0)'};
    }

    &::before {
      transform: ${({hamburger}) => hamburger ? 'translateY(8px) rotate(135deg)' : 'translateY(0) rotate(0)'};
      top: -8px;
    }
`;

export default GlobalStyle;