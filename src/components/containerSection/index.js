import React from "react"
import style from "./style.module.css"
import { useSelector } from "react-redux"

const Section = ({ children }) => {
  const theme = useSelector(state => state.theme.theme)
  return (
    <div className={style.container}>
      <main>{children}</main>
    </div>
  )
}

export default Section
