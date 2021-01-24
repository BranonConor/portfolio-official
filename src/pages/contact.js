import "aos/dist/aos.css";

import React, {useEffect} from "react"

import AOS from "aos";
import Form from '../components/form'
import Layout from "../components/layout"
import SEO from "../components/seo"
import {motion} from 'framer-motion'

const ContactPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <Layout>
      <SEO title="Contact" />
      <section className='page ContactPage'>
        <div className="two-column">
          <div className="title">
            <motion.h1
              initial={{x: -75}}
              animate={{x: 0}}
              transition={{type: 'spring', duration: 0.5}}
            >
              Contact Me
            </motion.h1>
            <motion.h4 className='subtitle'
              initial={{x: -75}}
              animate={{x: 0}}
              transition={{type: 'spring', duration: 0.7}}
            >
              I'd love to hear from you!
            </motion.h4>
          </div>
          <div className="content">
            <div className="left">
              <Form />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
