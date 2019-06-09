import { combineReducers } from "redux";
import { alert } from "./alertReducer";
import { authentication } from './authReducer';
import { register } from './userReducer';

const rootReducer = combineReducers({
  //add all new reducers here
  alert,
  authentication,
  register
});

export default rootReducer;
