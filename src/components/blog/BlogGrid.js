import styled from 'styled-components';
import React from 'react';
import { useAllBlogPosts } from '../../hooks/useAllBlogPosts';
import BlogCard from './BlogCard';

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
						date={post.publishDate}
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
	box-sizing: border-box;
	display: grid;
	grid-gap: 24px;
	grid-template-columns: 1fr 1fr 1fr 1fr;

	@media only screen and (max-width: 1600px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
	@media only screen and (max-width: 1300px) {
		grid-template-columns: 1fr 1fr;
	}
	@media only screen and (max-width: 900px) {
		grid-template-columns: 1fr;
	}
`;
