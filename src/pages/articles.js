import React from "react"
import { graphql } from 'gatsby';
import Layout from '../layout'

import { ArticlesWrapper } from '../styles/articlesStyles'

import  Preview  from '../components/ArticlesPreview'
import PageInfo from '../components/PageInfo';
import slugify from 'slugify';

const pageData = {
  title: 'articles',
  paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`,
}

const ArticlesPage = ({ data }) => {
  const {
    allDatoCmsArticle: { nodes },
  } = data;

  return (
    <Layout>
      <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
      <ArticlesWrapper>
      {nodes.map(({ title, featuredImage }) => (

          <Preview
            key={title}
            title={title}
            image={featuredImage.fluid}
            slug={slugify(title, { lower: true })}
          />
        ))}
      </ArticlesWrapper>
    </Layout>
  );
}

export const query = graphql`
{
  allDatoCmsArticle {
    nodes {
      title
      featuredImage {
        fluid(maxWidth: 500) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
}
`;



export default ArticlesPage;