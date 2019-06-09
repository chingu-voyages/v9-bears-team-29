import { userConstants } from '../constants/userConstants';

export function register(state = {}, action){
    switch(action.type){
        case userConstants.ADD_USER_REQUEST:
            return {
                registering: true
            };
        case userConstants.ADD_USER_SUCCESS:
            return {};
        case userConstants.ADD_USER_FAILURE:
            return {};
        default:
            return state;
    }
}