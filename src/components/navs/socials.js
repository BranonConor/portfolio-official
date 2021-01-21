import './socials.css'

import GithubIcon from '../icons/github'
import InstagramIcon from '../icons/instagram'
import LinkedinIcon from '../icons/linkedin'
import React from "react"

const Socials  = () => (
  <nav class='Socials'>
    <a href="https://www.linkedin.com/in/branonconor/" target='_blank' rel='noopenner noreferrer'><LinkedinIcon /></a>
    <a href="https://github.com/BranonConor" target='_blank' rel='noopenner noreferrer'><GithubIcon /></a>
    <a href="https://www.instagram.com/photosbyanasian" target='_blank' rel='noopenner noreferrer'><InstagramIcon /></a>
  </nav>
)
export default Socials