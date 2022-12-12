import ButtonPrimaryExternal from '../buttons/button-primary-external';
import React from 'react';
import campgrounds from '../../images/yelpcamp/campgrounds.jpg';
import home from '../../images/yelpcamp/home.jpg';
import { motion } from 'framer-motion';
import showPage from '../../images/yelpcamp/show.jpg';
import { DocsLayout } from '../layouts/DocsLayout';
import styled from 'styled-components';

const YelpCampDocs = () => {
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
					YelpCamp
				</motion.h5>
				<motion.h6
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ type: 'spring', duration: 2 }}>
					Fullstack Bootcamp Project
				</motion.h6>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ type: 'spring', duration: 2.25 }}>
				<p>
					After covering front end development and backend
					technologies like NodeJS, Express, databases, etc., we set
					out to put our knowledge into practice by building a
					comprehensive web app.
				</p>
				<p className='subtitle' style={{ marginBottom: '32px' }}>
					This project was created and deployed alongside the
					instructor as the final project in a fullstack development
					bootcamp.
				</p>
				<h6 className='subtitle-blue'>The App's Features</h6>
				<p>
					YelpCamp has some noteworthy features on par with many
					modern apps:
				</p>
				<ul>
					<li>User Registration</li>
					<li>User Login/Logout</li>
					<li>Authentication and protected routes</li>
					<li>
						CRUD functionality for logged in users to manipulate
						campsites, reviews, etc.
					</li>
					<li>Geocoded Locations for created campsites</li>
					<li>Validation on the front and back end</li>
					<li>Cookie and session storage</li>
					<li>Etc.</li>
				</ul>
				<h6 className='subtitle-blue'>The Design</h6>
				<p>
					The design for this application relies fully on the
					Bootstrap library. It's thus not the most unique looking app
					on the web but it gets the job done and sports a sensical,
					simplistic UI.
				</p>
				<h6 className='subtitle-blue'>The Code</h6>
				<p>
					This project was created using some of the most modern tech
					available to developers. Here's the total stack at a glance:
				</p>
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>JS</li>
					<li>EJS Templating</li>
					<li>Express</li>
					<li>NPM</li>
					<li>NodeJS</li>
					<li>MongoDB & Mongo Atlas</li>
					<li>Mongoose</li>
					<li>PassportJS</li>
					<li>Heroku</li>
					<li>Git/Github</li>
				</ul>
				<p>Some other interesting tech used in the app include:</p>
				<ul>
					<li>
						<a
							href='https://www.mapbox.com/'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-link'>
							Mapbox
						</a>{' '}
						for interactive campsite location maps and cluster maps
						of all campsites
					</li>
					<li>
						<a
							href='https://joi.dev/'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-link'>
							Joi
						</a>{' '}
						for server-side validation of form inputs
					</li>
					<li>
						<a
							href='https://helmetjs.github.io/'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-link'>
							Helmet
						</a>{' '}
						for increased app security
					</li>
					<li>
						<a
							href='https://cloudinary.com/'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-link'>
							Cloudinary
						</a>{' '}
						API for storage of campsite images
					</li>
					<li>
						Custom middleware in Express with Express Router to
						better handle routes
					</li>
				</ul>
				<h6 className='subtitle-blue'>What I learned</h6>
				<p>
					This bootcamp project taught me SO much about full stack
					development and everything that goes into it.
				</p>
				<p>
					On the backend, I learned a ton about proper database
					configuration in MongoDB and how to model data using an ODM
					like Mongoose. I got more familiar with data relationships
					and how to structure Mongoose schemas to ensure a sensical
					database design. I got some hands-on experience setting up
					an Express server API that uses complicated routing with
					custom middleware functions to implement data validation and
					user authentication. I even got a tase of 'MVC' architecture
					as we set up models, views, and controllers directories to
					separate the concerns of our modules and files in our app.
				</p>
				<p>
					On the front end, I got to practice Bootstrap and EJS in
					creating templated pages with modern UI designs. I also got
					to play with Mapbox in rendering fancy, interactive maps and
					I had plenty of practice using forms and inputs to make HTTP
					requests to our API with data validation.
				</p>
				<p>
					This app was an incredible experience in software
					development across front and back end stacks and I'll be
					taking this wealth of knowledge into future full stack app
					projects!
				</p>
				<h6 className='subtitle-blue'>Take a look!</h6>
				<StyledImage src={home} alt='Home page' />
				<StyledImage src={campgrounds} alt='design page' />
				<StyledImage src={showPage} alt='Code page' />
				<ButtonPrimaryExternal
					link='http://branon-yelp-camp.herokuapp.com/'
					content='See live project ✨'
				/>
				<ButtonPrimaryExternal
					link='https://github.com/BranonConor/yelpcamp'
					content='See the repo 🛠'
				/>
			</motion.div>
		</DocsLayout>
	);
};

export default YelpCampDocs;

const StyledImage = styled.img`
	width: 100%;
	border-radius: 10px;
	margin: 16px 0;
`;
