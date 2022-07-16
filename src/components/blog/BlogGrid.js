import styled from "styled-components";
import React from "react";
import { useAllBlogPosts } from "../../hooks/useAllBlogPosts";
import BlogCard from "./BlogCard";

const BlogGrid = () => {
  const posts = useAllBlogPosts();

  return (
    <StyledContainer>
      {posts.map((node, index) => {
        const { node: post } = node;
        return (
          <BlogCard
            animationTime={Number(`0.${5 + index * 2}`)}
            imageUrl={post.heroImage.publicUrl}
            title={post.title}
            description={post.description.description}
            link={`${post.slug}`}
          />
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
