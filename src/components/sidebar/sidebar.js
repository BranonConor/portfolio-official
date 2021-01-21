import './sidebar.css'

import LightLogo from '../icons/light-logo'
import Menu from '../navs/menu'
import React from "react"
import Socials from '../navs/socials'

const Sidebar = () => (
  <div className='Sidebar'>
    <LightLogo />
    <Menu />
    <Socials />
  </div>
)
export default Sidebar
