import {
    combineReducers
} from 'redux';
import authReducer from './authReducer';
import EURUSDReducer from './EURUSDReducer';

const reducer = combineReducers({
    authReducer,
    EURUSDReducer,
});


export default reducer;