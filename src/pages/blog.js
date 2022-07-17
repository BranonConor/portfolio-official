import "aos/dist/aos.css";
import "./projects.css";

import React, { useEffect } from "react";

import AOS from "aos";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { motion } from "framer-motion";
import BlogGrid from "../components/blog/BlogGrid";

const BlogPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <Layout>
      <SEO title="Blog" />
      <section className="page BlogPage">
        <div className="two-column">
          <div className="title">
            <motion.h1
              initial={{ x: -75, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
            >
              Blog
            </motion.h1>
            <motion.h4
              className="subtitle"
              initial={{ x: -75, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
            >
              Thoughts, wins, projects, and more. 😇
            </motion.h4>
            <BlogGrid />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
