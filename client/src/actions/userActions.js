import { userConstants } from '../constants/userConstants';
import { alertActions } from './alertActions';
import { history } from '../helpers/history';

import { userService } from '../services/userService';

export const userActions = {
    signIn,
    register,
    signOut
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

function signIn(user) {
    return dispatch => {
        dispatch(request(user));

        userService.signIn(user).then((user) => {
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