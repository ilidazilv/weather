import {Redirect, Switch, Route, withRouter} from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import HomePage from "../pages/HomePage";
import WeatherPage from "../pages/WeatherPage";
import '../style/main.scss';
import {connect} from "react-redux";
import {get_forecast} from "../redux/ActionCreators";

const mapStateToProps = state => {
    return{
        forecast: state.forecast
    }
}

const mapDispatchToProps = dispatch => ({
    get_forecast: (city, country, setWeather) => dispatch(get_forecast(city, country, setWeather))
})

const MainComponent = (props) => {
    const WeatherPageWithLoc = ({match}) => {
        return <WeatherPage get_forecast={props.get_forecast}  forecast={props.forecast} WLocation={match.params.WLocation}/>
    }
    return(
        <div>
            <HeaderComponent/>
            <Switch>
                <Route path='/home' component={HomePage}/>
                <Route path='/weather/:WLocation' component={WeatherPageWithLoc}/>
                <Redirect to='/home'/>
            </Switch>
        </div>
    )
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));