import { lightTheme } from "../../../utils/themes"

var INITIAL_STATE = {
  theme: lightTheme(),
}
export default function theme(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "THEME_CONTROL":
      return { ...state, theme: action.value }
    default:
      return state
  }
}
