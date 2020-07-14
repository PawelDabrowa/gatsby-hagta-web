import styled from 'styled-components';
import Image from 'gatsby-image'
import { Link } from 'gatsby';


export const PreviewWrapper = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  height: 340px;
  background-color: hsl(0, 0%, 95%);
  background-size: cover;
`;

export const PreviewInfoLabel = styled.div`
  position: absolute;
  left: 0;
  bottom: 35px;
  width: 80%;
  min-height: 40px;
  background-color: black;
  color: white;
  padding: 5px 15px;
  h2,
  p {
    margin: 5px;
  }
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
