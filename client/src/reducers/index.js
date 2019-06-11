import { combineReducers } from "redux";
import { alert } from "./alertReducer";
import { authentication } from './authReducer';
import { register } from './userReducer';
import { userProfile } from './profileReducer';

const rootReducer = combineReducers({
  //add all new reducers here
  alert,
  authentication,
  register,
  userProfile
});

export default rootReducer;
