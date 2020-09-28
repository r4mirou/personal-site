export const lightTheme = () => {
  return {
    pallete: {
      primary: "rgba(95,2,169,1)", //#5F02A9
      primaryTransparency: "rgba(95,2,169,0.2)",
      secondary: "rgba(207,247,46,1)", //#CFF72E
      secondaryTransparency: "rgba(207,247,46,0.1)",
      background: "white",
      component: "white",
      componentTransparency: "rgba(0,0,0,0.03)",
    },
    textColor: {
      primaryText: "white",
      secondaryText: "#3d3d3d",
      componentText: "#7b7b7b",
    },
    gradientLinear: {
      gradientLayers:
        "linear-gradient(" +
        "rgba(95,2,169,1) 20%, " +
        "rgba(95,2,169,.9) 20%, " +
        "rgba(95,2,169,.8) 40%, " +
        "rgba(95,2,169,.7) 40%, " +
        "rgba(95,2,169,.5) 60%," +
        "rgba(95,2,169,.4) 60%, " +
        "rgba(255,255,255,.8) 80%, " +
        "rgba(255,255,255,.9) 80%)",
      gradientPrimary:
        "linear-gradient(" +
        "90deg," +
        "rgba(146,44,255,1) 0%," +
        "rgba(115,0,255,1) 44%," +
        "rgba(60,0,134,1) 100%)",
      gradientSecondary:
        "linear-gradient(" +
        "103deg," +
        "rgba(255,254,46,1) 0%," +
        "rgba(207,247,46,1) 30%," +
        "rgba(207,247,46,1) 70%," +
        "rgba(255,254,46,1) 100%)",
    },
  }
}

export const darkTheme = () => {
  return {
    pallete: {
      primary: "rgba(207,247,46,1)", //#CFF72E
      primaryTransparency: "rgba(207,247,46,0.2)",
      secondary: "rgba(95,2,169,1)", //#5F02A9
      secondaryTransparency: "rgba(95,2,169,0.2)",
      background: "#212121",
      component: "#292929",
      componentTransparency: "rgba(0,0,0,.2)",
    },
    textColor: {
      primaryText: "#343434",
      secondaryText: "#fff",
      componentText: "#7b7b7b",
    },
    gradientLinear: {
      gradientLayers:
        "linear-gradient(" +
        "rgba(207,247,46,1) 20%, " +
        "rgba(207,247,46,.9) 20%, " +
        "rgba(207,247,46,.8) 40%, " +
        "rgba(207,247,46,.7) 40%, " +
        "rgba(207,247,46,.5) 60%," +
        "rgba(207,247,46,.4) 60%, " +
        "rgba(255,255,255,.8) 80%, " +
        "rgba(255,255,255,.9) 80%)",
      gradientPrimary:
        "linear-gradient(" +
        "103deg," +
        "rgba(255,254,46,1) 0%," +
        "rgba(207,247,46,1) 30%," +
        "rgba(207,247,46,1) 70%," +
        "rgba(255,254,46,1) 100%)",
      gradientSecondary:
        "linear-gradient(" +
        "90deg," +
        "rgba(146,44,255,1) 0%," +
        "rgba(115,0,255,1) 44%," +
        "rgba(60,0,134,1) 100%)",
    },
  }
}
