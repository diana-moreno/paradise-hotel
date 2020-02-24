import React from "react"
import Helmet from "react-helmet"
import { Global, css } from "@emotion/core"
import Header from "../Header"
import Footer from "../Footer"
import useSeo from "../../hooks/use-seo"
import styled from '@emotion/styled';

const MainContainer = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
`

const GlobalStyled = styled(Global)`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
    height: 100%
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    font-size: 18px;
    font-size: 1.8rem;
    line-height: 1.5;
    font-family: "PT Sans", sans-serif;
    height: 100%;
  }
  h1,
  h2,
  h3 {
    margin: 0;
    line-height: 1.5;
  }
  h1,
  h2 {
    font-family: "Roboto", serif;
  }
  h3 {
    font-family: "PT Sans", sans-serif;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`

const Layout = props => {
  const seo = useSeo()
  const { siteName, fallbackSeo: { description, title } } = seo

  return (
    <>
      <GlobalStyled/>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Roboto:400,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <MainContainer>
        <Header />
        <div>
          {props.children}
        </div>
        <Footer title={title} />
      </MainContainer>
    </>
  )
}

export default Layout
