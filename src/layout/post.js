  
import React from 'react';
import Image from 'gatsby-image';
import { graphql } from 'gatsby';
import Layout from '../layout'
import GlobalStyle from "../assets/styles/globalStyles";
import { PostWrapper, ImageWrapper, PostTitle, PostAuthor } from '../styles/postStyles'

const PostLayout = ({ data }) => {

  return (
    <Layout>
      <GlobalStyle />
      <PostWrapper>
      <PostTitle>{data.datoCmsArticle.title}</PostTitle>
      <PostAuthor><span>Author: </span><em>{data.datoCmsArticle.author}</em></PostAuthor>
      <ImageWrapper>
        <Image fluid={data.datoCmsArticle.featuredImage.fluid} />
      </ImageWrapper>
      <div>
        {data.datoCmsArticle.articleContent.map(item => {
          const itemKey = Object.keys(item)[1];
          
          switch (itemKey) {
            case 'paragraphContent':
              return <p key={item.id}>{item[itemKey]}</p>;
            case 'headingContent':
              return <h2 key={item.id}>{item[itemKey]}</h2>;
            case 'imageData':
              return <Image key={item.id} fluid={item[itemKey].fluid} />;
            default:
              return null;
          }
        })}
      </div>
      </PostWrapper>
    </Layout>
  );
};

export default PostLayout;

export const query = graphql`
  query querySingleArticle($id: String!) {
    datoCmsArticle(id: { eq: $id }) {
      title
      featuredImage {
        fluid(maxWidth: 700) {
          ...GatsbyDatoCmsFluid_noBase64
        }
      }

      author
      articleContent {
        ... on DatoCmsParagraph {
          paragraphContent
          id
        }
        ... on DatoCmsHeading {
          headingContent
          id
        }
        ... on DatoCmsArticleImage {
          imageData {
            fluid(maxWidth: 700) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
          id
        }
      }
    }
  }
`;