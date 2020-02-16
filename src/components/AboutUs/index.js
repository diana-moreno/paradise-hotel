import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"

const ContentAboutUs = styled.main`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
  }
  p {
    line-height: 2;
    margin-top: 2rem;
  }
`
const TitleAboutUs = styled.h2`
  margin-top: 4rem;
  text-align: center;
  font-size: 4rem;
`

const AboutUsContent = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsPage(filter: {slug: {eq: "about-us"}}) {
        nodes {
          title
          content
          image {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  const { title, content, image } = data.allDatoCmsPage.nodes[0]

  return (
    <>
      <TitleAboutUs>{title}</TitleAboutUs>
      <ContentAboutUs>
        <p>{content}</p>
        <Image fluid={image.fluid} />
      </ContentAboutUs>
    </>
  )
}

export default AboutUsContent
