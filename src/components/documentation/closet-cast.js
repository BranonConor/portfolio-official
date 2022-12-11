import ButtonPrimaryExternal from '../buttons/button-primary-external';
import HomePage from '../../images/closet-cast/home.png';
import Page from '../../images/closet-cast/landing.jpg';
import React from 'react';
import { motion } from 'framer-motion';
import { DocsLayout } from '../layouts/DocsLayout';
import styled from 'styled-components';

const ClosetCastDocs = () => {
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
					ClosetCast
				</motion.h5>
				<motion.h6
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ type: 'spring', duration: 2 }}>
					Fullstack engineer & designer
				</motion.h6>
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ type: 'spring', duration: 2.25 }}>
				<p>
					My wife and I used to live in a tiny apartment on the third
					floor of a rather large complex. Figuring out what to wear
					each day was a challenge, as we were too lazy to walk all
					the way down three flights of stairs to find out the answer
					to that question, and my wife always runs cold. Instead of
					heading downstairs, we'd make an educated guess as to what
					we should wear for the day, usually ending up in
					disappointment when we finally left to discover it was much
					warmer or colder than it appeared.
				</p>
				<p className='subtitle' style={{ marginBottom: '32px' }}>
					Being the good husband and software developer I try to be, I
					thought "What if I made an app that could programmatically
					tell us what to wear without us having to walk down all
					those stairs?" Hence, ClosetCast was born - a forecast for
					your closet.
				</p>
				<h6 className='subtitle-blue'>The Design</h6>
				<p>
					I wanted to make another dashboard design with this app, but
					in an effort to try something new I decided this UI would
					feature a modern design trend called neumorphism.
				</p>
				<p>
					Neumorphism is an interesting, and somewhat controversial,
					UI design trend gaining steam in 2020. It serves as a
					juxtaposition to skeumorphism, which you may remember in the
					earlier iOS app designs. Skeumorphism features a vintage,
					analog graphic design, like Instagram's old camera and
					Youtube's old TV screen app design. Neumorphism is the
					opposite: it's a minimalistic and futuristic look in which
					the only real interface designs rely on light and dark box
					shadows to portray 3D lighting.
				</p>
				<p>
					The controversy around neumorphism is mostly related to its
					lack of accessibility. In standard UX/UI design, colors,
					shadows, borders, and more are manipulated to create a clear
					visual hierarchy on the page that reflects the users'
					options in interacting with the app. Neumorphism essentially
					throws all of that away, sticking to monotonous colors and
					creating varying depth of field in the app's interface with
					box shadows. It's thus considered pretty poor on the
					accessibility front since users have to do a lot more work
					in figuring out the interface, and anyone with visual
					impairments will likely have a rough time making sense of
					it.
				</p>
				<p>
					Nevertheless, I like to stay up to date on technology
					trends, and I have to admit I love the look of neumorphism.
					Why not give it a try.
				</p>
				<h6 className='subtitle-blue'>The Code</h6>
				<p>
					ClosetCast is a lightweight app made in vanilla HTML, CSS,
					and JavaScript on the front end, using EJS as a templating
					language. The backend is a simple setup with NodeJS and
					Express, making calls to a RESTful weather API. It's hosted
					on Heroku using their free tier, with CD/CI setup through
					Heroku's intergration with Git/Github.
				</p>
				<p>
					I had to add an extra layer of logic to programmatically
					suggest clothing options, since the API is only providing
					weather information to the backend. When the data is passed
					to the front end, conditional logic in the templates will
					render clothing suggestions based on the temperature for the
					location that the user searched. Pretty neat! Here's the
					stack at a glance:
				</p>
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>JS</li>
					<li>NodeJS</li>
					<li>Express</li>
					<li>Weather API</li>
					<li>NPM</li>
					<li>EJS</li>
					<li>Heroku</li>
					<li>Git/Github</li>
				</ul>
				<h6 className='subtitle-blue'>What I learned</h6>
				<p>
					Building this web app helped me get a solid grasp on
					accessing data from 3rd party APIs, as well as handling that
					data using javascript servers in NodeJS/Express, making sure
					it finds its way into the front end properly. Writing more
					and more server code in projects like this is a great way to
					sharpen my backend engineering skills!
				</p>
				<p>
					It was also a great dive into some modern UX design trends,
					implementing neumorphism in the UI and seeing its advantages
					and disadvantages firsthand.
				</p>
				<p>
					Overall, this was a fun project with a lot of utility, as my
					wife and I now get to use it instead of having to use the
					stairs to figure out what to wear. Work smarter not harder,
					I suppose!
				</p>
				<h6 className='subtitle-blue'>Take a look!</h6>
				<StyledImage src={HomePage} alt='Home page' />
				<StyledImage src={Page} alt='Second page' />
				<ButtonPrimaryExternal
					link='http://closetcast.herokuapp.com/'
					content='See live project ✨'
				/>
				<ButtonPrimaryExternal
					link='https://github.com/BranonConor/weather-app'
					content='See the repo 🛠'
				/>
			</motion.div>
		</DocsLayout>
	);
};

export default ClosetCastDocs;

const StyledImage = styled.img`
	border-radius: 10px;
	margin: 16px 0;

	@media only screen and (max-width: 768px) {
		width: 100%;
	}
`;
