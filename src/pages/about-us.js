import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import AboutUs from "../components/AboutUs"

const SecondPage = () => {
  return (
    <Layout>
      <SEO title="Page two" />
      <AboutUs />
{/*      <Link to="/">Go back to the homepage</Link>*/}
    </Layout>
  )
}

export default SecondPage
