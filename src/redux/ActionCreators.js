import * as ActionTypes from './ActionTypes';
import fetch from "cross-fetch";

export const get_forecast = (city, country) => (dispatch) => {
    dispatch(getting_forecast());
    return fetch('http://api.weatherapi.com/v1/forecast.json?key=62f8f67472244dd1942211250211705&q=' + city +',' + country + '&days=5&aqi=no&alerts=no')
        .then(response => {
            if(response.ok){
                return response
            } else {
                let error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        })
        .then(response => response.json())
        .then(data => dispatch(get_forecast_success(data)))
        .catch(error => dispatch(get_forecast_error(error)))
}
const getting_forecast = () => ({
    type: ActionTypes.GETTING_FORECAST
});

const get_forecast_success = (data) => ({
    type: ActionTypes.GET_FORECAST_SUCCESS,
    payload: data
})

const get_forecast_error = (err) => ({
    type: ActionTypes.GET_FORECAST_ERROR,
    payload: err
})