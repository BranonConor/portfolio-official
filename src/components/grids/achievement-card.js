import './achievement-card.css'

import CodeIcon from '../icons/code'
import LinkIcon from '../icons/link'
import React from 'react'

const AchievementCard = (props) => {

    const {name, role, description, technologies, demoLink, codeLink} = props;

    return (
        <div className="AchievementCard" >
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
        </div>
    )
}

export default AchievementCard