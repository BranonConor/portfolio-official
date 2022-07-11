import styled from "styled-components";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const BlogGrid = () => {
  const data = useStaticQuery(graphql`
    query BlogPosts {
      allContentfulBlogPost {
        edges {
          node {
            id
            slug
            title
            description {
              description
            }
            publishDate(formatString: "MMMM YYYY")
          }
        }
      }
    }
  `);

  return (
    <StyledContainer>
      {data.allContentfulBlogPost.edges.map((node) => {
        const blogPost = node.node;
        return (
          <div>
            <h3>{blogPost.title}</h3>
            <p>{blogPost.description.description}</p>
          </div>
        );
      })}
    </StyledContainer>
  );
};

export default BlogGrid;

const StyledContainer = styled.div`
  width: 100%;
  padding: 32px;
`;
