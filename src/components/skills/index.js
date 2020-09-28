import React, { useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import style from "./style.module.css"
import clsx from "clsx"
import { softCards } from "./componentsIn"

const Skills = () => {
  const softHorizontalScrollRef = useRef(null)
  const hardHorizontalScrollRef = useRef(null)
  useEffect(() => {
    softHorizontalScrollRef.current.scrollLeft = 0
    hardHorizontalScrollRef.current.scrollLeft = 2000
    touchScrollX("soft")
    touchScrollX("hard")
  })

  const theme = useSelector(state => state.theme.theme)
  const darknessFilterControl = useSelector(
    state => state.general.darknessFilterControl
  )

  const scrollX = (move, parent) => {
    var currentScroll = parent === "soft" ? softHorizontalScrollRef.current : hardHorizontalScrollRef.current

    var softScrollValue = softHorizontalScrollRef.current.scrollLeft
    var hardScrollValue = hardHorizontalScrollRef.current.scrollLeft
    var softValue = move === "left" ? softScrollValue - 170 : softScrollValue + 170
    var hardValue = move === "left" ? hardScrollValue + 170 : hardScrollValue - 170

    softHorizontalScrollRef.current.scrollTo({
      left: softValue,
      behavior: "smooth",
    })

    hardHorizontalScrollRef.current.scrollTo({
      left: hardValue,
      behavior: "smooth",
    })
  }

  const touchScrollX = (parent) => {
    var currentScroll = parent === "soft" ? softHorizontalScrollRef.current : hardHorizontalScrollRef.current
    let isDown = false;
    let startX;

    let hardScrollLeft;
    let softScrollLeft;

    currentScroll.addEventListener("mousedown", e => {
      isDown = true;
      currentScroll.classList.add("active");
      startX = e.pageX - currentScroll.offsetLeft;

      softScrollLeft = softHorizontalScrollRef.current.scrollLeft;
      hardScrollLeft = hardHorizontalScrollRef.current.scrollLeft;
    });
    currentScroll.addEventListener("mouseleave", () => {
      isDown = false;
      currentScroll.classList.remove("active");
    });
    currentScroll.addEventListener("mouseup", () => {
      isDown = false;
      currentScroll.classList.remove("active");
    });
    currentScroll.addEventListener("mousemove", e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - currentScroll.offsetLeft;
      const walk = x - startX;

      softHorizontalScrollRef.current.scrollLeft = softScrollLeft - walk;
      hardHorizontalScrollRef.current.scrollLeft = hardScrollLeft + walk;
    });
  }

  return <div className={style.root}>
    <div className={style.divTitle} style={{ color: theme.textColor.componentText }}>
      <h1>#SKILLS</h1>
    </div>

    <div className={style.container}>
      <div className={style.left}
        style={{ color: theme.pallete.primary }}
        onClick={() => scrollX("left", "hard")}>
        &#10094;
      </div>
      <div className={style.horizontalScroll} ref={softHorizontalScrollRef}>
        <div className={clsx({
          [style.leftSoftShadowLight]: !darknessFilterControl,
          [style.leftSoftShadowDark]: darknessFilterControl
        })} />
        <div className={clsx({
          [style.rightSoftShadowLight]: !darknessFilterControl,
          [style.rightSoftShadowDark]: darknessFilterControl
        })} />
        {softCards()}
      </div>
      <div className={style.horizontalScroll} ref={hardHorizontalScrollRef}>
        <div className={clsx({
          [style.leftSoftShadowLight]: !darknessFilterControl,
          [style.leftSoftShadowDark]: darknessFilterControl
        })} />
        <div className={clsx({
          [style.rightSoftShadowLight]: !darknessFilterControl,
          [style.rightSoftShadowDark]: darknessFilterControl
        })} />
        {softCards()}
      </div>
      <div className={style.right}
        style={{ color: theme.pallete.primary }}
        onClick={() => scrollX("right", "hard")}>
        &#10095;
      </div>
    </div>
  </div>
}
export default Skills