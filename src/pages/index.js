import React from "react"
import Layout from '../layout'
import { graphql } from "gatsby"
import PrimaryButton from '../components/PrimaryButton'
import { ContentWrapper, StyledImage, Title, Content } from '../styles/indexStyles'
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  
  <Layout>
     <SEO title="Homepage" />
    <ContentWrapper>
      <Title>Your new space</Title>
      <Content>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem vitae autem corporis?</Content>
        <PrimaryButton />
    </ContentWrapper>
    <StyledImage fluid={data.file.childImageSharp.fluid} />
  </Layout>
);

export const query = graphql`
  {
    file(name:{eq: "pots"}) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage
