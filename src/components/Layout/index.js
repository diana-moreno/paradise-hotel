/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet" // to edit html head
import { Global, css } from '@emotion/core'
// para añadir estilos sin crear un style component

import Header from "../Header"
import "./index.css"

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
          }
          body {
            background-color: red;
          }
        `}
      />
      <Helmet>
        <title>title</title>
        <meta name="description" content='description' />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Roboto:400,700&display=swap" rel="stylesheet" />
      </Helmet>
      <h1>YOU</h1>
      {children}
    </>
  )
}

export default Layout
