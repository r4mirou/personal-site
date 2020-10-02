import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from "./style.module.css"
import clsx from "clsx"
import Img from "gatsby-image"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import {FaBars, FaTimes} from 'react-icons/fa';

const Header = () => {
  const [controlMenu, setControlMenu] = useState(false);

  const handleMenu = state => {
    setControlMenu(state)
  }

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 35, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (

    <header>
      <div className={style.logo}>
        <Img fixed={data.logo.childImageSharp.fixed} draggable={false} style={{ marginTop: "10px" }} />
      </div>
      <nav className={clsx({ [style.active]: controlMenu })}>
        <ul>
          <li onClick={() => handleMenu(false)}><AnchorLink to="/#anchorAbout"><span>Sobre</span></AnchorLink></li>
          <li onClick={() => handleMenu(false)}><AnchorLink to="/#anchorSkills"><span>Skills</span></AnchorLink></li>
          <li onClick={() => handleMenu(false)}><AnchorLink to="/#anchorProjects"><span>Projetos</span></AnchorLink></li>
          <li onClick={() => handleMenu(false)}><AnchorLink to="/#anchorExperiences"><span>Experiências</span></AnchorLink></li>
          <li onClick={() => handleMenu(false)}><AnchorLink to="/#anchorBlog"><span>Blog</span></AnchorLink></li>
        </ul>
      </nav>
      <div className={style.menuToggle} onClick={() => handleMenu(!controlMenu)}>
        {!controlMenu 
          ? <FaBars className={style.icon}
          /> 
          : <FaTimes className={style.icon}/>}
      </div>
    </header>
  )
}

export default Header