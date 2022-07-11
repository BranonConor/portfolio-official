import styled from "styled-components";
import React from "react";
import { useAllBlogPosts } from "../../hooks/useAllBlogPosts";
import { motion } from "framer-motion";

const BlogGrid = () => {
  const posts = useAllBlogPosts();

  return (
    <StyledContainer>
      {posts.map((node, index) => {
        const { node: post } = node;
        return (
          <StyledCardWrapper
            initial={{ x: -75, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              duration: Number(`0.${5 + index * 2}`),
            }}
          >
            <StyledImageWrapper>
              <StyledImage src={post.heroImage.publicUrl} />
            </StyledImageWrapper>
            <StyledCardTitle>{post.title}</StyledCardTitle>
            <p>{post.description.description}</p>
          </StyledCardWrapper>
        );
      })}
    </StyledContainer>
  );
};

export default BlogGrid;

const StyledContainer = styled.div`
  width: 100%;
  padding: 16px 0;
  display: flex;
  flex-wrap: wrap;
`;

const StyledCardWrapper = styled(motion.div)`
  width: 350px;
  min-height: 400px;
  background: #111111;
  padding: 16px;
  margin: 16px 32px 16px 0;
  border-radius: 10px;

  &:hover {
    background: linear-gradient(124.41deg, #0072b1 0%, #fd36ab 95.2%);
    cursor: pointer;

    h5 {
      color: white;
      border-left: 2px solid white;
    }

    img {
      transform: scale(1.05);
    }
  }
`;

const StyledCardTitle = styled.h5`
  font-family: "Comfortaa", sans-serif;
  font-weight: bold;
  width: auto;
  color: #189ee6;
  border-left: 2px solid #189ee6;
  padding: 0px 0px 0px 16px;
  margin: 8px 0px 4px 0;
`;
const StyledImageWrapper = styled.div`
  width: 100%;
  height: 50%;
  border-radius: 10px;
  margin: 0 0 16px 0;
  overflow: hidden;
`;
const StyledImage = styled.img`
  width: 100%;
  transition: 0.4s ease all;
`;
