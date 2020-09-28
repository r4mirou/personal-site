import React, { useRef, useEffect } from "react"
import bgHeaderUseImages from "./queries/images.graphql"
import style from "./style.module.css"
import rotateCircles from "../../utils/efectsCss/rotateCircles.module.css"
import pulseNeon from "../../utils/efectsCss/pulseNeon.module.css"
import { useSelector } from "react-redux"
import clsx from "clsx"
import Img from "gatsby-image"
import ButtonLightSwitch from "../buttonLightSwitch"

const BgHeader = () => {
  const { bgHeader, profileEfect } = bgHeaderUseImages()
  const theme = useSelector(state => state.theme.theme)
  const filterDarknessRef = useRef(null)
  const darknessFilterControl = useSelector(
    state => state.general.darknessFilterControl
  )
  const [controlProfileData, setControlProfileData] = React.useState(false)

  useEffect(() => {
    filterDarknessRef.current.style.setProperty("--x", "-100px")
    filterDarknessRef.current.style.setProperty("--y", "-100px")
  })

  const handleProfileData = state => {
    setControlProfileData(state)
  }

  const move = (e, type) => {
    if (type === "M") {
      filterDarknessRef.current.style.setProperty("--x", e.pageX + "px")
      filterDarknessRef.current.style.setProperty("--y", e.pageY + "px")
    } else if (type === "T") {
      filterDarknessRef.current.style.setProperty(
        "--x",
        e.touches[0].pageX + "px"
      )
      filterDarknessRef.current.style.setProperty(
        "--y",
        e.touches[0].pageY + "px"
      )
    }
  }

  return (
    <div>
      <div
        style={{ background: "RGBA(23,0,20,1)", touchAction: "none" }}
        onMouseMove={event => {
          if (darknessFilterControl) move(event, "M")
        }}
        onTouchMove={event => {
          if (darknessFilterControl) move(event, "T")
        }}
      >
        <div
          ref={filterDarknessRef}
          className={clsx({ [style.filterDarkness]: darknessFilterControl })}
        >
          <Img fluid={bgHeader.childImageSharp.fluid} draggable={false}/>
          <div
            className={clsx(style.containerProfile, {
              [style.containerProfileOff]: darknessFilterControl,
            })}
          >
            <ul className={rotateCircles.ulEfect} style={{ zIndex: "1" }}>
              <li className={rotateCircles.liEfect}>
                <div
                  className={pulseNeon.neon}
                  style={{
                    borderRadius: "20px",
                    width: "15px",
                    height: "15px",
                    background: "yellowgreen",
                    "--space-shadow": "45px",
                  }}
                ></div>
              </li>
            </ul>
            <div className={style.containerPicture}>
              <div
                className={style.profileSelectArea}
                onMouseEnter={() => handleProfileData(true)}
                onMouseLeave={() => handleProfileData(false)}
                onClick={() => handleProfileData(!controlProfileData)}
              ></div>
              <div>
                <Img
                  draggable={false}
                  className={clsx(
                    style.profilePicture,
                    pulseNeon.neon,
                    { [pulseNeon.hover]: controlProfileData },
                    { [style.profilePictureHover]: controlProfileData }
                  )}
                  fluid={profileEfect.childImageSharp.fluid}
                />
              </div>
              <div
                className={clsx(style.profileData, {
                  [style.profileDataVisible]: controlProfileData,
                })}
              >
                <img src={require("../../images/profile-data.png")} draggable={false}/>
              </div>
            </div>
          </div>
        </div>
        <div className={style.containerLightSwitch}>
          <ButtonLightSwitch />
        </div>
      </div>
      <span>
        <div
          className={style.wave}
          style={{ background: theme.pallete.background }}
        >
          <svg>
            <defs>
              <clipPath id="svgPath">
                <path
                  fillOpacity="1"
                  d="M0,192L60,192C120,192,240,192,360,176C480,160,600,128,720,144C840,160,960,224,1080,224C1200,224,1320,160,1380,128L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                ></path>
              </clipPath>
            </defs>
          </svg>
        </div>
      </span>
    </div>
  )
}

export default BgHeader
