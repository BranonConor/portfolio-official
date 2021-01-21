import './menu.css'

import ChatIcon from '../icons/chat'
import HomeIcon from '../icons/home'
import Link from 'gatsby-link'
import ProjectsIcon from '../icons/projects'
import React from "react"
import UserIcon from '../icons/user'

const Menu  = () => (
  <nav class='Menu'>
    <Link to='/' activeStyle={{background: 'var(--grey-bg)', boxShadow: 'inset var(--nav-shadow)'}}><HomeIcon /></Link>
    <Link to='/about' activeStyle={{background: 'var(--grey-bg)', boxShadow: 'inset var(--nav-shadow)'}}><UserIcon /></Link>
    <Link to='/projects' activeStyle={{background: 'var(--grey-bg)', boxShadow: 'inset var(--nav-shadow)'}}><ProjectsIcon /></Link>
    <Link to='/contact' activeStyle={{background: 'var(--grey-bg)', boxShadow: 'inset var(--nav-shadow)'}}><ChatIcon /></Link>
  </nav>
)
export default Menu
