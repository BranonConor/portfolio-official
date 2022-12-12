import CodeIcon from '../icons/code';
import LinkIcon from '../icons/link';
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectCard = (props) => {
	const {
		name,
		role,
		description,
		technologies,
		demoLink,
		codeLink,
		animationType,
		animationTime,
		isDraggable,
	} = props;

	return (
		<StyledWrapper
			initial={{ rotate: 330, scale: 0, opacity: 0 }}
			animate={{
				rotate: 360,
				scale: 1,
				opacity: 1,
			}}
			transition={{
				type: animationType,
				duration: animationTime,
			}}
			drag={isDraggable}
			dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
			whileDrag={{ scale: 0.75 }}>
			<h6>{name}</h6>
			<p className='detail-title'>{role}</p>
			<p className='detail-text'>{description}</p>
			<StyledList>
				{technologies.map((tech) => {
					return (
						<StyledListItem key={`${name}-${tech}`}>
							{tech}
						</StyledListItem>
					);
				})}
			</StyledList>

			<StyledLinksWrapper>
				<StyledLink
					href={demoLink}
					target='_blank'
					rel='noreferrer noopenner'>
					<LinkIcon />
				</StyledLink>
				<a href={codeLink} target='_blank' rel='noreferrer noopenner'>
					<CodeIcon />
				</a>
			</StyledLinksWrapper>
		</StyledWrapper>
	);
};

const StyledWrapper = styled(motion.div)(
	({ isDraggable }) =>
		`
	border-radius: 10px;
	z-index: 2;
	position: relative;
	background: #111111;
	padding: 16px 16px 66px 16px;
	box-sizing: border-box;
	box-shadow: 0px 4px 15px 0px rgba(196, 130, 235, 0.3);
	height: 100%;
	width: 100%;

	&:hover {
		background: rgba(10, 10, 10, 0.4);
		cursor: ${isDraggable ? 'grab' : 'initial'};
	}
	&:hover .links {
		background: var(--dark-bg);
	}
`
);
const StyledList = styled.ul`
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	padding: 0;
	height: auto;
`;
const StyledListItem = styled.li`
	width: auto;
	padding: 4px 8px;
	background: var(--secondary-accent);
	border-radius: 10px;
	margin: 4px;
	transition: 0.1s ease all;

	&:hover {
		opacity: 0.5;
	}
`;
const StyledLinksWrapper = styled.div`
	box-sizing: border-box;
	width: 100%;
	background: #222222;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	display: flex;
	justify-content: space-around;
	overflow: hidden;
	height: 50px;
	position: absolute;
	bottom: 0;
	left: 0;

	a {
		box-sizing: border-box;
		width: 50%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
const StyledLink = styled.a``;
