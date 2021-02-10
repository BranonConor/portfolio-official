import ButtonPrimaryExternal from '../buttons/button-primary-external'
import HomePage from '../../images/covid-dash/home.jpg'
import Page from '../../images/covid-dash/page.jpg'
import React from 'react'
import {motion} from 'framer-motion'

const CovidDashDocs = () => {
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
                        Coronavirus Dashboard
                    </motion.h5>
                    <motion.h6 className='subtitle'
                        initial={{x: -75, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{type: 'spring', duration: 2}}   
                    >
                        Sole Designer & Engineer
                    </motion.h6>
                </motion.div>
                <motion.div className="content"
                    initial={{x: -75, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{type: 'spring', duration: 2.25}}    
                >
                    <div className="left">
                        <p>
                            It was April of 2020 - the world was shutting down, the coronavirus was spreading, and toilet paper was
                            unnecessarily hard to come by.
                        </p>
                        <p className='subtitle' style={{marginBottom: '32px'}}>
                            I did what any brave young man would have done in these trying times: 
                            hole up inside and build a Coronavirus Tracking Dashboard.
                        </p>
                        <h6 className="subtitle-blue">The Design</h6>
                        <p>
                            This dashboard features a sleek, modern UI reminiscent of a Google's material design, with clean whites
                            and a subtle purple accent for branding. I wanted the UI to be informative with a lot of different metrics, and
                            to execute on that effectively I knew it would have to be minimalistic and clean so as not to clutter the screen and overwhelm users.
                            Oh - and I just HAD to add some coronavirus pathogens floating around in the background, but don't worry they can't get you through the screen.
                            (Or can they..? 😳)
                        </p>
                        <p>
                            I started a new board in Figma and went to town drafting a simple mockup, to lay out the basics before developing the code.
                        </p>
                        <h6 className='subtitle-blue'>The Code</h6>
                        <p>
                            From a technical perspective, the app is vanilla HTML, CSS, and JavaScript on the front end, using EJS as a templating language.
                            The backend is a simple setup with NodeJS and Express, making calls to a RESTful COVID19 API. It's hosted on Heroku using their free tier.
                        </p>
                        <p>
                            This API updates every 15 minutes,
                            so it was perfect for my use case, allowing users to see almost-real-time updates on the progression of coronavirus globally. It also
                            provides some useful endpoints to tap into the numbers by country, continent, etc. I made sure to bake that into the architecture of
                            the app with a search feature so the user can access more than just the numbers at large. Here's the stack at a glance:
                        </p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JS</li>
                            <li>NodeJS</li>
                            <li>Express</li>
                            <li>Covid19API</li>
                            <li>NPM</li>
                            <li>EJS</li>
                            <li>Heroku</li>
                            <li>Git/Github</li>
                        </ul>
                        <h6 className="subtitle-blue">What I learned</h6>
                        <p>
                            Building this web app provided some great experience in hooking into APIs from a simple server
                            setup, using JS front-to-back. 
                        </p>
                        <p>
                            It was also a great practical lesson in using asynchronous programming, as I had to be sure my API calls
                            were successfully executed before attempting to render templates on the front end that depend on that data.
                        </p>
                        <p>
                            Overall, I had a blast making this app and dipping my feet into the sweet sweet full-stack waters. Go check it out!
                        </p>
                    </div>
                    <div className="right">
                        <h6 className="subtitle-blue">Take a look!</h6>
                        <img src={HomePage} alt="Home page"/>
                        <img src={Page} alt="Second page"/>
                        <ButtonPrimaryExternal link='http://dash-4-coronavirus.herokuapp.com/' content='See live project ✨' />
                        <ButtonPrimaryExternal link='https://github.com/BranonConor/corona-dash' content='See the repo 🛠' />
                    </div>
                </motion.div>
            </div>

        </section>
    )
}

export default CovidDashDocs