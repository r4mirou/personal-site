import React, { useRef } from "react"
import style from "./style.module.css"
import Slider from "../../slider"
import componentsIn from "./componentsIn"

const AboutDetail = () => {
  let refs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ]

  return (
    <>
      <div className={style.containerBox}>
        <Slider refs={refs} componentsIn={componentsIn} />
      </div>
    </>
  )
}

export default AboutDetail
