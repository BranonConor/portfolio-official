import './layout.css';

import Footer from './footer/footer';
import PropTypes from 'prop-types';
import React from 'react';
import Sidebar from './sidebar/sidebar';
import { UnderConstructionBanner } from './UnderConstructionBanner';
import { ThemeProvider } from 'styled-components';
import { theme } from '../contexts/StyleProvider';
import styled from 'styled-components';

const Layout = ({ children, isUnderConstruction }) => {
	return (
		<ThemeProvider theme={theme}>
			<Sidebar />
			<main>
				{isUnderConstruction && <UnderConstructionBanner />}
				{isUnderConstruction && <StyledSpacer />}
				{children}
			</main>
			<Footer />
		</ThemeProvider>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;

const StyledSpacer = styled.div`
	@media only screen and (max-width: 600px) {
		padding: 16px 0;
	}
`;
