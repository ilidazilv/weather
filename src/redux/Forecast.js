import * as ActionTypes from './ActionTypes';

export const Forecast = (state = {
    isLoading: false,
    errMess: false,
    forecast: false
}, action) => {
    switch (action.type){
        case ActionTypes.GETTING_FORECAST:
            return {...state, isLoading: true, errMess: false, forecast: false};
        case ActionTypes.GET_FORECAST_ERROR:
            return {...state, isLoading: false, errMess: action.payload};
        case ActionTypes.GET_FORECAST_SUCCESS:
            return {...state, isLoading: false, errMess: false, forecast: action.payload};
        default: return state
    }
}