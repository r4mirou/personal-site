import React, { useEffect, useRef } from 'react'
import { useSelector } from "react-redux"
import "./styles.scss"

const SliderStack = (props) => {
  const theme = useSelector(state => state.theme.theme)

  const initialCheck = useRef(null)
  useEffect(() => {
    initialCheck.current.checked = true
  })

  let componentsRadio = [];
  for (var i = 0; i < props.componentsIn.length; i++)
      componentsRadio.push(<input
      key={i}
      ref={i === Math.floor(props.componentsIn.length / 2) ? initialCheck : null}
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
    >
      {item}
    </label>)

  let componentsBullets = [];
  for (var i = 0; i < props.componentsIn.length; i++)
    componentsBullets.push(<label
      key={i}
      htmlFor={"slide-" + i}
      className={"bullets__item bullets__item--" + i}
    />)

  return <div>
    <div className="title"
    style={{color: theme.textColor.primaryText}}
    ><h3>{props.title}</h3></div>

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
