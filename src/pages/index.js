import Image from "../components/image"
import Layout from "../components/layout"
import { Link } from "gatsby"
import React from "react"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className='page IndexPage'>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </section>
  </Layout>
)

export default IndexPage
