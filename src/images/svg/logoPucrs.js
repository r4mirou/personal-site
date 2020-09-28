import React from "react"

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 98 98",
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g
      transform="translate(0.000000,90.000000) scale(0.100000,-0.100000)"
      fill={fill}
      stroke="none"
    >
      <path
        d="M350 856 c-184 -52 -319 -226 -320 -411 -1 -342 394 -545 673 -345
        259 186 226 581 -60 724 -90 46 -200 58 -293 32z m273 -53 c82 -39 154 -110
        194 -190 26 -53 28 -67 28 -168 0 -101 -2 -115 -29 -170 -38 -76 -114 -153
        -190 -190 -76 -37 -202 -46 -288 -21 -114 33 -223 142 -263 264 -27 83 -18
        199 21 282 71 150 203 231 369 227 78 -2 99 -6 158 -34z"
      />
      <path
        d="M428 535 c-31 -17 -52 -71 -42 -109 10 -40 50 -66 99 -66 29 0 45 5
        49 15 4 12 -1 14 -33 9 -50 -8 -81 19 -81 70 0 48 24 69 72 63 27 -4 38 -1 38
        8 0 27 -59 33 -102 10z"
      />
      <path
        d="M722 534 c-33 -23 -25 -53 23 -85 22 -15 40 -35 40 -46 0 -15 -8 -18
        -43 -17 -54 1 -51 -20 4 -24 32 -2 44 2 63 22 30 31 23 50 -28 75 -48 25 -57
        37 -40 57 8 10 21 13 42 8 22 -5 28 -3 25 7 -7 20 -59 22 -86 3z"
      />
      <path
        d="M98 450 c-3 -84 -2 -90 17 -90 19 0 20 6 17 81 -4 79 -3 81 20 77 29
        -4 35 -33 12 -59 -14 -15 -14 -19 -2 -19 26 0 51 26 51 54 0 35 -17 46 -70 46
        l-42 0 -3 -90z"
      />
      <path
        d="M230 460 c6 -94 11 -100 90 -98 l55 1 0 89 c0 76 -2 88 -17 88 -14 0
        -18 -12 -20 -77 -3 -78 -3 -78 -32 -81 -38 -5 -46 10 -46 91 0 57 -3 67 -17
        67 -16 0 -17 -9 -13 -80z"
      />
      <path
        d="M553 450 c0 -76 3 -90 16 -90 14 0 15 12 13 76 -4 79 3 99 31 88 24
        -9 22 -55 -3 -61 -27 -7 -26 -13 16 -61 49 -57 77 -56 30 1 -35 42 -35 43 -16
        60 42 36 18 77 -45 77 l-41 0 -1 -90z"
      />
    </g>
  </svg>
)
export default SVG
