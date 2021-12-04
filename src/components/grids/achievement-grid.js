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
            name: ' Setup a POC Translation/i18n flow 🎉',
            role: 'UX Engineer',
            description: "From start to finish, I recently setup a prototypical translations flow that can provide i18n to a suite of web and mobile apps from a single source of truth (distributed as an npm module)!",
            technologies: [
                'ReactJS',
                'react-i18next',
                'Lokalise',
                'NPM',
                'NodeJS',
                'Figma'
            ],
            demoLink: '',
            codeLink: '',
            id: 1
        },
        {
            name: 'Started working on a Typescript Course 🛠',
            role: 'Software Developer Consultant',
            description: "I recently teamed up with the legend himself, Colt Steele, to bring a highly anticipated Typescript course to life! We're currently building the course together and will release on Udemy early Q1 2022.",
            technologies: [
                'Typescript',
                'JS',
                'Data Structures',
                'Udemy',
                'ReactJS',
            ],
            demoLink: 'https://www.udemy.com/user/coltsteele/',
            codeLink: '',
            id: 2
        },
        {
            name: "I'm now the coauthor of a 2nd neuroscience publication! 🧠",
            role: 'Neuroscience researcher',
            description: "A neuropsychiatric research study that I oversaw a couple years back was recently published in the Psychiatry Research journal!",
            technologies: [
                'Neuroscience',
                'TMS Therapy',
                'Biomarkers'
            ],
            demoLink: 'https://www.sciencedirect.com/science/article/abs/pii/S0165178121003504',
            codeLink: '',
            id: 3
        },
        {
            name: 'Just joined Color as the 2nd-ever Design Technologist! 🤝',
            role: 'Design Technologist',
            description: "I recently joined Color (or Color Genomics) as their second ever Design Technologist. I'm so excited to be a founding team member for Color's design system!",
            technologies: [
                'UX Design',
                'Design Systems',
                'Accessibility',
                'ReactJS',
            ],
            demoLink: 'https://www.color.com/',
            codeLink: '',
            id: 4
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