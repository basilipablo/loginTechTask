import axios from 'axios';

export function logIn(obj) {
    return async (dispatch) => {
        try {
            const response = await axios.post(`http://backendapi/login`, {
                ...obj
            })
            const data = response.data.data;
            console.log(data, 'dont think we will ever get here without a back end');
            dispatch({
                type: 'LOG_IN',
            });
        } catch (error) {
            dispatch({
                type: 'AUTH_ERROR',
                payload: 'Sorry, we couldn`t connect to the server'
            });
    }
}
}

export function resetPass(obj) {
    return async (dispatch) => {
        try {
            const response = await axios.post(`http://backendapi/resetpassword`, {
                ...obj
            })
            const data = response.data.data;
            console.log(data, 'dont think we will ever get here without a back end');
            dispatch({
                type: 'RESET_PASS',
            });
        } catch (error) {
            dispatch({
                type: 'AUTH_ERROR',
                payload: 'Sorry, we couldn`t connect to the server'
            });
        }
    }
}