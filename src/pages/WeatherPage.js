import {useEffect} from "react";
import {Col, Container, Row} from "reactstrap";
import {LoadingComponent} from "../components/LoadingComponent";

const WeatherPage = (props) => {
    const tmp = props.WLocation.split('_');
    useEffect(() => {
        if(!props.forecast.isLoading && !props.forecast.errMess && !props.forecast.forecast){
            console.log('works');
            if(tmp){
                props.get_forecast(tmp[0], tmp[1]);
            }
        }
    }, [])
    if(!props.forecast.isLoading && props.forecast.forecast){
        return(
            <Container>
                <Row>
                    <Col>
                        <h3>Right now in {tmp[0]}, {tmp[1]}</h3>
                        <table className='w-100'>
                            <tbody>
                            <tr>
                                <td>
                                    Temperature
                                </td>
                                <td>
                                    {props.forecast.forecast.current.temp_c}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Wind Speed
                                </td>
                                <td>
                                    {props.forecast.forecast.current.wind_kph} kph
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Weather
                                </td>
                                <td>
                                    {props.forecast.forecast.current.condition.text}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Visibility
                                </td>
                                <td>
                                    {props.forecast.forecast.current.vis_km} km
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
                <Row>
                    {props.forecast.forecast.forecast.forecastday.map((item, id) => {
                        return (
                            <Col key={id} className='forecast-day-container'>
                                <img alt={item.date} style={{maxHeight: 50}} className='d-block mx-auto' src={item.day.condition.icon}/>
                                Forecast on {item.date}
                                <table className='w-100'>
                                    <tbody>
                                    <tr>
                                        <td>
                                            Max temperature:
                                        </td>
                                        <td>
                                            {item.day.maxtemp_c}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Min temperature:
                                        </td>
                                        <td>
                                            {item.day.mintemp_c}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Sunrise:
                                        </td>
                                        <td>
                                            {item.astro.sunrise}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Sunset:
                                        </td>
                                        <td>
                                            {item.astro.sunset}
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        )
    } else {
        return(
            <LoadingComponent/>
        )
    }

}

export default WeatherPage;