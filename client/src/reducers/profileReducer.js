import { userConstants } from '../constants/userConstants';

const profile = JSON.parse(localStorage.getItem('profile'));

let initialState = profile ? { saved: true, profile } : {};

export function userProfile(state = initialState, action){
    switch(action.type){
        case userConstants.ADD_PROFILE_REQUEST:
            return {
                saving: true,
                profile: action.profile
            };
        case userConstants.ADD_PROFILE_SUCCESS:
            return {
                saved: true,
                profile: action.profile
            };
        case userConstants.ADD_PROFILE_FAILURE:
            return {};
        case userConstants.GET_PROFILE_REQUEST:
            return {
                fetching: true,
                profile: action.profile
            };
        case userConstants.GET_PROFILE_SUCCESS:
            return {
                fetched: true,
                profile: action.profile
            };
        case userConstants.GET_PROFILE_FAILURE:
            return {};
        default:
            return state;
    }
}