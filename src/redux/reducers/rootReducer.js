
import { combineReducers } from 'redux'
import CustomReducer from "./customReducer"

const rootReducer = combineReducers({
   customReduceData : CustomReducer
})

export default rootReducer