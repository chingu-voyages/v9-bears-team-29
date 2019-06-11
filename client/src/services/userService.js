import { authHeader } from '../helpers/authHeader';

export const userService = {
    register,
    signOut,
    login,
    addProfile,
    fetchProfile
}

async function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ user: user })
    };

    const response = await fetch(`/user/register`, requestOptions);
    const res = handleResponse(response);
    return res;
};

async function addProfile(data, userId) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ profile: data })
    }

    const response = await fetch(`/user/${userId}/save_profile`, requestOptions);
    const res = handleResponse(response);
    localStorage.setItem('profile', JSON.stringify(res));
    return res;
};

async function fetchProfile(userId) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }

    const response = await fetch(`/user/${userId}/get_profile`, requestOptions);
    const res = handleResponse(response);
    return res;
};

async function login(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ params: user })
    };

    const response = await fetch(`/user/sign_in`, requestOptions);
    const res = handleResponse(response);
    localStorage.setItem('user', JSON.stringify(res));
    return res;
}

function signOut() {
    localStorage.removeItem('user');
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        if(!response.ok){
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}