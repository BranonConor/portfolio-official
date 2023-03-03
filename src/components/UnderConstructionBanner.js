import styled from 'styled-components';
import React from 'react';

export const UnderConstructionBanner = () => {
	return <StyledWrapper>🚧 UNDER CONSTRUCTION 🚧</StyledWrapper>;
};

const StyledWrapper = styled.div(
	({ theme: { colors } }) => `
	position: fixed;
	right: -64px;
	top: 56px;
	z-index: -1;
	transform: rotate(30deg);
	background: ${colors.primaryGradient};
	height: 30px;
	width: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 4px 56px;
	color: white;

	@media only screen and (max-width: 600px) {
		position: absolute;
		width: 100%;
		box-sizing: border-box;
		padding: 16px 0;
		top: 0;
		right: 0;
		transform: none;
		height: 116px;
		align-items: flex-end;
	}
`
);
