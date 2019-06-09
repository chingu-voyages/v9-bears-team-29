export const userService = {
    register,
    signOut,
    signIn
}

async function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ user: user })
    };

    const response = await fetch(`/register`, requestOptions);
    const res = handleResponse(response);
    return res;
};

async function signIn(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ params: user })
    };

    const response = await(`/sign_in`, requestOptions);
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