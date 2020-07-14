import React from 'react';
import { PreviewInfoLabel } from './styles/GalleryPreviewStyles';

const pageData = {
    title: 'gallery',
    paragraph: `Great things are done by a series of small things brought together.`,
  }


const Preview = () => (
      <PreviewInfoLabel>
        <h1>{pageData.title}</h1>
        <p>{pageData.paragraph}</p>
      </PreviewInfoLabel>
);

export default Preview;