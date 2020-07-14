import React from "react"
import Layout from '../layout'
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { GalleryWrapper } from '../styles/galleryStyles'
import GalleryPreview from '../components/GalleryPreview'
import PageInfo from '../components/PageInfo';

const pageData = {
  title: 'gallery',
  paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`,
};

const GalleryPage = ({ data }) => {

  return (
    <Layout>
       <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
      <GalleryWrapper>
        {data.datoCmsGalleryModal.galleryImages.map(item => {
          const itemKey = Object.keys(item)[0];

          switch (itemKey) {
            case 'imageData':
              return <Image key={item.id} fluid={item[itemKey].fluid} />;
            default:
              return null;
          }
        })}
      </GalleryWrapper>
    </Layout>
  );
};

export default GalleryPage;

export const query = graphql`
{
  datoCmsGalleryModal {
    galleryImages {
      imageData {
        fluid(maxWidth: 600) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
}
`;