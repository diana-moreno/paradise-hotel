import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image" // componente de gatsby para optimizar las imagenes y hacerlas ligeras para que tarden poco en cargar. No requiere configuración.
import styled from "@emotion/styled"

const MainContentHome = styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }

  p {
    line-height: 2;
  }
`
const TitleHome = styled.h2`
  text-align: center;
  font-size: 4rem;
  margin-top: 4rem;
`

const HomeContent = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allDatoCmsPage(filter: { slug: { eq: "home" } }) {
        nodes {
          title
          content
          image {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `
)

  const { title, content, image } = data.allDatoCmsPage.nodes[0]

  return (
    <>
      <TitleHome>{title}</TitleHome>

      <MainContentHome>
        <p>{content}</p>
        <Image fluid={image.fluid} />
      </MainContentHome>
    </>
  )
}

export default HomeContent
