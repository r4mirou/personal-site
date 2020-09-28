import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import style from "./style.module.css"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import clsx from "clsx"

import { useSelector } from "react-redux"

const Header = () => {
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

  const theme = useSelector(state => state.theme.theme)

  return (
    <header
      style={{ background: "rgba(0,0,0,.3"}}
      className={style.header}
    >
      <div className={style.gridContainer}>
        <div className={style.logo}>
          <Img fixed={data.logo.childImageSharp.fixed} draggable={false}/>
        </div>
        <div
          style={{ color: theme.textColor.primaryText }}
          className={clsx(style.itemMenu, style.swing)}
        >
          Experiências{" "}
        </div>
        <div
          style={{ color: theme.textColor.primaryText }}
          className={clsx(style.itemMenu, style.swing)}
        >
          Sobre
        </div>
        <div
          style={{ color: theme.textColor.primaryText }}
          className={clsx(style.itemMenu, style.swing)}
        >
          {" "}
          Projetos
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}
Header.defaultProps = {
  siteTitle: `Title`,
}

export default Header

// <Link
//         to="/"
//         className={style.link}
//       ></Link>
