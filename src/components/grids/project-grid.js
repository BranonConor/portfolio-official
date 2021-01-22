import './project-grid.css'

import ProjectCard from './project-card.js'
import React from 'react'

const ProjectGrid = () => {
    
    const projects = [
        {
            name: 'Coronavirus Dashboard',
            role: 'Sole designer & engineer',
            description: 'In light of the COVID pandemic, I wanted to provide a user-friendly, intuitive dashboard to help people stay informed on latest coronavirus updates.',
            technologies: [
                'HTML',
                'CSS',
                'JS',
                'NodeJS',
                'Express',
                'Covid19API',
                'NPM',
                'EJS',
                'Heroku'
            ],
            demoLink: 'http://dash-4-coronavirus.herokuapp.com/',
            codeLink: 'https://github.com/BranonConor/corona-dash',
            animation: 'fade-right',
            animationTime: 0.2
        },
        {
            name: 'Charter Healthcare Group',
            role: 'Sole designer & engineer',
            description: 'After creating the UNIFY Design System, I designed and engineered a brand new corporate website for Charter healthcare Group.',
            technologies: [
                'HTML',
                'CSS',
                'JS',
                'React',
                'NodeJS',
                'NPM',
                'Netlify'
            ],
            demoLink: 'https://charter-official-prototype.netlify.app/',
            codeLink: false,
            animation: 'fade-right',
            animationTime: 0.3
        },
        {
            name: 'UNIFY Design System',
            role: 'Sole designer & engineer',
            description: 'I created a componentized design system from scratch to unify UX/UI across software projects, wrapped up in nice web app with code and design documentation.',
            technologies: [
                'HTML',
                'CSS',
                'JS',
                'React',
                'NodeJS',
                'NPM',
                'Figma',
                'Netlify'
            ],
            demoLink: 'https://unifydesign.netlify.app/',
            codeLink: false,
            animation: 'fade-right',
            animationTime: 0.4
        },
        {
            name: 'YelpCamp',
            role: 'Engineering Student',
            description: 'I built a full-stack CRUD app with authentication, user profiles, comments, reviews, etc. for campsites as a course project.',
            technologies: [
                'HTML',
                'CSS',
                'JS',
                'NodeJS',
                'NPM',
                'Express',
                'MongoDB',
                'Mongoose',
                'EJS',
                'PassportJS',
                'Heroku'
            ],
            demoLink: false,
            codeLink: false,
            animation: 'fade-right',
            animationTime: 0.5
        },
        {
            name: 'Charter Rebranding',
            role: 'UX Designer',
            description: 'I redesigned the logo and company brand for Charter Healthcare Group, a large healthcare company in southern California.',
            technologies: [
                'Figma',
                'Photoshop',
                'Illustrator'
            ],
            demoLink: false,
            codeLink: false,
            animation: 'fade-right',
            animationTime: 0.6
        },
        {
            name: 'TheraMind Centers',
            role: 'Web developer consultant',
            description: 'I worked with a UX Designer as the technical lead to create a series of new, beautiful websites with intuitive CMS solutions for TheraMind clinics in California.',
            technologies: [
                'HTML',
                'CSS',
                'JS',
                'HexoJS',
                'Wordpress',
                'Kinsta'
            ],
            demoLink: 'https://theramind-sb.com/',
            codeLink: false,
            animation: 'fade-right',
            animationTime: 0.7
        },
    ]

    return (
        <div className="ProjectGrid">
            {projects.map(project => {
                return (
                    <ProjectCard 
                        name={project.name}
                        role={project.role}
                        description={project.description}
                        technologies={project.technologies}
                        demoLink={project.demoLink}
                        codeLink={project.codeLink}
                        animation={project.animation}
                        animationTime={project.animationTime}
                        key={project.name}
                    />
                )
            })}
        </div>
    )
}

export default ProjectGrid