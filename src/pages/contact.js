import "aos/dist/aos.css";

import React, {useEffect} from "react"

import AOS from "aos";
import Form from '../components/form'
import Layout from "../components/layout"
import SEO from "../components/seo"

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
            <h1 data-aos='fade-right' data-aos-duration='300'>Contact Me</h1>
            <h4 className='subtitle' data-aos='fade-right' data-aos-duration='500'>I'd love to hear from you!</h4>
          </div>
          <div className="content">
            <div className="left">
              <Form />
            </div>
            <div className="right">
              
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
