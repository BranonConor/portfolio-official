import "aos/dist/aos.css";
import './index.css'

import React, {useEffect} from "react"

import AOS from "aos";
import ButtonPrimary from '../components/buttons/button-primary'
import Layout from "../components/layout"
import Resume from '../images/resume.pdf'
import SEO from "../components/seo"
import TechGrid from '../components/grids/tech-grid'
import {motion} from 'framer-motion'

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
          <div className="title">
            <motion.h1
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{type: 'spring', duration: 1.5}}
            >
              Hi, I'm Branon<span>👋🏼</span>
            </motion.h1>
            <h4 className='subtitle' data-aos='fade-right' data-aos-duration='500'>I'm a software engineer and UX designer.</h4>
          </div>
          <div className="content">
            <div className="left">
              <p className='subtitle-white' data-aos='fade-right' data-aos-duration='700'>
                With a degree in behavioral neuroscience, a creative eye for stunning and ergonomic UX/UI design,
                and a powerful command of modern technologies to build quality interfaces and experiences, my strengths
                lie at the intersection of technology and people.
              </p>
              <p className='subtitle-white' data-aos='fade-right' data-aos-duration='900'>My passion is building intuitive, efficient software that delights users and propels businesses forward.</p>
              <div data-aos='fade-right' data-aos-duration='1100' className='my-work'>
                <ButtonPrimary link='/projects' content='See my work' />
                <ButtonPrimary link={Resume} content='Download my resume' />
              </div>
            </div>
            <div className="right">

            </div>
          </div>
        </div>
        <TechGrid />
      </section>
    </Layout>
  )
}

export default IndexPage
