import { combineReducers } from "redux";
import counterReducer from "./counter";
import userInfoReducer from "./userInfoReducer";

// combine reducer is used to combine all reducer 
// in one place then we can pass to create store
const allReducer = combineReducers({
    counter: counterReducer,
    userInfo: userInfoReducer
})

export default allReducer;