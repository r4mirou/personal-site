import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Header from "./header"
import { useSelector } from "react-redux"

const Layout = ({ children }) => {
  const theme = useSelector(state => state.theme.theme)

  return (
    <>
      <Header />
      <main>{children}</main>
      <footer >
        <div style={{height:"50px", 
        background: theme.pallete.componentTransparency,
        color:theme.textColor.componentText,
        display:"flex",
        justifyContent:"flex-end",
        padding:"20px",
        boxShadow: "0px -3px 14px -2px " + theme.pallete.primary,
        }}>
            Developed by &nbsp;<span style={{color: theme.pallete.primary}}>Ramiro4Dev!</span>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
