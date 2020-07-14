import React from "react"
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Title } from "../styles/aboutStyles"


const AboutPage = ({ data }) => (

  <>
  
  
    <Title>{data.datoCmsAbout.title}</Title>
    <h2>{data.datoCmsAbout.subtitle}</h2>

    <p>{data.datoCmsAbout.contentArea}</p>

    <p><em>{data.datoCmsAbout.author}</em></p>
    <Image fluid={data.datoCmsAbout.imageData.fluid} />
  </>
  
  
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
