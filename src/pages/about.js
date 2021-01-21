import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Me" />
    <section className='page AboutPage'>
      <h1>About Branon</h1>
      <p>Here's the about me!</p>
    </section>
  </Layout>
)

export default AboutPage
