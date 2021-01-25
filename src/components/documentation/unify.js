import ButtonPrimaryExternal from '../buttons/button-primary-external'
import React from 'react'
import code from '../../images/unify/code.jpg'
import design from '../../images/unify/design.jpg'
import home from '../../images/unify/home.jpg'
import {motion} from 'framer-motion'

const UnifyDocs = () => {
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
                        UNIFY Design System
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
                            When I first joined the Charter Healthcare Group team, I knew we had a series of web-based software projects to tackle. Congruently, we also 
                            wanted to refresh the company's identity, as most of our brand was created in the early 2000s. And on top of it all, these many projects were
                            to be my responsibility, with no previous infrastructure in place.
                        </p>
                        <p className='subtitle' style={{marginBottom: '32px'}}>
                            With all of this in mind, we had a perfect use case for implementing a component-driven design system! The goal: unify the user interfaces and experiences
                            across all of the upcoming software projects.
                        </p>
                        <h6 className="subtitle-blue">The Design</h6>
                        <p>
                            I started hashing out our design system details and components immediately. I began with the basics: 
                        </p>
                        <ul>
                            <li>Guidelines</li>
                            <li>Purpose/Vision</li>
                            <li>Colors</li>
                            <li>Spacing</li>
                            <li>Typography</li>
                            <li>Buttons</li>
                            <li>Iconography</li>
                            <li>Forms</li>
                        </ul>
                        <p>
                            I decided we'd use some solid, modern tooling to house the bulk of our design system and created an organization in Figma. I worked intimitely with the
                            executive team and developed the fundamental designs in these categories. Now that we had ironed out our basic components, I felt compelled to make this 
                            as accessible to leadership and other teams as possible so I began developing a web app to house everything - we'd call it UNIFY (I know, super creative 💅🏿). 
                        </p>
                        <h6 className='subtitle-blue'>The Code</h6>
                        <p>
                            With componentized design, a componentized frontend framework would make total sense - so after some research I chose to use React for this web app. For our
                            specific React setup, we went with Gatsby as it has a lot of great features out of the box that fit our needs, with a vast plugin architecture between Gatsby's own ecosystem
                            and the React NPM universe.
                        </p>
                        <p>
                            We could also host it via Netlify since the client is ultimately served static files (thanks to the magic of Gatsby), which would be a really easy way to achieve
                            continuous integration/development. As the only developer manning these projects, developer experience was important. 
                        </p>
                        <p>
                            And finally - I chose to use Figma Live Embeds so the app was directly tied to the designs in Figma, and so any changes to the Figma design components would show up
                            in UNIFY in real-time. I also wanted to use code documentation so future developers could jump in on this with ease, so I implemented a nifty react NPM package for syntax
                            highlighting.
                        </p>
                        <p>
                            Here's the total stack at a glance:
                        </p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JS</li>
                            <li>React / GatsbyJS</li>
                            <li>A bit of GraphQL</li>
                            <li>NPM</li>
                            <li>NodeJS</li>
                            <li>Netlify</li>
                            <li>Figma</li>
                            <li>Some awesome NPM packages!</li>
                        </ul>
                        <h6 className="subtitle-blue">What I learned</h6>
                        <p>
                            I learned a lot working on this project, most notably in UX design. Orchestrating an entire design system by yourself will undoubtedly
                            teach you a lot about UX fundamentals across the board. I spent a lot of time researching UX principles and I'm all-the-wiser because of it!
                        </p>
                        <p>
                            I also learned a lot about React and about the GatsbyJS workflow. Building out tabbable components that conditionally render either code or design
                            documentation was a great lesson in data flow for React. It really sharpened my understanding of state, passing props and methods around, parent-child
                            component relationships - the whole 9-yards.
                        </p>
                        <p>
                            And a final important lesson I learned was making a new tool in the organization adoptable. No one in our org. had used a design system before, so I made
                            sure to make it as palatable (or dare I say, "Cool") as possible. Its own snazzy logo, highly intuitive user interface, a chatbot to help assist users in
                            finding what they need, etc. I'm excited to have paved the way for a more impactful user experience across all of our projects, under my watch or any future
                            developer's watch at Charter! 😎 
                        </p>
                    </div>
                    <div className="right">
                        <h6 className="subtitle-blue">Take a look!</h6>
                        <img src={home} alt="Home page"/>
                        <img src={design} alt="design page"/>
                        <img src={code} alt="Code page"/>
                        <ButtonPrimaryExternal link='https://unifydesign.netlify.app/' content='See live project ✨' />
                    </div>
                </motion.div>
            </div>

        </section>
    )
}

export default UnifyDocs