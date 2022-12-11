import React from 'react';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { colors } from './colors.js';

export const theme = {
	colors: {
		black: colors.black,
		white: colors.white,
		bgLight: colors.rocketSteel,
		primaryGradient: colors.horizon,
		secondaryGradient: colors.atmosphere,
		tertiaryGradient: colors.flame,
		button: {
			defaultBg: colors.stellar,
			hoverBg: colors.lightStellar,
			textLight: colors.white,
			textDark: colors.black,
			borderLight: colors.white,
			borderDark: colors.black,
			bgRed: colors.siren,
			bgRedLight: colors.lightSiren,
		},
		chip: {
			defaultBg: colors.metallicBlue,
			hoverBg: colors.lightStellar,
			activeBg: colors.lightStellar,
			border: colors.deepSpace,
			text: colors.deepSpace,
		},
		card: {
			darkBg: colors.deepSpace,
		},
		font: {
			body: colors.smoke,
		},
		link: {
			default: colors.white,
		},
		menu: {
			border: colors.rocketSteel,
		},
		toast: {
			progressBarBg: colors.flame,
		},
	},
	shadows: {
		standard: '0px 4px 6px rgba(0, 0, 0, 0.1)',
	},
	// Copied from another project using TS, TODO: refactor typography to use theme
	// typography: {
	// 	size: size,
	// 	font: font,
	// 	weight: weight,
	// 	lineHeight: lineHeight,
	// 	letterSpacing: letterSpacing,
	// 	textTransform: textTransform,
	// },
};

const GlobalStyle = createGlobalStyle(
	({ theme: { colors } }) => `
	html {
		box-sizing: border-box;
		background: ${colors.white};
		margin: 0 auto;
		padding: 0;
		font-family: 'Poppins';
		font-weight: 300;
	}
`
);

const StyleProvider = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
};

export default StyleProvider;
