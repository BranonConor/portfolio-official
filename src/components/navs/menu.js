import './menu.css'

import ChatIcon from '../icons/chat'
import HomeIcon from '../icons/home'
import Link from 'gatsby-link'
import ProjectsIcon from '../icons/projects'
import React from "react"
import UserIcon from '../icons/user'

const Menu  = () => (
  <nav class='Menu'>
    <Link to='/'><HomeIcon /></Link>
    <Link to='/about'><UserIcon /></Link>
    <Link to='/projects'><ProjectsIcon /></Link>
    <Link to='/contact'><ChatIcon /></Link>
  </nav>
)
export default Menu
