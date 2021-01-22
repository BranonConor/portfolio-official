import './project-card.css'
import "aos/dist/aos.css"
import './tech-grid.css'

import React, {useEffect} from 'react'

import AOS from "aos";
import BootstrapIcon from '../icons/bootstrap'
import CSSIcon from '../icons/css'
import ExpressIcon from '../icons/express'
import FigmaIcon from '../icons/figma'
import GatsbyIcon from '../icons/gatsby'
import GitIcon from '../icons/git'
import GithubIcon from '../icons/github-logo'
import HTMLIcon from '../icons/html'
import HerokuIcon from '../icons/heroku'
import HexoIcon from '../icons/hexo'
import JSIcon from '../icons/js'
import JqueryIcon from '../icons/jquery'
import MongoIcon from '../icons/mongo'
import NPMIcon from '../icons/npm'
import NetlifyIcon from '../icons/netlify'
import NodeIcon from '../icons/node'
import ReactIcon from '../icons/react'

const TechGrid = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    return (
        <div className="TechGrid">
            <div className="content">
                <h5 className='subtitle-blue'>My tools and tech</h5>
            </div>
            <div className='tech'>
                <HTMLIcon />
                <CSSIcon />
                <JSIcon />
                <ReactIcon />
                <GatsbyIcon />
                <HexoIcon />
                <BootstrapIcon />
                <JqueryIcon />
                <NodeIcon />
                <ExpressIcon />
                <MongoIcon />
                <GitIcon />
                <GithubIcon />
                <NetlifyIcon />
                <HerokuIcon />
                <NPMIcon />
                <FigmaIcon />
            </div>
        </div>
    )
}

export default TechGrid