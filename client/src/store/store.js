import {
    createStore,
    applyMiddleware
} from "redux";
import {
    composeWithDevTools
} from 'redux-devtools-extension';
import authenticationReducer from "../reducer/reducer";
import thunk from "redux-thunk";

const store = createStore(authenticationReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store