import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';
import SEO from '../components/seo';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import BlogPostDetails from '../components/blog/BlogPostDetails';
import BlogTitle from '../components/blog/BlogTitle';
import { motion } from 'framer-motion';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ButtonPrimary from '../components/buttons/button-primary';

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
			[MARKS.BOLD]: (text) => <b className='font-bold'>{text}</b>,
		},
		renderNode: {
			[INLINES.HYPERLINK]: (node, children) => {
				const { uri } = node.data;
				return <StyledLink href={uri}>{children}</StyledLink>;
			},
			[BLOCKS.HEADING_2]: (node, children) => {
				return <BlogTitle component='h2'>{children}</BlogTitle>;
			},
			[BLOCKS.HEADING_3]: (node, children) => {
				return <BlogTitle component='h3'>{children}</BlogTitle>;
			},
			[BLOCKS.HEADING_4]: (node, children) => {
				return <BlogTitle component='h4'>{children}</BlogTitle>;
			},
			[BLOCKS.HEADING_5]: (node, children) => {
				return <BlogTitle component='h5'>{children}</BlogTitle>;
			},
			[BLOCKS.HEADING_6]: (node, children) => {
				return <BlogTitle component='h6'>{children}</BlogTitle>;
			},
			[BLOCKS.QUOTE]: (node, children) => {
				return <StyledQuote>{children}</StyledQuote>;
			},
			[BLOCKS.OL_LIST]: (node, children) => {
				return <StyledOL>{children}</StyledOL>;
			},
			[BLOCKS.UL_LIST]: (node, children) => {
				return <StyledUL>{children}</StyledUL>;
			},
			[BLOCKS.EMBEDDED_ASSET]: (node) => {
				const { gatsbyImageData, description } = node.data.target;
				return (
					<StyledBlogImageWrapper>
						<StyledBlogImage
							image={getImage(gatsbyImageData)}
							alt={description}
						/>
					</StyledBlogImageWrapper>
				);
			},
		},
	};

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
							author={author}
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
			author {
				name
			}
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

const StyledBlogImageWrapper = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 64px 0;

	@media only screen and (max-width: 700px) {
		margin: 32px 0;
	}
`;

const StyledBlogImage = styled(GatsbyImage)`
	width: 700px;
	border-radius: 10px;
	box-shadow: 0px 4px 15px 0px rgba(196, 130, 235, 0.3);

	@media only screen and (max-width: 700px) {
		width: 100%;
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

const StyledLink = styled.a`
	display: inline;
	width: auto;
	height: auto;
	padding: 0;
	color: #0080c7;
	text-decoration: underline;
	position: relative;
	overflow: default;
	transition: 0s ease all;

	&:hover {
		color: #ff0096;
		box-shadow: none;
	}
`;

const StyledQuote = styled.div`
	margin: 32px 0;
	display: flex;
	align-items: center;
	justify-content: center;

	@media only screen and (max-width: 700px) {
		width: 100%;
	}

	p {
		padding: 16px;
		border-radius: 10px;
		background: #111111;
		box-shadow: 0px 4px 15px 0px rgba(196, 130, 235, 0.3);
		width: 700px;
		font-style: italic;
		box-sizing: border-box;
	}
`;
const StyledUL = styled.ul`
	margin: 0 0 16px 0;
	padding: 16px 0 16px 16px;
	box-sizing: border-box;

	li {
		width: 100%;
		box-sizing: border-box;

		p {
			width: 90%;
			box-sizing: border-box;
		}
	}
`;
const StyledOL = styled.ol`
	margin: 0 0 16px 0;
	padding: 16px 0 16px 16px;
	box-sizing: border-box;

	li {
		width: 100%;
		box-sizing: border-box;

		p {
			width: 90%;
			box-sizing: border-box;
		}
	}
`;

const StyledArticle = styled.article`
	padding: 64px 0 16px 0;
`;
