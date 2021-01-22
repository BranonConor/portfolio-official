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
import { motion } from 'framer-motion'

const TechGrid = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });
    const logos = [
        {
            svg: <HTMLIcon />,
            animationTime: 0.1
        },
        {
            svg: <CSSIcon />,
            animationTime: 0.2
        },
        {
            svg: <JSIcon />,
            animationTime: 0.3
        },
        {
            svg: <ReactIcon />,
            animationTime: 0.4
        },
        {
            svg: <GatsbyIcon />,
            animationTime: 0.5
        },
        {
            svg: <HexoIcon />,
            animationTime: 0.6
        },
        {
            svg: <BootstrapIcon />,
            animationTime: 0.7
        },
        {
            svg: <JqueryIcon />,
            animationTime: 0.8
        },
        {
            svg: <NodeIcon />,
            animationTime: 0.9
        },
        {
            svg: <ExpressIcon />,
            animationTime: 1
        },
        {
            svg: <MongoIcon />,
            animationTime: 1.1
        },
        {
            svg: <GitIcon />,
            animationTime: 1.2
        },
        {
            svg: <GithubIcon />,
            animationTime: 1.3
        },
        {
            svg: <NetlifyIcon />,
            animationTime: 1.4
        },
        {
            svg: <HerokuIcon />,
            animationTime: 1.5
        },
        {
            svg: <NPMIcon />,
            animationTime: 1.6
        },
        {
            svg: <FigmaIcon />,
            animationTime: 1.7
        },
    ]
    return (
        <div className="TechGrid">
            <div className="content">
                <h5 className='subtitle-blue'>My tools and tech</h5>
            </div>
            <div className='tech'>
                {logos.map(logo => {
                    return (
                        <motion.div
                        initial={{ rotate: 270, scale: 0, opacity: 0 }}
                        animate={{ 
                            rotate: 360, 
                            scale: 1, 
                            opacity: 1
                        }}
                        transition={{ 
                            type: 'spring',
                            duration: logo.animationTime
                        }}
                        >
                            {logo.svg}
                        </motion.div>
                    )
                 })}
            </div>
        </div>
    )
}

export default TechGrid