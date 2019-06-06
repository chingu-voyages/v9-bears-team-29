import { combineReducers } from 'redux';
import { alert } from './alertReducer';
//import all reducers here

const rootReducer = combineReducers({
//add all new reducers here
    alert,
})

export default rootReducer;