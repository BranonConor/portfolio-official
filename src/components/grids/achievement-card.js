import './achievement-card.css';

import CodeIcon from '../icons/code';
import LinkIcon from '../icons/link';
import React from 'react';
import styled from 'styled-components';

const AchievementCard = (props) => {
	const { name, role, description, technologies, demoLink, codeLink } = props;

	return (
		<StyledWrapper>
			<div className='card-content'>
				<h6>{name}</h6>
				<p className='detail-title'>{role}</p>
				<p className='detail-text'>{description}</p>
				<ul className='technologies'>
					{technologies.map((tech) => {
						return (
							<li className='detail-text' key={`${name}-${tech}`}>
								{tech}
							</li>
						);
					})}
				</ul>
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

export default AchievementCard;

const StyledWrapper = styled.div`
	height: 100%;
	border-radius: 10px;
	margin: 16px 16px 16px 0;
	z-index: 2;
	position: relative;
	transition: 0.15s;

	&:hover {
		box-shadow: none;
		background: rgba(10, 10, 10, 0.4);
	}
	&:hover .links {
		background: var(--dark-bg);
	}
`;
