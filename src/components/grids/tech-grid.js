import 'aos/dist/aos.css';
import './tech-grid.css';

import React, { useEffect } from 'react';

import AOS from 'aos';
import BootstrapIcon from '../icons/bootstrap';
import CSSIcon from '../icons/css';
import ExpressIcon from '../icons/express';
import FigmaIcon from '../icons/figma';
import GatsbyIcon from '../icons/gatsby';
import GitIcon from '../icons/git';
import GithubIcon from '../icons/github-logo';
import HTMLIcon from '../icons/html';
import HerokuIcon from '../icons/heroku';
import JSIcon from '../icons/js';
import MongoIcon from '../icons/mongo';
import NPMIcon from '../icons/npm';
import NetlifyIcon from '../icons/netlify';
import NodeIcon from '../icons/node';
import ReactIcon from '../icons/react';
import styledComponents from '../../images/styled-components.svg';
import graphQl from '../../images/graphql.svg';
import aws from '../../images/aws.svg';
import ts from '../../images/ts.svg';
import sass from '../../images/sass.svg';
import next from '../../images/next.svg';
import postgres from '../../images/postgres.svg';
import docker from '../../images/docker.svg';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const TechGrid = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	});
	const logos = [
		{
			svg: <HTMLIcon />,
			animationTime: 0.1,
		},
		{
			svg: <CSSIcon />,
			animationTime: 0.2,
		},
		{
			svg: <JSIcon />,
			animationTime: 0.3,
		},
		{
			svg: <img src={ts} className='icon' />,
			animationTime: 0.4,
		},
		{
			svg: <ReactIcon />,
			animationTime: 0.5,
		},
		{
			svg: <GatsbyIcon />,
			animationTime: 0.6,
		},
		{
			svg: <img src={next} className='icon' />,
			animationTime: 0.7,
		},
		{
			svg: <BootstrapIcon />,
			animationTime: 0.8,
		},
		{
			svg: <img src={sass} className='icon' />,
			animationTime: 0.9,
		},
		{
			svg: <img src={styledComponents} className='icon' />,
			animationTime: 1,
		},
		{
			svg: <img src={graphQl} className='icon' />,
			animationTime: 1.1,
		},
		{
			svg: <FigmaIcon />,
			animationTime: 1.2,
		},
		{
			svg: <img src={aws} className='icon' />,
			animationTime: 1.3,
		},
		{
			svg: <NodeIcon />,
			animationTime: 1.4,
		},
		{
			svg: <ExpressIcon />,
			animationTime: 1.5,
		},
		{
			svg: <MongoIcon />,
			animationTime: 1.6,
		},
		{
			svg: <img src={postgres} className='icon' />,
			animationTime: 1.7,
		},
		{
			svg: <img src={docker} className='icon' />,
			animationTime: 1.8,
		},
		{
			svg: <GitIcon />,
			animationTime: 1.9,
		},
		{
			svg: <GithubIcon />,
			animationTime: 2,
		},
		{
			svg: <NPMIcon />,
			animationTime: 2.1,
		},
		{
			svg: <NetlifyIcon />,
			animationTime: 2.2,
		},
		{
			svg: <HerokuIcon />,
			animationTime: 2.3,
		},
	];
	return (
		<StyledWrapper
			className='TechGrid'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				type: 'spring',
				duration: 2,
			}}>
			<h5>My tools and tech</h5>
			<StyledLogosWrapper>
				{logos.map((logo) => {
					return (
						<StyledLogo
							initial={{ rotate: 270, scale: 0, opacity: 0 }}
							animate={{
								rotate: 360,
								scale: 1,
								opacity: 1,
							}}
							transition={{
								type: 'spring',
								duration: logo.animationTime,
							}}
							key={logo.animationTime}>
							{logo.svg}
						</StyledLogo>
					);
				})}
			</StyledLogosWrapper>
		</StyledWrapper>
	);
};

export default TechGrid;

const StyledWrapper = styled.div`
	margin: 64px 0 32px 0;
	padding: 16px;
	box-sizing: border-box;
	background: var(--dark-bg);
	border-radius: 10px;
	box-shadow: vaR(--nav-shadow);
`;
const StyledLogosWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 16px 0 0 0;
`;
const StyledLogo = styled(motion.div)`
	margin: 16px 32px 16px 0;

	svg,
	img {
		width: 50px;
		height: 50px;
		background: rgba(250, 250, 250, 0.1);
		border-radius: 10px;
		padding: 8px;

		@media only screen and (max-width: 768px) {
			width: 32px;
			height: 32px;
		}
	}
`;
