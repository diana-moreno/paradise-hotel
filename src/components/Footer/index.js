import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import NavBar from "../Navbar"

const FooterText = styled.p`
  text-align: center;
  color: #fff;
  background-color: rgba(44,62,80);
  margin: 0;
  padding: 4rem;
`

const Footer = ({ title }) => {
  const year = new Date().getFullYear()
  return (
    <FooterText>
      {title}. Todos los derechos Reservados {year} &copy;
    </FooterText>
  )
}

export default Footer
