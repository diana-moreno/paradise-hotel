import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import NavBar from "../Navbar"

const EnlaceHome = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
`
const FooterWrapper = styled.footer`
  background-color: rgba(44, 62, 80);
  margin-top: 5rem;
  padding: 1rem;
`
const LinksWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
const FooterText = styled.p`
  text-align: center;
  color: #fff;
  background-color: rgb(33, 44, 55);
  margin: 0;
  padding: 1rem;
`

const Footer = ({ title }) => {
  const year = new Date().getFullYear()
  return (
    <>
      <FooterWrapper>
        <LinksWrapper>
          <NavBar />
          <EnlaceHome to="/">
            <h1>Hotel Gatsby</h1>{" "}
          </EnlaceHome>
        </LinksWrapper>
      </FooterWrapper>
      <FooterText>
        {title}. Todos los derechos Reservados {year} &copy;
      </FooterText>
    </>
  )
}

export default Footer
