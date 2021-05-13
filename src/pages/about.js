import "aos/dist/aos.css";
import './about.css';

import React, {useEffect} from "react"

import AOS from "aos";
import Layout from "../components/layout"
import SEO from "../components/seo"
import SpotifyCard from "../components/hobbies/spotify-card";
import bug from '../images/photography/bug.jpeg'
import harbor from '../images/photography/harbor.jpeg'
import jellybowl from '../images/photography/jellybowl.jpeg'
import mammoth from '../images/photography/mammoth.jpeg'
import matt from '../images/photography/matt.jpeg'
import {motion} from 'framer-motion'
import pismo from '../images/photography/pismo.jpeg'
import rach from '../images/photography/rach.jpeg'
import sd from '../images/photography/sd.jpeg'
import tahoe from '../images/photography/tahoe.jpeg'

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
              initial={{x: -75, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{type: 'spring', duration: 0.6}}
            >
              About Me
            </motion.h1>
            <motion.h4 className='subtitle'
              initial={{x: -75, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{type: 'spring', duration: 0.7}}
            >
              I love people. I love technology.
            </motion.h4>
          </div>
          <div className="content">
            <div className="left">
              <motion.p
                initial={{x: -75, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{type: 'spring', duration: 0.8}}
              >
                My love of people and the human experience is the driving force in my life. That's why I got my degree in neuroscience and spent my first few years out of college as the director of a neuropsychiatric clinic.
              </motion.p>
              <motion.p
                initial={{x: -75, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{type: 'spring', duration: 0.9}}
              >
                As my fascination with technology got the better of me throughout this time, I began to experiment with coding and building websites. I was hooked immediately and since then I've been devoting time each day to learning more and more about software development and design. 
              </motion.p>
              <motion.p
                initial={{x: -75, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{type: 'spring', duration: 1}}
              >
                User experience and front end engineering currently satisfy my neuroscience passion in striving to understand the user and how they may interact with my applications. It also helps feed my appetite for creative work in creating beautiful and intuitive interfaces, and in
                building/maintaining design systems and component libraries. I'm always diving deeper into new technologies (on the front and back end) as well as more computer science fundamentals, and I strive every day to 
                be the best engineer and designer I can be. 
              </motion.p>
            </div>
          </div>
        </div>

        <hr/>

        <div className="two-column">
          <div className="title">
            <motion.h4
              className='subtitle'
              initial={{x: -75, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{type: 'spring', duration: 1.3}}
            >
              I do more than just code.
            </motion.h4>
            <motion.p
                initial={{x: -75, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{type: 'spring', duration: 1.4}}
              >
                Life's too short to not immerse yourself in the hobbies and things you love. Here are some of those things in my life.
              </motion.p>
          </div>
          
          <div className="content">
              <div className="title">
                <div className="card">
                  <motion.h6 className='subtitle-blue'
                    initial={{x: -75, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{type: 'spring', duration: 1.5}}
                  >
                    Photography & Digital Art
                  </motion.h6>
                  <motion.p
                    initial={{x: -75, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{type: 'spring', duration: 1.6}}
                  >
                    I've been doing photography for almost a decade, winning many awards and honors as well as scoring contracts with large companies for collaborations and shoots. Photography has been one of my favorite ways to flex my creative muscles ever since I picked it up!
                  </motion.p>
                </div>
              </div>
          </div>
          <div className="photo-container">
            <img src={bug} alt="Art piece"/>
            <img src={harbor} alt="Art piece"/>
            <img src={matt} alt="Art piece"/>
            <img src={sd} alt="Art piece"/>
            <img src={jellybowl} alt="Art piece"/>
            <img src={mammoth} alt="Art piece"/>
            <img src={pismo} alt="Art piece"/>
            <img src={rach} alt="Art piece"/>
            <img src={tahoe} alt="Art piece"/>
          </div>

          <div className="title">
            <div className="card">
              <motion.h6 className='subtitle-blue'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{type: 'spring', duration: 1.5}}
              >
                Hip Hop / Trap Beat Production
              </motion.h6>
              <motion.p
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{type: 'spring', duration: 1.6}}
              >
                I've been producing hip hop beats since I was in high school - over a decade! I recently released a beat tape album on Spotify
                under my producer name, @PancitPapi (a hearken to my Filipino heritage). Check it out!
              </motion.p>
            </div>
            <SpotifyCard trackId='2Sd57YRcNyJDEEH4tyfBRb'/>
          </div>
          
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
