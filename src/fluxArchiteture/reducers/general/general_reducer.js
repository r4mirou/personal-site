var INITIAL_STATE = {
  darknessFilterControl: false,
}
export default function general(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "DARKNESS_CONTROL":
      return { ...state, darknessFilterControl: action.status }
    default:
      return state
  }
}
