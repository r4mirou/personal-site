import React, { useRef, useEffect } from "react"
import style from "./style.module.css"
import clsx from "clsx"
import slideLeft from "../../utils/efectsCss/slideLeft.module.css"
import slideRight from "../../utils/efectsCss/slideRight.module.css"

const Slider = props => {
  var refContainerImage = useRef(null)

  var slideIndex
  var slideIndexHistory
  useEffect(() => {
    slideIndex = 0
    showDivs(slideIndex)
  })

  const plusDivs = (n, direction) => {
    slideIndexHistory = slideIndex
    showDivs((slideIndex += n), direction)
  }

  const showDivs = (n, direction) => {
    if (n >= props.refs.length) {
      slideIndex = 0
    }
    if (n < 0) {
      slideIndex = props.refs.length - 1
    }
    if (slideIndexHistory !== undefined)
      props.refs[slideIndexHistory].current.style.setProperty("display", "none")

    props.refs[slideIndex].current.style.setProperty("display", "block")

    refContainerImage.current.classList.remove(slideLeft.slideLeft)
    refContainerImage.current.classList.remove(slideRight.slideRight)
    void refContainerImage.current.offsetWidth

    if (direction === "go")
      refContainerImage.current.classList.add(slideLeft.slideLeft)
    else if (direction === "back")
      refContainerImage.current.classList.add(slideRight.slideRight)
  }

  return (
    <div className={style.container}>
      <div className={style.containerImage} ref={refContainerImage}>
        {props.componentsIn.map((item, i) =>
          <div key={i} ref={props.refs[i]} style={{ display: "none" }}>
            {item}
          </div>
        )}
      </div>
      <div>
        <div className={style.left} onClick={() => plusDivs(-1, "back")}>
          &#10094;
        </div>
        <div className={style.right} onClick={() => plusDivs(1, "go")}>
          &#10095;
        </div>
      </div>
    </div>
  )
}

export default Slider
