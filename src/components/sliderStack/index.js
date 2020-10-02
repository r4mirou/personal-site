import React, { useEffect, useState, useRef, createRef } from 'react'
import { useSelector } from "react-redux"
import "./styles.scss"

const SliderStack = (props) => {
  const theme = useSelector(state => state.theme.theme)
  const initilChechIndex = Math.floor(props.componentsIn.length / 2)
  const [currentCheckIndex, setCurrentCheckIndex] = useState(initilChechIndex);

  useEffect(() => {
    componentsRadio[currentCheckIndex].ref.current.checked = true
  })

  const move = (currentIndex) => {
    if (currentIndex < 0)
      currentIndex = props.componentsIn.length - 1
    else if (currentIndex > props.componentsIn.length - 1)
      currentIndex = 0

    setCurrentCheckIndex(currentIndex)
    componentsRadio[currentIndex].ref.current.checked = true
  }

  let componentsRadio = [];
  for (var i = 0; i < props.componentsIn.length; i++)
    componentsRadio.push(<input
      key={i}
      ref={createRef()}
      type="radio"
      name="slider"
      id={"slide-" + i}
      className="slider__radio"
    />)

  let components = props.componentsIn.map((item, i) =>
    <label
      key={i}
      htmlFor={"slide-" + i}
      className={"slider__item slider__item--" + i + " card"}
      onClick={() => move(i)}
    >
      {item}
    </label>)

  let componentsBullets = [];
  for (var i = 0; i < props.componentsIn.length; i++)
    componentsBullets.push(<label
      key={i}
      htmlFor={"slide-" + i}
      className={"bullets__item bullets__item--" + i}
      onClick={() => move(i)}
    />)

  return <div>
    <div className="title"
      style={{ color: theme.textColor.primaryText }}
    ><h3>{props.title}</h3></div>
    <div style={{position:"relative"}}>
      <div
        className="buttonDirection left"
        onClick={() => move(currentCheckIndex - 1)}        
      >
        &#10094;
      </div>
      <div
        className="buttonDirection right"
        onClick={() => move(currentCheckIndex + 1)}
      >
        &#10095;
      </div>
    </div>
    <div className="section slider">
      {componentsRadio}
      <div className="slider__holder">
        {components}
      </div>
      <div className="bullets">
        {componentsBullets}
      </div>
    </div>
  </div>
}

export default SliderStack
