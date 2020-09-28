// import { createStore } from 'redux';
// import reducer from '../reducers'

// const store = createStore(reducer);
// export default store;

import React from "react"
import { Provider } from "react-redux"
import { createStore as reduxCreateStore } from "redux"
import rootReducer from "../reducers"

const createStore = () => reduxCreateStore(rootReducer)

export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
)
