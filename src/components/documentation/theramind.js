import ButtonPrimaryExternal from '../buttons/button-primary-external';
import React from 'react';
import { motion } from 'framer-motion';
import sb from '../../images/theramind/sb.jpg';
import vh from '../../images/theramind/vh.jpg';
import { DocsLayout } from '../layouts/DocsLayout';
import styled from 'styled-components';

const CovidDashDocs = () => {
	return (
		<DocsLayout>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ type: 'spring', duration: 1 }}>
				<motion.h5
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ type: 'spring', duration: 1.5 }}>
					TheraMind Centers
				</motion.h5>
				<motion.h6
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ type: 'spring', duration: 2 }}>
					Web Developer Consultant
				</motion.h6>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ type: 'spring', duration: 2.25 }}>
				<p>
					The TheraMind centers are a chain of hi-tech
					neuropsychiatric treatment clinics across the west coast and
					the midwest. The main TheraMind website structure was
					originally a Wordpress project, with a custom theme built
					for TheraMind many years back. The design was a bit dated
					and the business had undergone a lot of restructuring which
					made proper digital marketing and organization for different
					locations a bit difficult.
				</p>
				<p className='subtitle' style={{ marginBottom: '32px' }}>
					I teamed up with a gifted UX Designer (from Amazon!) to
					execute on a series of new company websites for their
					different locations.
				</p>
				<h6 className='subtitle-blue'>
					Sidenote: The Project & COVID19
				</h6>
				<p>
					I was initially an in-house web developer for TheraMind
					working on building their new websites, but COVID-19 had
					other plans. Within 5-6 months of assuming my in-house
					position, COVID closures changed the business and our
					resources for the project. We ultimately restructed and I
					was able to continue the project on a contract basis, but we
					ended up doing a big pivot from a custom solution to a
					Wordpress solution. More on that later.
				</p>
				<h6 className='subtitle-blue'>The Design</h6>
				<p>
					I had the privilege of working with a highly experienced UX
					designer in coming up with the TheraMind site designs. She
					helped take the designs I had drafted in the initial stages
					of the project to the next level, by improving them and even
					creating a design system out of them in InVision. We drew on
					this design system and my initial designs, all based on the
					company brand, to have a centralized UI/UX in each of the
					websites we'd be creating.
				</p>
				<p>
					Specifically, these sites feature simple color palettes with
					whites and greys as background colors, using TheraMind's
					signature orange as an accent color. Imagery was intended to
					draw on this color palette as well, whilst tying in some of
					the local context of the business location that site
					represents. In the Santa Barbara site for example, local
					imagery of the harbor and beaches were used.
				</p>
				<h6 className='subtitle-blue'>The Code</h6>
				<p>
					Initially, I was developing a custom solution for these new
					websites, leveraging the 'JAMstack' (Javascript, API,
					Markup) for its speed, security, and ease of hosting. I was
					using HexoJS, a javascript-based static site generator that
					serves the client static files, much like GatsbyJS. It would
					allow us to easily configure a headless CMS through which
					any staff at the clinics could manage content going into the
					sites' blogs. Here was our tech stack at that point:
				</p>
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>JS</li>
					<li>NodeJS</li>
					<li>NPM</li>
					<li>HexoJS</li>
					<li>NPM</li>
					<li>EJS</li>
					<li>Netlify</li>
					<li>NetlifyCMS</li>
				</ul>
				<p>
					I implemented all of this, but the COVID19 crisis changed
					the way we had to approach this project as time was now of
					the essence with less resources. We ultimately made the
					decision to pivot, creating a series of Wordpress sites that
					would offer an easily-manageable CMS out of the box, a vast
					plugin architecture, and site-building tools like Elementor.
				</p>
				<p>
					I developed the sites locally using Local by Flywheel, all
					with Elementor creating reusable components whereever
					possible based on our design system in InVision. Once I
					finished the Santa Barbara location site, I hosted it on
					Kinsta, a popular Wordpress hosting platform, and setup a
					301 redirect on the main site to link out to this new site
					instead of the old microsite, preserving as much 'link
					juice' as possible. I configured the new domain for this
					site by adding a cname and a-record, pointing the domain to
					the IP of the site in Kinsta. And voila - the site was live!
				</p>
				<p>
					From here, we continued the process for the other locations,
					using Duplicator (a popular, battle-tested Wordpress plugin
					for duplicating sites) to recreate this same site structure.
				</p>
				<h6 className='subtitle-blue'>What I learned</h6>
				<p>
					I learned a great deal about CMS solutions from this
					project. I learned the ins-and-outs of Wordpress
					development, from the building and hosting of a site to the
					plugin ecosystem and its various options for building out
					the interfaces (themes, Elementor, adding custom CSS, etc.).
					I also learned a TON about JAMstack development. This stack
					is super powerful for modern CMS solutions, allowing you to
					build out interfaces using whatever tech you'd like (React,
					GatsbyJS, Hexo, etc.), and hook it into any compatible
					headless CMS dashboard software that you'd like using REST
					APIs, Wordpress included!
				</p>
				<p>
					I learned a lot about UX Design in working so closely with
					our UX Designer. I took careful note of the design system,
					and the way it was set up to bring the brand to life in the
					digital space of a website, while baking in accessibility
					and other UX best practices. It was super cool!
				</p>
				<p className='subtitle'>
					Now at the risk of sounding cheesy - I also learned a lot
					about adaptability and resilience.
				</p>
				<p>
					Spending months building a custom solution only to have to
					suddenly find a new, quicker solution was a huge challenge.
					It challenged me on a technical level because I now had to
					jump back into research mode to find a solution that fit our
					NEW needs for the project. It challenged me mentally because
					I had to quickly adapt to drastic change while focusing on
					delivering a quality solution. I'm happy with what we
					accomplished in this project through all its obstacles and I
					know my friends at TheraMind are as well!
				</p>
				<h6 className='subtitle-blue'>Take a look!</h6>
				<StyledImage src={vh} alt='Vernon Hills Site' />
				<StyledImage src={sb} alt='Santa Barbara Site' />
				<ButtonPrimaryExternal
					link='https://theramind-sb.com'
					content='See live project ✨'
				/>
			</motion.div>
		</DocsLayout>
	);
};

export default CovidDashDocs;

const StyledImage = styled.img`
	width: 100%;
	border-radius: 10px;
	margin: 16px 0;
`;
