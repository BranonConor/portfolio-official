import React, { useState } from 'react';

import CharterRebrandingDocs from '../documentation/charter-rebranding';
import CharterWebsiteDocs from '../documentation/charter-website';
import ClosetCastDocs from '../documentation/closet-cast';
import CovidDashDocs from '../documentation/coronavirus-dashboard';
import { DndContext } from '@dnd-kit/core';
import Draggable from './draggable';
import Droppable from './droppable';
import TheraMindDocs from '../documentation/theramind';
import TrashIcon from '../icons/trash';
import UnifyDocs from '../documentation/unify';
import YelpCampDocs from '../documentation/yelp-camp';
import styled from 'styled-components';
import { ProjectCard } from './ProjectCard';

const ProjectGrid = () => {
	const [projects, setProjects] = useState([
		{
			name: 'Coronavirus Dashboard',
			role: 'Fullstack Engineer',
			description:
				'In light of the COVID pandemic, I wanted to provide a user-friendly, intuitive dashboard to help people stay informed on latest coronavirus updates.',
			technologies: [
				'HTML',
				'CSS',
				'JS',
				'NodeJS',
				'Express',
				'Covid19API',
				'NPM',
				'EJS',
				'Heroku',
				'Git/Github',
			],
			demoLink: 'http://dash-4-coronavirus.herokuapp.com/',
			codeLink: 'https://github.com/BranonConor/corona-dash',
			animation: 'spring',
			animationTime: 0.2,
			docs: <CovidDashDocs />,
			id: 1,
		},
		{
			name: 'Charter Healthcare Group',
			role: 'UX Engineer & Designer',
			description:
				'After creating the UNIFY Design System, I designed and engineered a brand new corporate website for Charter healthcare Group.',
			technologies: [
				'HTML',
				'CSS',
				'JS',
				'React',
				'NodeJS',
				'NPM',
				'Netlify',
				'Git/Github',
			],
			demoLink: 'https://charter-official-prototype.netlify.app/',
			codeLink: null,
			animation: 'spring',
			animationTime: 0.3,
			docs: <CharterWebsiteDocs />,
			id: 2,
		},
		{
			name: 'UNIFY Design System',
			role: 'UX Engineer & Designer',
			description:
				'I created a componentized design system from scratch to unify UX/UI across software projects, wrapped up in nice web app with code and design documentation.',
			technologies: [
				'HTML',
				'CSS',
				'JS',
				'React',
				'NodeJS',
				'NPM',
				'Figma',
				'Netlify',
				'Git/Github',
			],
			demoLink: 'https://unifydesign.netlify.app/',
			codeLink: null,
			animation: 'spring',
			animationTime: 0.4,
			docs: <UnifyDocs />,
			id: 3,
		},
		{
			name: 'YelpCamp',
			role: 'Fullstack Dev Student',
			description:
				'I built a full-stack CRUD app with authentication, user profiles, comments, reviews, etc. for campsites as a bootcamp project.',
			technologies: [
				'HTML',
				'CSS',
				'JS',
				'NodeJS',
				'NPM',
				'Express',
				'MongoDB',
				'Mongoose',
				'EJS',
				'PassportJS',
				'Heroku',
				'Git/Github',
				'Cloudinary API',
				'Mapbox API',
			],
			demoLink: 'http://branon-yelp-camp.herokuapp.com/',
			codeLink: 'https://github.com/BranonConor/yelpcamp',
			animation: 'spring',
			animationTime: 0.5,
			docs: <YelpCampDocs />,
			id: 4,
		},
		{
			name: 'ClosetCast',
			role: 'Fullstack Engineer & Designer',
			description:
				'I built a web app that programmatically gives outfit suggestions based on the weather in your location.',
			technologies: [
				'HTML',
				'CSS',
				'JS',
				'NodeJS',
				'ExpressJS',
				'WeatherAPI',
				'EJS',
				'NPM',
				'Git/Github',
			],
			demoLink: 'https://closetcast.herokuapp.com',
			codeLink: 'https://github.com/BranonConor/weather-app',
			animation: 'spring',
			animationTime: 0.6,
			docs: <ClosetCastDocs />,
			id: 5,
		},
		{
			name: 'Charter Logo Redesign',
			role: 'UX Designer & Creative Lead',
			description:
				'I redesigned the logo and company brand for Charter Healthcare Group, a large healthcare company in southern California.',
			technologies: ['Figma', 'Photoshop', 'Illustrator'],
			demoLink: 'https://unifydesign.netlify.app/logos/',
			codeLink: null,
			animation: 'spring',
			animationTime: 0.7,
			docs: <CharterRebrandingDocs />,
			id: 6,
		},
		{
			name: 'TheraMind Centers',
			role: 'Web Developer/Designer',
			description:
				'I worked with a UX Designer as the technical lead to create a series of new, beautiful websites with intuitive CMS solutions for the TheraMind clinics.',
			technologies: [
				'HTML',
				'CSS',
				'JS',
				'HexoJS',
				'Wordpress',
				'Kinsta',
				'Git/Github',
			],
			demoLink: 'https://theramind-sb.com/',
			codeLink: null,
			animation: 'spring',
			animationTime: 0.8,
			docs: <TheraMindDocs />,
			id: 7,
		},
	]);

	//State for sensing when something is dropped into a droppable
	const [isDropped, setIsDropped] = useState(false);
	const [activeId, setActiveId] = useState(0);
	const [activeDocs, setActiveDocs] = useState(false);

	//Method for clearing active project when done
	const handleDelete = (event) => {
		event.preventDefault();
		setIsDropped(false);
		//Set the active project to the id of whatever was dropped into the target zone
		setActiveId(null);
		//Set the docs to appear for that project
		setActiveDocs(false);
	};

	//Render a project card up in the target drop zone when a project is dropped up there
	const showActiveProject = (id) => {
		return (
			<>
				<ProjectCard
					name={projects[id - 1].name}
					role={projects[id - 1].role}
					description={projects[id - 1].description}
					technologies={projects[id - 1].technologies}
					demoLink={projects[id - 1].demoLink}
					codeLink={projects[id - 1].codeLink}
					animationType={projects[id - 1].animation}
					animationTime={0.25}
					style={{ width: '100%' }}
				/>
				<IconWrapper onClick={handleDelete}>
					<TrashIcon />
				</IconWrapper>
			</>
		);
	};
	const showActiveDocs = (id) => {
		return projects[id - 1].docs;
	};

	//Method for handling the drags within DND Context component
	const handleDragEnd = (event) => {
		if (event.over && event.over.id === 'droppable') {
			setIsDropped(true);
		}
		//Set the active project to the id of whatever was dropped into the target zone
		setActiveId(event.active.id);
		//Set the docs to appear for that project
		setActiveDocs(true);
	};

	return (
		<DndContext onDragEnd={handleDragEnd}>
			<div>
				<Droppable>
					<StyledActiveProjectWrapper>
						{isDropped && activeId ? (
							showActiveProject(activeId)
						) : (
							<p
								style={{
									color: 'var(--blue-text)',
									width: 'auto',
								}}>
								DRAG A PROJECT HERE TO LEARN MORE
							</p>
						)}
					</StyledActiveProjectWrapper>
				</Droppable>
				{isDropped && activeDocs ? (
					showActiveDocs(activeId)
				) : (
					<StyledWrapper>
						{projects.map((project) => (
							<Draggable id={project.id}>
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
									isDraggable={true}
								/>
							</Draggable>
						))}
					</StyledWrapper>
				)}
			</div>
		</DndContext>
	);
};

export default ProjectGrid;

const StyledWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 16px;
	padding: 16px;
	box-sizing: border-box;
	width: 100%;
	border-radius: 10px;
	background: linear-gradient(124.41deg, #0072b1 0%, #fd36ab 95.2%);

	@media only screen and (max-width: 1550px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
	@media only screen and (max-width: 1150px) {
		grid-template-columns: 1fr 1fr;
	}
	@media only screen and (max-width: 820px) {
		grid-template-columns: 1fr;
	}
`;
const IconWrapper = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;
	background: var(--primary-gradient);
	border-radius: 10px;
	padding: 10px;
	box-shadow: var(--nav-shadow);
	transition: 0.2s ease all;
	z-index: 2;

	&:hover {
		transform: scale(1.1);
		cursor: pointer;
	}
`;
const StyledActiveProjectWrapper = styled.div`
	max-width: 800px;
	min-height: 200px;
	border-radius: 10px;
	margin: 16px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 2px dotted grey;
	box-sizing: border-box;
	position: relative;
`;
