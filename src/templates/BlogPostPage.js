import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';
import SEO from '../components/seo';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import BlogPostDetails from '../components/blog/BlogPostDetails';
import BlogTitle from '../components/blog/BlogTitle';
import { motion } from 'framer-motion';
import ButtonPrimary from '../components/buttons/button-primary';
import { options } from '../utils/richTextOptions';

const BlogPostPage = ({ data }) => {
	const post = data.contentfulBlogPost;
	const { category, createdAt, body, description, heroImage, tags, title } =
		post;

	return (
		<Layout>
			<SEO title={title} />
			<StyledSection>
				<StyledBlogPageWrapper>
					<StyledImageWrapper
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ type: 'spring', duration: 2.5 }}>
						<StyledImage src={heroImage.publicUrl} />
					</StyledImageWrapper>
					<StyledBlogHeader>
						<BlogTitle component='h1'>{title}</BlogTitle>
						<p>{description.description}</p>
						<BlogPostDetails
							category={category}
							tags={tags}
							createdAt={createdAt}
						/>
					</StyledBlogHeader>
					<StyledArticle>
						{renderRichText(body, options)}
					</StyledArticle>
					<ButtonPrimary content='👈 Back to Blog' link='/blog' />
				</StyledBlogPageWrapper>
			</StyledSection>
		</Layout>
	);
};

export default BlogPostPage;

export const query = graphql`
	query ($slug: String!) {
		contentfulBlogPost(slug: { eq: $slug }) {
			body {
				raw
				references {
					... on ContentfulAsset {
						contentful_id
						__typename
						gatsbyImageData
					}
				}
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

const StyledSection = styled.div`
	width: 100%;
	padding: 64px 15%;
	box-sizing: border-box;
	display: flex;
	justify-content: center;

	@media only screen and (max-width: 1400px) {
		padding: 64px 64px 64px 128px;
	}
	@media only screen and (max-width: 600px) {
		padding: 98px 16px;
	}
`;
const StyledImageWrapper = styled(motion.div)`
	width: 100%;
	height: 400px;
	border-radius: 10px;
	margin: 0 0 16px 0;
	overflow: hidden;
	box-shadow: 0px 4px 15px 0px rgba(196, 130, 235, 0.3);
	position: relative;

	@media only screen and (max-width: 800px) {
		height: 250px;
	}
`;
const StyledImage = styled.img`
	width: 100%;
	position: absolute;
	top: 0;

	@media only screen and (max-width: 450px) {
		width: auto;
		min-width: 100%;
		height: 100%;
	}
`;
const StyledBlogPageWrapper = styled.div`
	max-width: 1100px;

	@media only screen and (max-width: 900px) {
		width: 100%;
	}
`;
const StyledBlogHeader = styled.div`
	display: flex;
	flex-direction: column;
`;
const StyledArticle = styled.article`
	padding: 64px 0 16px 0;
`;
