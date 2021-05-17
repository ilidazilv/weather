import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import {Forecast} from "./Forecast";

export const ConfigureStore = () => {
    return createStore(combineReducers({
        forecast: Forecast
    }), applyMiddleware(thunk))
}