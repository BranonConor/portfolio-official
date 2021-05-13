import './project-card.css'
import "aos/dist/aos.css"
import './achievement-grid.css'

import React, {useEffect, useState} from 'react'

import AOS from "aos";
import AchievementCard from './achievement-card'
import { motion } from 'framer-motion'

const AchievementGrid = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    const [projects, setProjects] = useState([
        {
            name: 'Published New NPM Package! 🎉',
            role: 'UX Designer and Engineer',
            description: "UNIFY Design System's custom icon set is now available as an NPM package of SVG-based React components!",
            technologies: [
                'ReactJS',
                'Webpack',
                'Babel',
                'Rollup',
                'SVG',
                'NPM',
                'NodeJS',
                'SemVer'
            ],
            demoLink: 'https://www.npmjs.com/package/unify-design-icons',
            codeLink: 'https://github.com/charterbran/unify-design-icons',
            id: 1
        },
        {
            name: 'Started development of ListRocket 🛠',
            role: 'UX Designer & Full Stack Engineer',
            description: "I recently started building a new full stack web application with a decoupled architecture in hopes of providing a better solution to group event planning and organziation!",
            technologies: [
                'HTML',
                'CSS',
                'JS',
                'Sass',
                'ReactJS',
                'NextJS',
                'NodeJS',
                'NPM',
                'ExpressJS',
                'MongoDB',
            ],
            demoLink: '',
            codeLink: 'https://github.com/BranonConor/list-rocket',
            id: 2
        },
        {
            name: 'Neuroscience study is in review! 🧠',
            role: 'Neuroscience researcher',
            description: "A neuropsychiatric research study that I oversaw a couple years back is in review for scientific publications/journals! If it passes it will be my second neuroscientific research publication as a coauthor - so exciting!",
            technologies: [
                'Neuroscience',
                'TMS Therapy',
                'Biomarkers'
            ],
            demoLink: '',
            codeLink: 'https://github.com/BranonConor/list-rocket',
            id: 2
        },
        {
            name: 'Sent off a PR for an open source contribution! 🤝',
            role: 'Front End Engineer',
            description: "I recently submitted a PR to the react-simple-chatbot NPM package, which makes this awesome React-based chatbot widget more accessible with a 10+ point increase in Lighthouse accessibility scores.",
            technologies: [
                'UX Design',
                'Accessibility',
                'ReactJS',
                'NPM',
                'Git',
                'Github'
            ],
            demoLink: '',
            codeLink: 'https://github.com/BranonConor/list-rocket',
            id: 2
        },
    ])

    return (
        <motion.div className="AchievementGrid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
                type: 'spring',
                duration: 2
            }}
        >
            <div className="content">
                <h5 className='subtitle-blue'>Recent Achievements</h5>
            </div>
            <div className='achievements'>
                {
                    projects.map(project => {
                        return (
                            <AchievementCard 
                                name={project.name}
                                role={project.role}
                                description={project.description}
                                technologies={project.technologies}
                                demoLink={project.demoLink}
                                codeLink={project.codeLink}
                                animationType={project.animation}
                                animationTime={project.animationTime}
                                key={project.id}
                            />
                        )
                    })
                }
            </div>
        </motion.div>
    )
}

export default AchievementGrid