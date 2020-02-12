/*import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"

const MainContentHome = styled.div`
  padding-top: 4rem
  max-width: 1200px
  width: 95%
  margin: 0 auto

  @media (min-width: 768px) {
    display: grid
    grid-template-columns: repeat(2, 1fr)
    column-gap: 2rem
  }

  p {
    line-height: 2
  }
`
const TitleHome = styled.h2`
 text-align: center
  font-size: 4rem
  margin-top: 4rem
 `

const HomeContent = () => {
  const informacion = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "inicio" } }) {
        nodes {
          titulo
          contenido
          imagen {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  //  console.log(informacion.allDatoCmsPagina.nodes[0])

  const { titulo, contenido, imagen } = informacion.allDatoCmsPagina.nodes[0]

  return (
    <>
      <TitleHome>{titulo}</TitleHome>

      <MainContentHome>
        <p>{contenido}</p>
        <Image fluid={imagen.fluid} />
      </MainContentHome>
    </>
  )
}

export default HomeContent
*/