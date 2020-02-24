import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image' // no necesita agregar configuración en gatsby-config.

const ImageBackground = styled(BackgroundImage)`
  height: 700px
`
const TextImage = styled.div`
  background-image: linear-gradient( to top, rgba(34,49,63,.8),rgba(34,49,63,.8)  );
  color: #FFF;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

  h1 {
      font-size: 4rem;
      margin: 0%;

      @media (min-width: 992px){
          font-size: 5.8rem;
      }
  }
  p {
      font-size: 2rem;
      @media (min-width: 992px){
          font-size: 2.6rem;
      }
  }
`

const HotelImage = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: {eq: "8.jpg"}) {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `)
  const imageUrl = image.childImageSharp.fluid

  return (
    <ImageBackground tag='section' fluid={imageUrl} fadeIn='soft' >
      <TextImage>
        <h1>Welcome to Paradise</h1>
        <p>Enjoy your holidays with us</p>
      </TextImage>
    </ImageBackground>

  )
}

export default HotelImage