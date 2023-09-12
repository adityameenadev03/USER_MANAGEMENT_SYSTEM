import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";

let rootReducer = combineReducers({ auth: authReducer, users: userReducer });

export default rootReducer;
