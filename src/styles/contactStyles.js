import styled from 'styled-components';

export const StyledInput = styled.input`
  display: block;
  border: 2px solid black;
  background: none;
  font-family: Lato;
  font-size: 20px;
  padding: 10px;
  width: 100%;
  height: ${({as}) => as ? '200px' : 'auto'};
  max-width: ${({as}) => as ? '500px' : '300px'};
  margin-bottom: ${({as}) => as  && '40px'};
    @media (max-width: 768px) {
      max-width: ${({as}) => as ? '300px' : '200px'};
      margin: 0 30px 30px;
    }
`;

export const StyledLabel = styled.label`
  margin: 30px 0 10px;
  display: block;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Lato';
      @media (max-width: 768px) {
        margin: 30px 30px 10px;
    }
`;

