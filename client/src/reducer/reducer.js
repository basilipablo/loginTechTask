const initialState = {
    logged: false,
    authMessage: '',
    user: null,
};

const authenticationReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'LOG_IN': {
            return {
                ...state,
                logged: true,
            }
        }
        case 'LOG_OUT': {
            return {
                ...state,
                logged: false,
                user: null,
            }
        }
        case 'AUTH_ERROR': {
            return {
                ...state,
                authMessage: action.payload,
            }
        }
        case 'GET_USER_DATA': {
            return {
                ...state,
                logged: true,
                user: action.payload,
            }
        }
        default:
            return {
                ...state
            }
    }
}

export default authenticationReducer