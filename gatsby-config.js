require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: `Branon Eusebio`,
		description: `UX-focused Software Engineer`,
		author: `@branoneusebio`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/logo.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-webfonts`,
			options: {
				fonts: {
					google: [
						{
							family: 'Comfortaa',
							variants: ['300', '400', '500', '600', '700'],
							//subsets: ['latin']
							//text: 'Hello'
							fontDisplay: 'swap',
							//strategy: 'selfHosted' // 'base64' || 'cdn'
						},
						{
							family: 'Montserrat',
							variants: ['300', '400'],
							fontDisplay: 'swap',
						},
					],
				},
			},
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `av58d69vs7p1`,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
				downloadLocal: true,
			},
		},
		`gatsby-plugin-image`,
		`gatsby-plugin-styled-components`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
