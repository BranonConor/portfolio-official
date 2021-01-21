import './socials.css'

import GithubIcon from '../icons/github'
import InstagramIcon from '../icons/instagram'
import LinkedinIcon from '../icons/linkedin'
import React from "react"

const Socials  = () => (
  <nav class='Menu'>
    <a href="#" target='_blank' rel='noopenner noreferrer'><LinkedinIcon /></a>
    <a href="#" target='_blank' rel='noopenner noreferrer'><GithubIcon /></a>
    <a href="#" target='_blank' rel='noopenner noreferrer'><InstagramIcon /></a>
  </nav>
)
export default Socials