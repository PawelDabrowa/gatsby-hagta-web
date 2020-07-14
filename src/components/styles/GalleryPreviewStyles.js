import styled from 'styled-components';
import Image from 'gatsby-image'


export const GalleryStyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PreviewInfoLabel = styled.div`
 margin-top: 40px;
  h1 {
    font-size: 52px;
  }
`;