import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ButtonPrimary from '../buttons/button-primary';

const BlogCard = (props) => {
	const { animationTime, imageUrl, title, description, link, date } = props;

	return (
		<StyledCardWrapper
			initial={{ x: -75, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{
				type: 'spring',
				duration: animationTime,
			}}>
			<StyledContentWrapper>
				<StyledImageWrapper>
					<StyledImage src={imageUrl} />
				</StyledImageWrapper>
				<StyledCardTitle>{title}</StyledCardTitle>
				<StyledSpan>{date}</StyledSpan>
				<p>{description}</p>
			</StyledContentWrapper>
			<ButtonPrimary content='Read More' link={`/blog/${link}`} />
		</StyledCardWrapper>
	);
};

export default BlogCard;

const StyledCardWrapper = styled(motion.div)`
	background: #111111;
	padding: 16px;
	box-sizing: border-box;
	border-radius: 10px;
	box-shadow: 0px 4px 15px 0px rgba(196, 130, 235, 0.3);
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	&:hover {
		img {
			transform: scale(1.1);
		}
	}
	@media only screen and (max-width: 768px) {
		width: 100%;

		p {
			display: none;
		}
	}
`;
const StyledContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
`;

const StyledCardTitle = styled.h5`
	font-family: 'Comfortaa', sans-serif;
	font-weight: bold;
	width: auto;
	color: #189ee6;
	border-left: 2px solid #189ee6;
	padding: 0px 0px 0px 16px;
	margin: 8px 0px 4px 0;
`;
const StyledImageWrapper = styled.div`
	width: 100%;
	height: 200px;
	border-radius: 10px;
	margin: 0 0 16px 0;
	overflow: hidden;

	@media only screen and (max-width: 768px) {
		height: 50%;
	}
`;
const StyledImage = styled.img`
	width: 100%;
	min-height: 100%;
	transition: 0.25s ease all;
`;
const StyledSpan = styled.span`
	width: auto;
	padding: 16px 0 8px 0;
	font-weight: bold;
	letter-spacing: 1.5px;
`;
