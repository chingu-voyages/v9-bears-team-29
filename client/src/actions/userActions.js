import { userConstants } from '../constants/userConstants';
import { alertActions } from './alertActions';
import { history } from '../helpers/history';

import { userService } from '../services/userService';

export const userActions = {
    login,
    register,
    signOut,
    saveProfile,
    getProfile
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user).then((user) => {
            dispatch(success(user));
            history.push('/user/sign_in');
        }, error => {
            dispatch(failure(error.toString()));
            dispatch(alertActions.error(error.toString()));
        })
    }

    function request(user) { return { type: userConstants.ADD_USER_REQUEST, user }};
    function success(user) { return { type: userConstants.ADD_USER_SUCCESS, user }};
    function failure(error) { return { type: userConstants.ADD_USER_FAILURE, error }};
};

function login(user) {
    return dispatch => {
        dispatch(request(user));

        userService.login(user).then((user) => {
            dispatch(success(user));
            history.push('/user/browse');
        }, error => {
            dispatch(failure(error.toString()));
            dispatch(alertActions.error(error.toString()));
        })
    }

    function request(user) { return { type: userConstants.USER_LOGIN_REQUEST, user }};
    function success(user) { return { type: userConstants.USER_LOGIN_SUCCESS, user }};
    function failure(error) { return { type: userConstants.USER_LOGIN_FAILURE, error }};
}

function signOut() {
    userService.signOut();
    return { type: userConstants.USER_SIGNOUT }
}

function saveProfile(data, userId){
    return dispatch => {
        dispatch(request(data));

        userService.addProfile(data, userId).then((profile) => {
            dispatch(success(profile));
            history.push('/user/profile');
        },
        error => {
            dispatch(failure(error.toString()));
            dispatch(alertActions.error(error.toString()))
        })
    }

    function request(data) { return { type: userConstants.ADD_PROFILE_REQUEST, data }};
    function success(profile) { return { type: userConstants.ADD_PROFILE_SUCCESS, profile }};
    function failure(error) { return { type: userConstants.ADD_PROFILE_FAILURE, error }};
}

function getProfile(userId) {

    return dispatch => {
        dispatch(request(userId));

        userService.fetchProfile(userId).then((profile) => {
            dispatch(success(profile));
        },
        error => {
            dispatch(failure(error.toString()));
            dispatch(alertActions.error(error.toString()))
        })
    }

    function request(userId) { return { type: userConstants.GET_PROFILE_REQUEST, userId }};
    function success(profile) { return { type: userConstants.GET_PROFILE_SUCCESS, profile }};
    function failure(error) { return { type: userConstants.GET_PROFILE_FAILURE, error }};
}