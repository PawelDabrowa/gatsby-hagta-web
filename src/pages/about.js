import React from "react"
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { ContentWrapper, StyledImage, Title, Content, Subtitle, Author, Line } from "../styles/aboutStyles"
import Layout from '../layout'


const AboutPage = ({ data }) => (

  <Layout>
  
    <ContentWrapper>
    <Title>{data.datoCmsAbout.title}</Title>
    <Subtitle>{data.datoCmsAbout.subtitle}</Subtitle>
    <Line />
    <Content>{data.datoCmsAbout.contentArea}</Content>
    <Line />
    <Author><em>{data.datoCmsAbout.author}</em></Author>
    </ContentWrapper>
    <StyledImage fluid={data.datoCmsAbout.imageData.fluid} />
  </Layout>
  
  
);

export const query = graphql`
query queryCMSAbout {
  datoCmsAbout {
    title
    subtitle
    contentArea
    author
    imageData {
      fluid(maxWidth: 1500) {
        ...GatsbyDatoCmsFluid_tracedSVG
      }
      
    }
  }
}

`;


export default AboutPage
