import React from 'react';
import styled from 'styled-components';

import {Wrapper} from './styles/PageInfoStyles'

const PageInfo = ({ title, paragraph }) => (
  <Wrapper>
    <h1>{title}</h1>
    <p>{paragraph}</p>
  </Wrapper>
);

export default PageInfo;