import styled from 'styled-components';

export const ArticlesWrapper = styled.div`
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
    margin: 0 auto;
    padding: 0 20px 40px;;
  }
`;
