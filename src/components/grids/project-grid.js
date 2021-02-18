import './project-grid.css'

import React,{useState} from 'react'

import CharterRebrandingDocs from '../documentation/charter-rebranding'
import CharterWebsiteDocs from '../documentation/charter-website'
import ClosetCastDocs from '../documentation/closet-cast'
import CovidDashDocs from '../documentation/coronavirus-dashboard'
import {DndContext} from '@dnd-kit/core'
import Draggable from './draggable'
import Droppable from './droppable'
import ProjectCard from './project-card.js'
import TheraMindDocs from '../documentation/theramind'
import TrashIcon from '../icons/trash'
import UnifyDocs from '../documentation/unify'
import YelpCampDocs from '../documentation/yelp-camp'

const ProjectGrid = () => {
    const [projects, setProjects] = useState([
        {
            name: 'Coronavirus Dashboard',
            role: 'Fullstack engineer & designer',
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
                'Heroku',
                'Git/Github',
            ],
            demoLink: 'http://dash-4-coronavirus.herokuapp.com/',
            codeLink: 'https://github.com/BranonConor/corona-dash',
            animation: 'spring',
            animationTime: 0.2,
            docs: <CovidDashDocs />,
            id: 1
        },
        {
            name: 'Charter Healthcare Group',
            role: 'Frontend engineer & designer',
            description: 'After creating the UNIFY Design System, I designed and engineered a brand new corporate website for Charter healthcare Group.',
            technologies: [
                'HTML',
                'CSS',
                'JS',
                'React',
                'NodeJS',
                'NPM',
                'Netlify',
                'Git/Github',
            ],
            demoLink: 'https://charter-official-prototype.netlify.app/',
            codeLink: null,
            animation: 'spring',
            animationTime: 0.3,
            docs: <CharterWebsiteDocs />,
            id: 2
        },
        {
            name: 'UNIFY Design System',
            role: 'Frontend engineer & designer',
            description: 'I created a componentized design system from scratch to unify UX/UI across software projects, wrapped up in nice web app with code and design documentation.',
            technologies: [
                'HTML',
                'CSS',
                'JS',
                'React',
                'NodeJS',
                'NPM',
                'Figma',
                'Netlify',
                'Git/Github',
            ],
            demoLink: 'https://unifydesign.netlify.app/',
            codeLink: null,
            animation: 'spring',
            animationTime: 0.4,
            docs: <UnifyDocs />,
            id: 3
        },
        {
            name: 'YelpCamp',
            role: 'Fullstack Bootcamp Project',
            description: 'I built a full-stack CRUD app with authentication, user profiles, comments, reviews, etc. for campsites as a bootcamp project.',
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
                'Heroku',
                'Git/Github',
                'Cloudinary API',
                'Mapbox API'
            ],
            demoLink: 'http://branon-yelp-camp.herokuapp.com/',
            codeLink: 'https://github.com/BranonConor/yelpcamp',
            animation: 'spring',
            animationTime: 0.5,
            docs: <YelpCampDocs />,
            id: 4
        },
        {
            name: 'ClosetCast',
            role: 'Fullstack engineer & designer',
            description: 'I built a web app that programmatically gives outfit suggestions based on the weather in your location.',
            technologies: [
                'HTML',
                'CSS',
                'JS',
                'NodeJS',
                'ExpressJS',
                'WeatherAPI',
                'EJS',
                'NPM',
                'Git/Github',
            ],
            demoLink: 'https://closetcast.herokuapp.com',
            codeLink: 'https://github.com/BranonConor/weather-app',
            animation: 'spring',
            animationTime: 0.6,
            docs: <ClosetCastDocs />,
            id: 5
        },
        {
            name: 'Charter Logo Redesign',
            role: 'UX Designer & Creative Lead',
            description: 'I redesigned the logo and company brand for Charter Healthcare Group, a large healthcare company in southern California.',
            technologies: [
                'Figma',
                'Photoshop',
                'Illustrator'
            ],
            demoLink: 'https://unifydesign.netlify.app/logos/',
            codeLink: null,
            animation: 'spring',
            animationTime: 0.7,
            docs: <CharterRebrandingDocs />,
            id: 6
        },
        {
            name: 'TheraMind Centers',
            role: 'Web developer consultant',
            description: 'I worked with a UX Designer as the technical lead to create a series of new, beautiful websites with intuitive CMS solutions for the TheraMind clinics.',
            technologies: [
                'HTML',
                'CSS',
                'JS',
                'HexoJS',
                'Wordpress',
                'Kinsta',
                'Git/Github',
            ],
            demoLink: 'https://theramind-sb.com/',
            codeLink: null,
            animation: 'spring',
            animationTime: 0.8,
            docs: <TheraMindDocs />,
            id: 7
        },
    ])
    
    //State for sensing when something is dropped into a droppable
    const [isDropped, setIsDropped] = useState(false);
    const [activeId, setActiveId] = useState(0);
    const [activeDocs, setActiveDocs] = useState(false);

    //Method for clearing active project when done
    const handleDelete = event => {
        event.preventDefault();
        setIsDropped(false);
        //Set the active project to the id of whatever was dropped into the target zone
        setActiveId(null);
        //Set the docs to appear for that project
        setActiveDocs(false);
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
    const showActiveDocs = (id) => {
        return projects[id-1].docs;
    };

    //Method for handling the drags within DND Context component
    const handleDragEnd = (event)  => {
        if (event.over && event.over.id === 'droppable') {
            setIsDropped(true)
        }
        //Set the active project to the id of whatever was dropped into the target zone
        setActiveId(event.active.id);
        //Set the docs to appear for that project
        setActiveDocs(true);
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
                    {isDropped && activeDocs ? 
                        showActiveDocs(activeId)
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