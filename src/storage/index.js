export const loadState = () => {
    try {
        const token = localStorage.getItem('token');
        const loggedIn = localStorage.getItem('loggedIn');
        if (token === null){
            return undefined;
        }
        return {User: {token: token, loggedIn: (loggedIn === 'true')}};
    }
    catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        localStorage.setItem('loggedIn', state.userData.loggedIn);
        localStorage.setItem('token', state.userData.token);
    }
    catch (err) {
        console.log(err);
    }
};