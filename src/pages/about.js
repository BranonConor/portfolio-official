import "aos/dist/aos.css";

import React, {useEffect} from "react"

import AOS from "aos";
import Layout from "../components/layout"
import SEO from "../components/seo"
import {motion} from 'framer-motion'

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
            <motion.h1
              initial={{x: -75}}
              animate={{x: 0}}
              transition={{type: 'spring', duration: 0.5}}
            >
              About Me
            </motion.h1>
            <motion.h4 className='subtitle'
              initial={{x: -75}}
              animate={{x: 0}}
              transition={{type: 'spring', duration: 0.7}}
            >
              I love people. I love technology.
            </motion.h4>
          </div>
          <div className="content">
            <div className="left">
              <motion.p
                initial={{x: -75}}
                animate={{x: 0}}
                transition={{type: 'spring', duration: 0.8}}
              >
                My love of people and the human experience is the driving force in my life. That's why I got my degree in neuroscience and spent my first few years out of college as the director of a neuropsychiatric clinic.
              </motion.p>
              <motion.p
                initial={{x: -75}}
                animate={{x: 0}}
                transition={{type: 'spring', duration: 0.8}}
              >
                As my fascination with technology got the better of me throughout this time, I began to experiment with coding and building websites.
              </motion.p>
              <motion.h6 className='subtitle-white'
                initial={{x: -75}}
                animate={{x: 0}}
                transition={{type: 'spring', duration: 0.9}}
              >
                I fell in love immediately.
              </motion.h6>
              <motion.p
                initial={{x: -75}}
                animate={{x: 0}}
                transition={{type: 'spring', duration: 1}}
              >
                Over the past few years I've been hunkered down learning everything I can about software development. User experience and front end engineering immediately caught my eye as a point of entry, as I rediscovered my neuroscience 
                passion in striving to understand the user and how they may interact with my applications.
              </motion.p>
            </div>
            <div className="right">
              <motion.p
                initial={{x: -75}}
                animate={{x: 0}}
                transition={{type: 'spring', duration: 1.1}}               
              >
                I've been enjoying my work as a front end engineer by day and I've been having a blast learning more backend technologies by night.
                The world of software engineering is rich with an abundance of paths and tools to learn, and I love waking up every day with a drive to master current technologies and a yearning to learn something new.
              </motion.p>
              <motion.h6 className='subtitle-blue' 
                initial={{x: -75}}
                animate={{x: 0}}
                transition={{type: 'spring', duration: 1.2}}
              >
                Cheers to building tech that improves the human experience.
              </motion.h6>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
