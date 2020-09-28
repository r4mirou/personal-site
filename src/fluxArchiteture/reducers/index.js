import { combineReducers } from "redux"
import theme from "./theme/theme.reducer"
import general from "./general/general_reducer"
export default combineReducers({
  theme,
  general,
})
