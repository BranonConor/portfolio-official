import React from 'react';
import bug from '../../images/photography/bug.jpeg';
import harbor from '../../images/photography/harbor.jpeg';
import jellybowl from '../../images/photography/jellybowl.jpeg';
import mammoth from '../../images/photography/mammoth.jpeg';
import matt from '../../images/photography/matt.jpeg';
import pismo from '../../images/photography/pismo.jpeg';
import rach from '../../images/photography/rach.jpeg';
import sd from '../../images/photography/sd.jpeg';
import tahoe from '../../images/photography/tahoe.jpeg';
import styled from 'styled-components';

export const PhotoGrid = () => {
	const photos = [
		bug,
		harbor,
		jellybowl,
		mammoth,
		matt,
		pismo,
		rach,
		sd,
		tahoe,
	];
	console.log(photos);
	return (
		<StyledWrapper>
			{photos.map((photo) => (
				<StyledImageWrapper>
					<StyledImage src={photo} alt='' />
				</StyledImageWrapper>
			))}
		</StyledWrapper>
	);
};

const StyledWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 16px;
	box-sizing: border-box;

	@media only screen and (max-width: 1300px) {
		grid-template-columns: 1fr 1fr;
	}
	@media only screen and (max-width: 850px) {
		grid-template-columns: 1fr;
	}
`;
const StyledImageWrapper = styled.div``;
const StyledImage = styled.img`
	border-radius: 10px;
	width: 100%;
	object-fit: contain;
`;
