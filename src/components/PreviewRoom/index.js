import React from "react"
import Image from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Button = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(44, 62, 80, 0.85);
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
`

const CardContainer = styled.div`
  border: 1px solid #e1e1e1;
  display: flex;
  flex-direction: column;
  padding: 1em;
`

const TextContainer = styled.div`
  padding: 3rem;
  flex: 1 0 auto;
`

const PreviewRoom = ({ room }) => {
  const { content, image, title, slug } = room
console.log(room)

  return (
    <CardContainer>
      <Image fluid={image.fluid} />
      <TextContainer>
        <h3
          css={css`
            font-size: 3rem;
          `}
        >
          {title}
        </h3>
        <p>{content}</p>
      </TextContainer>
      <Button to={slug}>View room</Button>
    </CardContainer>
  )
}

export default PreviewRoom
