import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";

const BlogPostPage = ({ data }) => {
  const post = data.contentfulBlogPost;
  const {
    author,
    body,
    category,
    createdAt,
    description,
    heroImage,
    tags,
    title,
  } = post;

  return (
    <Layout>
      <SEO title={title} />
      <section className="page">
        <StyledImage src={heroImage.publicUrl} />
        <h1>{title}</h1>
        <h6>{description.description}</h6>
        <p>{author.name}</p>
        <hr />
        {/* <div dangerouslySetInnerHTML={{ __html: body.body }} /> */}
      </section>
    </Layout>
  );
};

export default BlogPostPage;

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      author {
        name
      }
      body {
        body
      }
      category
      createdAt(formatString: "MMMM YYYY")
      description {
        description
      }
      heroImage {
        publicUrl
      }
      tags
      title
    }
  }
`;

const StyledImage = styled.img`
  height: 400px;
`;
