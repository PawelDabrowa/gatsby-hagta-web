import styled from 'styled-components';
import Image from 'gatsby-image';

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    max-width: 500px;
    text-align: center;
    margin: 80px auto;
    padding: 0 20px;
  }
`;
