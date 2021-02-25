import "aos/dist/aos.css";
import './about.css';

import React, {useEffect} from "react"

import AOS from "aos";
import Layout from "../components/layout"
import SEO from "../components/seo"
import SpotifyCard from "../components/hobbies/spotify-card";
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
                As my fascination with technology got the better of me throughout this time, I began to experiment with coding and building websites. I was hooked immediately.
              </motion.p>
              <motion.p
                initial={{x: -75, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{type: 'spring', duration: 1}}
              >
                Over the past few years I've been hunkered down learning everything I can about software development. User experience and front end engineering immediately caught my eye as a point of entry, as I rediscovered my neuroscience 
                passion in striving to understand the user and how they may interact with my applications.
              </motion.p>
            </div>
            <div className="right">
              <motion.p
                initial={{x: -75, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{type: 'spring', duration: 1.0}}               
              >
                I haven't stopped at front end - I like to devote time every week to studying fullstack development, data structures, algorithms, and building projects as well. I love waking up every day with a 
                drive to master my current skills and a yearning to learn something new. 
              </motion.p>
              <motion.h6 className='subtitle-blue' 
                initial={{x: -75, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{type: 'spring', duration: 1.2}}
              >
                Cheers to building tech that improves the human experience.
              </motion.h6>
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
            <div className="left">
              <div className="card">
              <motion.h6 className='subtitle-blue' 
                initial={{x: -75, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{type: 'spring', duration: 1.5}}
              >
                Hip Hop / Trap Beat Production
              </motion.h6>
                <motion.p
                  initial={{x: -75, opacity: 0}}
                  animate={{x: 0, opacity: 1}}
                  transition={{type: 'spring', duration: 1.6}}
                >
                  I've been producing hip hop beats since I was in high school - over a decade! I recently released a beat tape album on Spotify
                  under my producer name, @PancitPapi (a hearken to my Filipino heritage). Check out a few of my personal favorites:
                </motion.p>
              </div>
            </div>
            <div className="right">
              <iframe className='follow-widget' src="https://open.spotify.com/follow/1/?uri=spotify:artist:3JD3vssfV4KCBW4FJQlaBZ&size=detail&theme=light" width="300" height="56" scrolling="no" frameborder="0" style={{border:'none', overflow:'hidden'}} allowTransparency="true"></iframe>
            </div>
          </div>
          <div className="music-wrapper">
            <SpotifyCard trackId='4rXEe25PBDQCaair3QYNmT'/>
            <SpotifyCard trackId='7swPZzrJuA7qNd8BhIiooz'/>
            <SpotifyCard trackId='2eKVyWO7qQXRiAlaS2xJKx'/>
          </div>

          
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
