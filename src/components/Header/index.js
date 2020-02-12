import React from "react"
import styled from '@emotion/styled'
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Navbar from '../Navbar'

const HomeLink = styled(Link) `
  color: #FFF;
  text-align: center;
  text-decoration: none;
`
const HeaderWrapper = styled.header`
  background-color: rgba(44,62,80);
  padding: 1rem;
`
const LinkWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
  }
`

const Header = () => {
  return (
    <HeaderWrapper>
      <LinkWrapper>
        <HomeLink to='/'><h1>Paradise Hotel</h1></HomeLink>
        <Navbar />
      </LinkWrapper>
    </HeaderWrapper>
  );
}

export default Header;
