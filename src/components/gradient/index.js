import React from "react"
import { useSelector } from "react-redux"

const Gradient = () => {
  const theme = useSelector(state => state.theme.theme)

  return (
    <div
      style={{
        background: "#aaa",
        backgroundImage: theme.gradientLinear.gradientLayers,
        margin: "0 auto",
        marginTop: "120px",
        width: "100%",
        height: "100px",
        position: "absolute",
        zIndex: -1,
      }}
    ></div>
  )
}

export default Gradient
