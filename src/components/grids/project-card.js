import './project-card.css';

import CodeIcon from '../icons/code';
import LinkIcon from '../icons/link';
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ProjectCard = (props) => {
	const {
		name,
		role,
		description,
		technologies,
		demoLink,
		codeLink,
		animationType,
		animationTime,
	} = props;

	return (
		<StyledWrapper
			className='ProjectCard'
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
			drag
			dragConstraints={{ left: 0, right: 0, bottom: 0, top: 0 }}
			whileDrag={{ scale: 0.75 }}>
			<div className='card-content'>
				<h6>{name}</h6>
				<p className='detail-title'>{role}</p>
				<p className='detail-text'>{description}</p>
				<>
					{technologies.map((tech) => {
						return (
							<li className='detail-text' key={`${name}-${tech}`}>
								{tech}
							</li>
						);
					})}
				</>
			</div>
			<div className='links'>
				<a
					href={demoLink}
					target='_blank'
					rel='noreferrer noopenner'
					className={demoLink ? '' : 'disabled-link'}>
					<LinkIcon />
				</a>
				<a
					href={codeLink}
					target='_blank'
					rel='noreferrer noopenner'
					className={codeLink ? '' : 'disabled-link'}>
					<CodeIcon />
				</a>
			</div>
		</StyledWrapper>
	);
};

export default ProjectCard;

const StyledWrapper = styled.div`
	border-radius: 10px;
	z-index: 2;
	position: relative;
	transition: 0.15s;
	background: #111111;
	padding: 16px 16px 66px 16px;
	box-sizing: border-box;

	&:hover {
		box-shadow: none;
		background: rgba(10, 10, 10, 0.4);
	}
	&:hover .links {
		background: var(--dark-bg);
	}
`;
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
