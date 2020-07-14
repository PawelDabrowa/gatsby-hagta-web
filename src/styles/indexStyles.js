import styled from 'styled-components';
import Image from 'gatsby-image';

export const ContentWrapper = styled.div`
    width: 60%;
    display: flex;
    height: calc(100vh - 100px);
    text-align: right;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    min-height: 500px;
    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
      align-items: center; 
      height: calc(50vh - 100px);
      min-height: 450px;
      margin-top: 30px;
    }
`;

export const StyledImage = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 40%;
  height: 100vh;
  object-fit: cover;
  min-height: 400px;
  @media (max-width: 768px) {
    position: relative !important;
    bottom:0;
    top: 50%;
    height: 50vh;
    width: 100%;
  }
`;

export const Title = styled.h1`
  width: 100%;
`;

export const Content = styled.p`
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
