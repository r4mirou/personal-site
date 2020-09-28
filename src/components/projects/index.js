import React from 'react'
import { useSelector } from "react-redux"
import SliderStack from '../sliderStack'
import { components } from "./componentsIn"

const Projects = () => {
  const theme = useSelector(state => state.theme.theme)

  return <div style={{
    paddingTop: "30vh",
    paddingBottom: "20vh",
    clipPath: "polygon(0 0, 100% 18%, 100% 100%, 0 84%)",
    background: theme.gradientLinear.gradientPrimary,
  }}>
    <SliderStack title={"Alguns projetos legais..."} componentsIn={components()} />
  </div>
}

export default Projects
