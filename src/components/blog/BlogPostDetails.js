import React from 'react';
import styled from 'styled-components';
import ChipButton from '../buttons/ChipButton';

const BlogPostDetails = (props) => {
	const { author, category, createdAt, tags } = props;

	return (
		<StyledDetailsWrapper>
			<StyledP>
				By:{' '}
				<ChipButton
					animation='spring'
					animationTime={0.1}
					content={`${author.name}, ${createdAt}`}
					isTertiary
				/>
			</StyledP>
			<StyledP>
				Category:
				<ChipButton
					animation='spring'
					animationTime={0.1}
					content={category}
					isTertiary
				/>
			</StyledP>
			<StyledP>
				Tags:
				<StyledTagWrapper>
					{tags.map((tag, index) => (
						<ChipButton
							animation='spring'
							animationTime={Number(`0.${0 + index}`)}
							content={tag}
							isTertiary
						/>
					))}
				</StyledTagWrapper>
			</StyledP>
		</StyledDetailsWrapper>
	);
};

export default BlogPostDetails;

const StyledDetailsWrapper = styled.div`
	width: auto;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 16px 0;
	padding: 16px 32px;
	background: linear-gradient(124.41deg, #0072b1 0%, #fd36ab 95.2%);
	border-radius: 10px;
	box-shadow: 0px 4px 15px 0px rgba(196, 130, 235, 0.3);

	@media only screen and (max-width: 1200px) {
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}
`;

const StyledP = styled.p`
	width: auto;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledTagWrapper = styled.div`
	width: auto;
	max-width: 400px;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
`;
