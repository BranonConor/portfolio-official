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
              initial={{x: -75, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{type: 'spring', duration: 0.6}}
            >
              Hi, I'm Branon<span>👋🏼</span>
            </motion.h1>
            <motion.h4 className='subtitle'
              initial={{x: -75, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{type: 'spring', duration: 0.8}}
            >
              I'm a software engineer and UX designer.
            </motion.h4>
          </div>
          <div className="content">
            <div className="left">
              <motion.p className='subtitle-white'
                initial={{x: -75, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{type: 'spring', duration: 1}}
              >
                With a degree in behavioral neuroscience, a creative eye for stunning and ergonomic UX/UI design,
                and a powerful command of modern technologies to build quality interfaces and experiences, my strengths
                lie at the intersection of technology and people.
              </motion.p>
              <motion.p className='subtitle-white'
                initial={{x: -75, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{type: 'spring', duration: 1.1}}
              >
                My passion is building intuitive, efficient software that delights users and propels businesses forward.
              </motion.p>
              <motion.div className='my-work'
                initial={{x: -75, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{type: 'spring', duration: 1.2}}
              >
                <ButtonPrimary link='/projects' content='See my work' />
                <ButtonPrimary link={Resume} content='Download my resume' />
              </motion.div>
            </div>
          </div>
        </div>
        <TechGrid />
      </section>
    </Layout>
  )
}

export default IndexPage
