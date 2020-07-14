import React from 'react';
import {PreviewWrapper, PreviewInfoLabel, StyledImage } from './styles/ArticlesPreviewStyles';

const Preview = ({ title, excerpt, image, slug }) => (
  <PreviewWrapper to={`/articles/${slug}`}>
    <StyledImage fluid={image} />
      <PreviewInfoLabel>
        <h2>{title}</h2>
        <p>{excerpt}</p>
      </PreviewInfoLabel>
  </PreviewWrapper>
);

export default Preview;