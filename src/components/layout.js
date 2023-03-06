import './layout.css';

import Footer from './footer/footer';
import PropTypes from 'prop-types';
import React from 'react';
import Sidebar from './sidebar/sidebar';
import { ThemeProvider } from 'styled-components';
import { theme } from '../contexts/StyleProvider';

const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<Sidebar />
			<main>{children}</main>
			<Footer />
		</ThemeProvider>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
