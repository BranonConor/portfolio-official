import 'aos/dist/aos.css';

import React, { useEffect } from 'react';

import AOS from 'aos';
import { ProjectCard } from './ProjectCard';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useAccomplishments } from '../../hooks/useAccomplishments';

const AchievementGrid = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	});

	const achievements = useAccomplishments();

	return (
		<StyledWrapper
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				type: 'spring',
				duration: 2,
			}}>
			<StyledTitle>What's New</StyledTitle>
			<StyledAchievementsWrapper>
				{achievements.map(({ node: achievement }, index) => {
					return (
						<ProjectCard
							name={achievement.title}
							role={achievement.role}
							description={achievement.description.description}
							technologies={achievement.technologies}
							demoLink={achievement.demoLink}
							codeLink={achievement.codeLink}
							animationType={achievement.animationType}
							animationTime={Number(`0.${3 + index * 2}`)}
							key={achievement.id}
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
	width: 100%;

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
