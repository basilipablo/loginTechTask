const initialState = {
    EURUSDPrice: 0,
    timeStamp: 0
};

const EURUSDReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'RENEW_EURUSD': {
            return {
                ...state,
                EURUSDPrice: action.payload.EURUSDPrice,
                timeStamp: action.payload.timeStamp,
            }
        }
        default:
        return {
            ...state
        }
    }
}

export default EURUSDReducer;