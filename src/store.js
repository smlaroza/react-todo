import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

//import our reducers
import listReducer from "./reducers/listReducer"

//combine reducers into a single object
const rootReducer = combineReducers({
  listReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

//export that object which is our store
export default store
