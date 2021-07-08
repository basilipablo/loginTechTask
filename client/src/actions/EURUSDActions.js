export function EURUSDActions(obj) {
    return (dispatch) => {
        try {
            dispatch({
                type: 'RENEW_EURUSD',
                payload: obj,
            });
        } catch (error) {
            dispatch({
                type: 'AUTH_ERROR',
                payload: 'Sorry, we couldn`t connect to the server'
            });
        }
    }
}