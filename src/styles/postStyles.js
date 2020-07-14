import styled from 'styled-components';

export const PostWrapper = styled.div`
  padding: 80px 65px 0;
    @media (max-width: 768px) {
    text-align: center;
    padding: 120px 20px 0;
    }
`;

export const ImageWrapper = styled.div`
    margin: 0 auto;
    text-align: center;
    @media (max-width: 768px) {

    }
`;

export const PostTitle = styled.h1`
  font-size: 52px;
    @media (max-width: 768px) {

    }
`;

export const PostAuthor = styled.p`

    @media (max-width: 768px) {
  
    }
    span {
      font-weight: bold;
    }
`;
