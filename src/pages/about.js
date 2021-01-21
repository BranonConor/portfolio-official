import "aos/dist/aos.css";

import React, {useEffect} from "react"

import AOS from "aos";
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <Layout>
      <SEO title="About" />
      <section className='page AboutPage'>
        <div className="two-column">
          <div className="title">
            <h1 data-aos='fade-right' data-aos-duration='300'>About Me</h1>
            <h4 className='subtitle' data-aos='fade-right' data-aos-duration='500'>I love people. I love technology.</h4>
          </div>
          <div className="content">
            <div className="left">
              <p data-aos='fade-right' data-aos-duration='900'>
                My love of people and the human experience is the driving force in my life. That's why I got my degree in neuroscience and spent my first few years out of college as the director of a neuropsychiatric clinic.
              </p>
              <p data-aos='fade-right' data-aos-duration='900'>
                As my fascination with technology got the better of me throughout this time, I began to experiment with coding and building websites.
              </p>
              <h5 className='subtitle-blue' data-aos='fade-right' data-aos-duration='900'>
                I fell in love immediately.
              </h5>
              <p data-aos='fade-right' data-aos-duration='1050'>
                Over the past few years I've been hunkered down learning everything I can about software development. User experience and front end engineering immediately caught my eye as a point of entry, as I rediscovered my neuroscience 
                passion in striving to understand the user and how they may interact with my applications.
              </p>
            </div>
            <div className="right">
              <p data-aos='fade-right' data-aos-duration='1100'>
                I've been enjoying my work as a front end engineer by day and I've been having a blast learning more backend technologies by night.
                The world of software engineering is rich with an abundance of paths and tools to learn, and I love waking up every day with a drive to master current technologies and a yearning to learn something new.
              </p>
              <h6 className='subtitle-blue' data-aos='fade-right' data-aos-duration='1150'>
                Cheers to building tech that improves the human experience.
              </h6>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
