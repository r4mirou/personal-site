import React, { useRef } from "react"
import style from "./style.module.css"
import slide from "../../utils/efectsCss/slideShake.module.css"
import slideSwing from "../../utils/efectsCss/slideSwing.module.css"
import bounceDown from "../../utils/efectsCss/bounceDown.module.css"
import bounceUp from "../../utils/efectsCss/bounceUp.module.css"
import clsx from "clsx"
import { useSelector } from "react-redux"
import BackgroundImage from "gatsby-background-image"
import aboutUseImages from "../about/queries/images.graphql"

const CardContentDetail = props => {
  const theme = useSelector(state => state.theme.theme)
  const cardContentRef = useRef(null)
  const refUpBtnMore = useRef(null)
  const refDownBtnMore = useRef(null)
  const [controlDetails, setControlDetails] = React.useState(false)
  const darknessFilterControl = useSelector(
    state => state.general.darknessFilterControl
  )
  const { detailImg, detailImgDark } = aboutUseImages()

  function handleDetails(status) {
    setControlDetails(status)
  }

  const handleScrollCardContent = e => {
    var top = e.target.scrollTop
    var maxTop = e.target.scrollHeight - e.target.clientHeight

    if (top > 0) refUpBtnMore.current.style.setProperty("visibility", "visible")
    else refUpBtnMore.current.style.setProperty("visibility", "hidden")

    if (parseInt(top) === maxTop)
      refDownBtnMore.current.style.setProperty("visibility", "hidden")
    else refDownBtnMore.current.style.setProperty("visibility", "visible")
  }

  const scrollY = move => {
    var currentScrollValue = cardContentRef.current.scrollTop
    var value =
      move === "up" ? currentScrollValue - 150 : currentScrollValue + 150
    cardContentRef.current.scroll({
      top: value,
      behavior: "smooth",
    })
  }

  return (
    <>
      <div
        className={clsx(style.containerRow, slideSwing.swing)}
        onMouseEnter={() => handleDetails(true)}
        onMouseLeave={() => handleDetails(false)}
      >
        <div
          className={clsx(style.itemCard, style.card)}
          style={{ background: theme.pallete.component }}
        >
          <div
            className={style.readMore}
            style={{ background: theme.pallete.componentTransparency }}
            onClick={() => scrollY("up")}
          >
            <div className={bounceUp.bounceUp} ref={refUpBtnMore}>
              <svg
                width="4vw"
                height="4vh"
                viewBox="0 0 500 500"
                style={{ transform: "rotate(180deg)" }}
              >
                <path
                  fill={theme.pallete.primary}
                  d="M240,0C107.452,0,0,107.452,0,240s107.452,240,240,240c132.486-0.15,239.85-107.514,240-240C480,107.452,372.548,0,240,0 z M240,464C116.288,464,16,363.712,16,240S116.288,16,240,16c123.653,0.141,223.859,100.347,224,224 C464,363.712,363.712,464,240,464z"
                />
                <path
                  fill={theme.pallete.primary}
                  d="M370.112,170.576L240,300.688L109.888,170.576c-3.1-2.994-8.015-2.994-11.115,0c-3.178,3.069-3.266,8.134-0.197,11.312 l135.768,135.768c1.5,1.5,3.534,2.344,5.656,2.344c2.122,0,4.156-0.844,5.656-2.344l135.768-135.768 c0.067-0.064,0.132-0.13,0.196-0.196c3.069-3.178,2.982-8.242-0.196-11.312C378.246,167.31,373.182,167.398,370.112,170.576z"
                />
              </svg>
            </div>
          </div>
          <div
            className={style.cardContent}
            ref={cardContentRef}
            onScroll={event => handleScrollCardContent(event)}
          >
            {props.content}
          </div>
          <div
            className={style.readMore}
            style={{marginTop:"8px", background: theme.pallete.componentTransparency }}
            onClick={() => scrollY("down")}
          >
            <div className={bounceDown.bounceDown} ref={refDownBtnMore}>
              <svg width="4vw" height="4vh" viewBox="0 0 500 500">
                <path
                  fill={theme.pallete.primary}
                  d="M240,0C107.452,0,0,107.452,0,240s107.452,240,240,240c132.486-0.15,239.85-107.514,240-240C480,107.452,372.548,0,240,0 z M240,464C116.288,464,16,363.712,16,240S116.288,16,240,16c123.653,0.141,223.859,100.347,224,224 C464,363.712,363.712,464,240,464z"
                />
                <path
                  fill={theme.pallete.primary}
                  d="M370.112,170.576L240,300.688L109.888,170.576c-3.1-2.994-8.015-2.994-11.115,0c-3.178,3.069-3.266,8.134-0.197,11.312 l135.768,135.768c1.5,1.5,3.534,2.344,5.656,2.344c2.122,0,4.156-0.844,5.656-2.344l135.768-135.768 c0.067-0.064,0.132-0.13,0.196-0.196c3.069-3.178,2.982-8.242-0.196-11.312C378.246,167.31,373.182,167.398,370.112,170.576z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={clsx(style.itemDetails, style.details)}>
          <BackgroundImage
            Tag="section"
            fluid={
              darknessFilterControl
                ? detailImgDark.childImageSharp.fluid
                : detailImg.childImageSharp.fluid
            }
            className={clsx(style.image)}
          >
            <div
              className={clsx(
                style.contentDetails,
                { [style.contentDetailsIn]: controlDetails },
                { [slide.slideMe]: controlDetails }
              )}
            >
              {props.detail}
            </div>
          </BackgroundImage>
        </div>
      </div>
    </>
  )
}

export default CardContentDetail
