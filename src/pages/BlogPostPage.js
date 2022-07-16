import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";
import SEO from "../components/seo";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import BlogPostDetails from "../components/blog/BlogPostDetails";

const BlogPostPage = ({ data }) => {
  const post = data.contentfulBlogPost;
  const {
    author,
    category,
    createdAt,
    body,
    description,
    heroImage,
    tags,
    title,
  } = post;

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data;
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        );
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2>{children}</h2>;
      },
    },
  };

  return (
    <Layout>
      <SEO title={title} />
      <section className="page">
        <StyledBlogPageWrapper>
          <StyledImageWrapper>
            <StyledImage src={heroImage.publicUrl} />
          </StyledImageWrapper>
          <StyledBlogHeader>
            <h1>{title}</h1>
            <h5>{description.description}</h5>
            <BlogPostDetails
              author={author}
              category={category}
              tags={tags}
              createdAt={createdAt}
            />
          </StyledBlogHeader>
          {/* <div>{renderRichText(body.body, options)}</div> */}
        </StyledBlogPageWrapper>
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

const StyledImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  margin: 0 0 16px 0;
  overflow: hidden;
  box-shadow: 0px 4px 15px 0px rgba(196, 130, 235, 0.3);
  position: relative;
`;

const StyledImage = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
`;

const StyledBlogPageWrapper = styled.div`
  max-width: 1200px;
`;
const StyledBlogHeader = styled.div`
  display: flex;
  flex-direction: column;
`;
