import React from 'react';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import BlogTitle from '../components/blog/BlogTitle';
import styled from 'styled-components';

export const options = {
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

const StyledBlogImage = styled(GatsbyImage)`
	width: 700px;
	border-radius: 10px;
	box-shadow: 0px 4px 15px 0px rgba(196, 130, 235, 0.3);

	@media only screen and (max-width: 700px) {
		width: 100%;
	}
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
