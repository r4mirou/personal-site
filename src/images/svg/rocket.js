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
        d="M538 711 c-69 -22 -112 -48 -157 -95 -19 -20 -45 -36 -57 -36 -62 0
        -85 -12 -121 -67 -42 -64 -38 -86 20 -91 27 -2 36 -8 41 -26 7 -28 119 -136
        140 -136 11 0 16 -9 16 -28 0 -16 6 -37 14 -48 14 -19 15 -19 52 1 69 37 94
        68 94 117 0 39 5 49 44 87 60 59 98 146 104 238 3 50 1 78 -8 88 -17 21 -110
        19 -182 -4z m151 -20 c12 -8 13 -21 4 -80 -15 -94 -45 -155 -110 -218 -81 -80
        -91 -80 -179 8 -41 40 -74 80 -74 89 0 18 65 101 100 128 45 34 113 65 165 72
        72 11 78 11 94 1z m-399 -200 c-15 -31 -26 -41 -45 -41 -13 0 -26 4 -29 8 -9
        15 43 80 66 84 31 4 33 -4 8 -51z m154 -183 c-13 -20 -52 -5 -96 39 -44 44
        -59 79 -41 97 9 9 144 -125 137 -136z m102 -14 c-3 -9 -6 -20 -6 -24 0 -13
        -72 -60 -82 -54 -4 3 -8 16 -8 30 0 18 10 29 38 43 47 24 66 26 58 5z"
      />
      <path
        d="M525 630 c-29 -11 -44 -32 -51 -68 -5 -26 -1 -36 24 -62 39 -39 74
        -39 113 -1 43 43 34 97 -20 126 -34 17 -38 17 -66 5z m65 -44 c29 -36 -13 -92
        -57 -75 -26 9 -32 56 -11 77 16 16 53 15 68 -2z"
      />
      <path
        d="M197 320 c-29 -33 -34 -50 -14 -50 13 0 77 60 77 73 0 18 -39 4 -63
        -23z"
      />
      <path
        d="M222 247 c-51 -52 -64 -77 -39 -77 16 0 117 101 117 118 0 25 -27 11
        -78 -41z"
      />
      <path
        d="M297 222 c-29 -30 -35 -52 -14 -52 16 0 67 52 67 68 0 21 -25 13 -53
        -16z"
      />
    </g>
  </svg>
)
export default SVG
