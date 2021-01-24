import "aos/dist/aos.css";

import React, {useEffect} from "react"

import AOS from "aos";
import Layout from "../components/layout"
import ProjectGrid from "../components/grids/project-grid";
import SEO from "../components/seo"
import { motion } from 'framer-motion'

const ProjectsPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <Layout>
      <SEO title="Projects" />
      <section className='page ProjectsPage'>
        <div className="two-column">
          <div className="title">
            <motion.h1
              initial={{x: -75, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{type: 'spring', duration: 0.6}}
            >
              Projects
            </motion.h1>
            <motion.h4 className='subtitle'
              initial={{x: -75, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{type: 'spring', duration: 0.8}}
            >
              Here are some recent projects I'm proud of.
            </motion.h4>
          </div>
        </div>
        <ProjectGrid />
      </section>
    </Layout>
  )
}

export default ProjectsPage
