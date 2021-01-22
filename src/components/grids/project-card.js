import './project-card.css'
import "aos/dist/aos.css";

import React, {useEffect} from 'react'

import AOS from "aos";
import CodeIcon from '../icons/code'
import LinkIcon from '../icons/link'
import {motion} from 'framer-motion'

const ProjectCard = (props) => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    const {name, role, description, technologies, demoLink, codeLink, animationTime} = props;

    return (
        <motion.div 
        className="ProjectCard" 
        initial={{ rotate: 330, scale: 0, opacity: 0 }}
        animate={{ 
            rotate: 360, 
            scale: 1, 
            opacity: 1
        }}
        transition={{ 
            type: 'spring',
            duration: animationTime
        }}
        >
            <div className="card-content">
                <h6>{name}</h6>
                <p className='detail-title'>{role}</p>
                <p className='detail-text'>{description}</p>
                <ul className='technologies'>
                    {technologies.map(tech => {
                        return <li className='detail-text' key={`${name}-${tech}`}>{tech}</li>
                    })}
                </ul>
            </div>
            <div className="links">
                <a href={demoLink} target='_blank' rel='noreferrer noopenner' className={ demoLink ? '' : 'disabled-link'}><LinkIcon /></a>
                <a href={codeLink} target='_blank' rel='noreferrer noopenner' className={ codeLink ? '' : 'disabled-link'}><CodeIcon /></a>
            </div>
        </motion.div>
    )
}

export default ProjectCard