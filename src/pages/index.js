import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import Header from "../components/Header"
import SEO from "../components/seo"
import HotelImage from '../components/HotelImage'
import HomeContent from '../components/Home'

const IndexPage = () => (
  <Layout>
    <HotelImage />
  {/*  <Header />*/}
    <HomeContent />
  </Layout>
)

export default IndexPage
