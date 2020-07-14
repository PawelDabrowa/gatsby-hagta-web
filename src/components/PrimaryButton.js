import React from 'react';
import { Link } from 'gatsby';
import { ButtonWrapper } from './styles/PrimaryButtonStyles'

const PrimaryButton = () => (

  <ButtonWrapper>
    <Link to="/articles">read more</Link>
  </ButtonWrapper>
);

export default PrimaryButton;