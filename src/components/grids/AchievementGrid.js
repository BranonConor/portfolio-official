import './project-card.css';
import 'aos/dist/aos.css';

import React, { useEffect, useState } from 'react';

import AOS from 'aos';
import { ProjectCard } from './ProjectCard';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const AchievementGrid = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	});

	const [projects, setProjects] = useState([
		{
			name: 'Brought a product up to WCAG 2.0 AA Compliance 🎉',
			role: 'Design Technologist',
			description:
				"I recently audited and fixed Color's All of Us platform codebase to bring it to WCAG 2.0 AA compliance!",
			technologies: [
				'ReactJS',
				'Typescript',
				'Material UI',
				'Styled Components',
				'WCAG AA 2.0',
				'Figma',
			],
			demoLink: '',
			codeLink: '',
			animation: 'spring',
			animationTime: 0.3,
			id: 2,
		},
		{
			name: 'Finishing up a Typescript Course 🛠',
			role: 'Software Developer Consultant',
			description:
				"Still working with Colt Steele to bring a highly anticipated Typescript course to life! We're currently tackling finishing touches for release on Udemy this year.",
			technologies: [
				'Typescript',
				'JS',
				'Data Structures',
				'Udemy',
				'ReactJS',
			],
			demoLink: 'https://www.udemy.com/user/coltsteele/',
			codeLink: '',
			animation: 'spring',
			animationTime: 0.4,
			id: 2,
		},
		{
			name: 'Spoke to SDSU Design students about careers in tech! 🧠',
			role: 'Panelist - Design Technology',
			description:
				'SDSU + Friends of Figma, SD were kind enough to have me on as a panelist to share my experience breaking into tech through an unorthodox career path.',
			technologies: [
				'SDSU',
				'Design',
				'Friends of Figma',
				'Design Technology',
				'Tech Career',
				'Community Engagement',
			],
			demoLink:
				'https://www.youtube.com/watch?v=MdwRX0MwtFE&ab_channel=FriendsofFigma%2CSanDiego',
			codeLink: '',
			animation: 'spring',
			animationTime: 0.5,
			id: 3,
		},
		{
			name: 'Started a fullstack rebuild of ListRocket! 🚀',
			role: 'Fullstack Engineer',
			description:
				"I recently started rebuilding the API and redesigning the frontend of a side project I'm building called ListRocket!",
			technologies: [
				'Frontend',
				'Backend',
				'Fullstack',
				'ReactJS',
				'NextJS',
				'Styled Components',
			],
			demoLink: 'https://list-rocket.vercel.app',
			codeLink: 'https://github.com/BranonConor/list-rocket2',
			animation: 'spring',
			animationTime: 0.6,
			id: 4,
		},
	]);

	return (
		<StyledWrapper
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				type: 'spring',
				duration: 2,
			}}>
			<StyledTitle>Recent Achievements</StyledTitle>
			<StyledAchievementsWrapper>
				{projects.map((project) => {
					return (
						<ProjectCard
							name={project.name}
							role={project.role}
							description={project.description}
							technologies={project.technologies}
							demoLink={project.demoLink}
							codeLink={project.codeLink}
							animationType={project.animation}
							animationTime={project.animationTime}
							key={project.id}
						/>
					);
				})}
			</StyledAchievementsWrapper>
		</StyledWrapper>
	);
};

export default AchievementGrid;

const StyledWrapper = styled(motion.div)`
	margin: 64px 0 0 0;
	padding: 16px;
	box-sizing: border-box;
	border-radius: 10px;
	background: linear-gradient(124.41deg, #0072b1 0%, #fd36ab 95.2%);
`;
const StyledTitle = styled.h5`
	color: white;
`;
const StyledAchievementsWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 16px;
	margin: 16px 0 0 0;

	@media only screen and (max-width: 1500px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
	@media only screen and (max-width: 1200px) {
		grid-template-columns: 1fr 1fr;
	}
	@media only screen and (max-width: 850px) {
		grid-template-columns: 1fr;
	}
`;
