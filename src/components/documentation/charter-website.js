import ButtonPrimaryExternal from '../buttons/button-primary-external'
import React from 'react'
import home from '../../images/charter/home.jpg'
import map from '../../images/charter/map.jpg'
import {motion} from 'framer-motion'
import services from '../../images/charter/services.jpg'

const CharterWebsiteDocs = () => {
    return(
        <section className='docs'>
            <div className="two-column">
                <motion.div className="title"
                    initial={{x: -75, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{type: 'spring', duration: 1}}    
                >
                    <motion.h5
                        initial={{x: -75, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{type: 'spring', duration: 1.5}}     
                    >
                        Charter Healthcare Group
                    </motion.h5>
                    <motion.h6 className='subtitle'
                        initial={{x: -75, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{type: 'spring', duration: 2}}   
                    >
                        Frontend engineer & designer
                    </motion.h6>
                </motion.div>
                <motion.div className="content"
                    initial={{x: -75, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{type: 'spring', duration: 2.25}}    
                >
                    <div className="left">
                        <p>
                            Circa 2020, Charter Healthcare Group's primary online presence was in the form of a Wix website created by non-tech personel.
                            The site had a few pages, a contact form, and no central design or branding methodology built into it.
                        </p>
                        <p className='subtitle' style={{marginBottom: '32px'}}>
                            I rebuilt this website in React with far more extensive functionality, drawing on the design system I established for the company so its UI and UX
                            came from a single source of truth that maximized our brand.
                        </p>
                        <h6 className="subtitle-blue">The Design</h6>
                        <p>
                            The new corporate website's design featured our new color palette with white and dark navy background colors and a pink primary accent with the occasional
                            aqua secondary accent. In an industry where every brand palette features blue and white, we wanted to stand out by extending our colors beyond tradition.
                        </p>
                        <p>
                            Amorphous background angles and shapes helped us achieve visual intrigue, while standardized text blocks and spacing helped us keep it clean and professional.
                            I also wanted to use box shadows to our advantage tastefully, creating more contrast in the UI elements.
                        </p>
                        <h6 className='subtitle-blue'>The Code</h6>
                        <p>
                            This site is built in React using the GatsbyJS framework, a static site generator that uses a fancy webpack congifuration and some other magic to serve static files
                            to the client. React allowed developer ease (important as the only developer building this site!) as well as great compatibility with our componentized design system.
                            Here's the tech stack at a glance:
                        </p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JS</li>
                            <li>React</li>
                            <li>GatsbyJS</li>
                            <li>ChartJS</li>
                            <li>NodeJS</li>
                            <li>NPM</li>
                            <li>Google Maps API</li>
                            <li>Google Analytics</li>
                            <li>Netlify</li>
                            <li>Git/Github</li>
                        </ul>
                        <h6 className="subtitle-blue">Features</h6>
                        <p>
                            Between all the different departments and their respective wishlists in the new site, I engineered this site with a wide feature set. I implemented a chatbot feature
                            to increase usability, I built a custom SVG icon library in the form of React components that can be easily imported and used in any component, I configured ChartJS
                            to create beautiful data visualizations, I set up a comprehensive blog ecosystem with tags, categories, posts, related posts, etc., I built a filterable locations component
                            with a very simple and pleasant UX using Google Maps API, I implemented serverless contact forms using Formspree.io that programmatically send out emails to specified
                            departments in the organization, I setup locations pages for each location, and much more. And we're still adding features every day!
                        </p>
                    </div>
                    <div className="right">
                        <h6 className="subtitle-blue">What I learned</h6>
                        <p>
                            Building this website was a massive lesson in React development. Managing a large library of React components and stitching them together to build complex features helped me 
                            truly understand the React ecosystem. Building in features from so many different departments' wishlists also sharpened my ability to facilitate communication across the entire organization
                            in order to execute on a product that everyone can be proud of and find useful.
                        </p>
                        <p>
                            We're adding to this website everyday and we hope to do much bigger things with it, like hook up a backend headless CMS platform to better automate the creation of fresh content, and much more.
                        </p>
                        <h6 className="subtitle-blue">Take a look!</h6>
                        <img src={home} alt="Home page"/>
                        <img src={services} alt="Services page"/>
                        <img src={map} alt="Map page"/>
                        <ButtonPrimaryExternal link='https://charterhcg.com' content='See live project ✨' />
                    </div>
                </motion.div>
            </div>

        </section>
    )
}

export default CharterWebsiteDocs