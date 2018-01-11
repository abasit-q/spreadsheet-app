
const initialState = {
    loggingIn: false,
    loginError: false,
    signupError: false,
    loggedIn: false,
    token: null,
    username: null,
    userId: null
};

export default (state = initialState, action) => {
    switch (action.type){
        case 'LOGGING_IN':
            return {...state, loggingIn: true, loggedIn: false, loginError: false, token: null};
        case 'LOGGED_IN':
            return {...state, loggingIn: false, loggedIn: true, loginError: false, token:action.payload.token};
        case 'LOGIN_ERROR':
            return {...state, loggingIn: false, loggedIn: false, loginError: true, signupError: false, token: null};
        case 'SIGNUP_ERROR':
            return {...state, loggingIn: false, loggedIn: false, loginError: false, signupError: true, token: null};
        case 'SIGN_OUT':
            return {...state, loggingIn: false, loggedIn: false, loginError: false, token: null};
        default:
            return state;
    }
}