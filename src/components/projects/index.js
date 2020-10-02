import React from 'react'
import { useSelector } from "react-redux"
import style from "./style.module.css"
import SliderStack from '../sliderStack'
import { components } from "./componentsIn"

const Projects = () => {
  const theme = useSelector(state => state.theme.theme)

  return <div className={style.backgroundGradient}
    style={{ background: theme.gradientLinear.gradientPrimary }}>
    <SliderStack title={"Alguns projetos legais..."} componentsIn={components()} />
  </div>
}

export default Projects
