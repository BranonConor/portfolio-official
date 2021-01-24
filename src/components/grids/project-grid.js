import './project-grid.css'

import React,{useState} from 'react'

import {DndContext} from '@dnd-kit/core'
import Draggable from './draggable'
import Droppable from './droppable'
import ProjectCard from './project-card.js'
import TrashIcon from '../icons/trash'

const ProjectGrid = () => {
    const [projects, setProjects] = useState([
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
            animation: 'spring',
            animationTime: 0.2,
            id: 1
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
            codeLink: null,
            animation: 'spring',
            animationTime: 0.3,
            id: 2
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
            codeLink: null,
            animation: 'spring',
            animationTime: 0.4,
            id: 3
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
            demoLink: null,
            codeLink: null,
            animation: 'spring',
            animationTime: 0.5,
            id: 4
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
            demoLink: null,
            codeLink: null,
            animation: 'spring',
            animationTime: 0.6,
            id: 5
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
            codeLink: null,
            animation: 'spring',
            animationTime: 0.7,
            id: 6
        },
    ])
    
    //State for sensing when something is dropped into a droppable
    const [isDropped, setIsDropped] = useState(false);
    const [activeId, setActiveId] = useState(0);

    //Method for clearing active project when done
    const handleDelete = event => {
        event.preventDefault();
        setIsDropped(false);
    }

    //Render a project card up in the target drop zone when a project is dropped up there
    const showActiveProject = (id) => {

        return (
            <div className='active-wrapper'>
                <ProjectCard 
                    name={projects[id-1].name}
                    role={projects[id-1].role}
                    description={projects[id-1].description}
                    technologies={projects[id-1].technologies}
                    demoLink={projects[id-1].demoLink}
                    codeLink={projects[id-1].codeLink}
                    animationType={projects[id-1].animation}
                    animationTime={0.25}
                />
                <div className='delete' onClick={handleDelete}>
                    <TrashIcon />
                </div>
            </div>
        )
    };

    //Method for handling the drags within DND Context component
    const handleDragEnd = (event)  => {
        if (event.over && event.over.id === 'droppable') {
            setIsDropped(true)
        }
        //Set the active project to the id of whatever was dropped into the target zone
        setActiveId(event.active.id);
    }


    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div className="ProjectGrid">
            <Droppable>
                    <div className="active-project">
                        {isDropped && activeId ? showActiveProject(activeId) : <p style={{color: 'var(--blue-text)', width: 'auto'}}>DRAG A PROJECT HERE TO LEARN MORE</p>}
                    </div>
            </Droppable>
                <div className='projects'>
                    {isDropped ? 
                        'More information coming soon! 😎🎉'
                        :
                        projects.map(project => {
                            return (
                                <Draggable id={project.id}>
                                    <ProjectCard 
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
                                </Draggable>
                            )
                        })
                    }
                </div>
            </div>
        </DndContext>
    )
}

export default ProjectGrid