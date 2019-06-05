import { combineReducers } from 'redux';
import { alertReducer } from './alertReducer';
//import all reducers here

const rootReducer = combineReducers({
//add all new reducers here
    alertReducer,
})

export default rootReducer;