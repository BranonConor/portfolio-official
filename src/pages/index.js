import "aos/dist/aos.css";

import React, {useEffect} from "react"

import AOS from "aos";
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <Layout>
      <SEO title="Home" />
      <section className='page IndexPage'>
        <div className="two-column">
          <div className="content">
            <div className="left">
              <h1 data-aos='fade-right' data-aos-duration='300'>Hi, I'm Branon 👋🏼</h1>
              <h4 className='subtitle' data-aos='fade-right' data-aos-duration='500'>I'm a software engineer and UX designer.</h4>
              <p className='subtitle-white' data-aos='fade-right' data-aos-duration='700'>
                With a degree in behavioral neuroscience, a creative eye for stunning and ergonomic UX/UI design,
                and a powerful command of modern technologies to build quality interfaces and experiences, my strengths
                lie at the intersection of technology and people.
              </p>
              <p className='subtitle-white' data-aos='fade-right' data-aos-duration='900'>My passion is building intuitive, efficient software that delights users and propels businesses forward.</p>
            </div>
            <div className="right">

            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
