import "aos/dist/aos.css";

import React, {useEffect} from "react"

import AOS from "aos";
import Layout from "../components/layout"
import ProjectGrid from "../components/grids/project-grid";
import SEO from "../components/seo"

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
            <h1 data-aos='fade-right' data-aos-duration='300'>Projects</h1>
            <h4 className='subtitle' data-aos='fade-right' data-aos-duration='500'>
              Here are some recent projects I'm proud of.
            </h4>
          </div>
        </div>
        <ProjectGrid />
      </section>
    </Layout>
  )
}

export default ProjectsPage
